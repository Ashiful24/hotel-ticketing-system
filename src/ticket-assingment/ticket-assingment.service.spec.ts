import { Test, TestingModule } from '@nestjs/testing';
import { TicketAssingmentService } from './ticket-assingment.service';
import { PrismaService } from 'src/prisma.service';
import { BadRequestException, Logger } from '@nestjs/common';

describe('TicketAssingmentService', () => {
  let service: TicketAssingmentService;
  let prisma: Record<string, any>;
  const mockLogger = { log: jest.fn(), warn: jest.fn(), error: jest.fn() };

  beforeEach(async () => {
    jest.clearAllMocks();
    prisma = {
      ticketAssignment: {
        findUnique: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        findFirst: jest.fn(),
      },
      tickets: {
        findUnique: jest.fn(),
        update: jest.fn(),
      },
      user: {
        findUnique: jest.fn(),
      },
      user_userType: {
        findMany: jest.fn(),
      },
      ticketStatus: {
        create: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TicketAssingmentService,
        { provide: PrismaService, useValue: prisma },
        { provide: Logger, useValue: mockLogger },
      ],
    }).compile();

    service = module.get<TicketAssingmentService>(TicketAssingmentService);
  });

  // =================== assignTicket ===================
  describe('assignTicket', () => {
    it('should throw if already assigned', async () => {
      prisma.ticketAssignment.findUnique.mockResolvedValue({ id: 1 });
      await expect(service.assignTicket(1, { ticketId: 1, assignTo: 2 }))
        .rejects.toThrow(BadRequestException);
    });

    it('should throw if ticket not found', async () => {
      prisma.ticketAssignment.findUnique.mockResolvedValue(null);
      prisma.tickets.findUnique.mockResolvedValue(null);
      await expect(service.assignTicket(1, { ticketId: 1, assignTo: 2 }))
        .rejects.toThrow(BadRequestException);
    });

    it('should throw if assignee not found', async () => {
      prisma.ticketAssignment.findUnique.mockResolvedValue(null);
      prisma.tickets.findUnique.mockResolvedValue({ id: 1, currentStatusId: 1 });
      prisma.user.findUnique.mockResolvedValue(null);
      await expect(service.assignTicket(1, { ticketId: 1, assignTo: 2 }))
        .rejects.toThrow(BadRequestException);
    });

    it('should throw if assignee is not staff', async () => {
      prisma.ticketAssignment.findUnique.mockResolvedValue(null);
      prisma.tickets.findUnique.mockResolvedValue({ id: 1, currentStatusId: 1 });
      prisma.user.findUnique.mockResolvedValue({ id: 2 });
      prisma.user_userType.findMany.mockResolvedValue([
        { userType: { userTypeName: 'Customer' } },
      ]);
      await expect(service.assignTicket(1, { ticketId: 1, assignTo: 2 }))
        .rejects.toThrow(BadRequestException);
    });

    it('should assign ticket when valid', async () => {
      prisma.ticketAssignment.findUnique.mockResolvedValue(null);
      prisma.tickets.findUnique.mockResolvedValue({ id: 1, currentStatusId: 1 });
      prisma.user.findUnique.mockResolvedValue({ id: 2 });
      prisma.user_userType.findMany.mockResolvedValue([
        { userType: { userTypeName: 'Staff' } },
      ]);
      prisma.ticketAssignment.create.mockResolvedValue({ id: 123 });
      prisma.ticketStatus.create.mockResolvedValue({});
      prisma.tickets.update.mockResolvedValue({});

      const result = await service.assignTicket(1, { ticketId: 1, assignTo: 2 });
      expect(result).toEqual({ id: 123 });
    });
  });

  // =================== reassignTicket ===================
  describe('reassignTicket', () => {

    it('should throw if no assignment found', async () => {
      prisma.ticketAssignment.findFirst.mockResolvedValue(null);

      await expect(service.reassignTicket(1, { ticketId: 1, assignTo: 2 }))
        .rejects.toThrow(BadRequestException);
    });

    it('should throw if reassigned to the same user', async () => {
      prisma.ticketAssignment.findUnique.mockResolvedValue({ assignTo: 2 }); // current assignee
      prisma.user.findUnique.mockResolvedValue({ id: 2 });
      prisma.user_userType.findMany.mockResolvedValue([
        { userType: { userTypeName: 'Staff' } },
      ]);

      await expect(service.reassignTicket(99, { ticketId: 1, assignTo: 2 })).rejects.toThrow(BadRequestException);
    });


    it('should throw if assignee not found', async () => {
      prisma.ticketAssignment.findFirst.mockResolvedValue({ id: 1, assignTo: 3 });
      prisma.user.findUnique.mockResolvedValue(null);

      await expect(service.reassignTicket(1, { ticketId: 1, assignTo: 2 }))
        .rejects.toThrow(BadRequestException);
    });

    it('should throw if assignee is not staff', async () => {
      prisma.ticketAssignment.findFirst.mockResolvedValue({ id: 1, assignTo: 3 });
      prisma.user.findUnique.mockResolvedValue({ id: 2 });
      prisma.user_userType.findMany.mockResolvedValue([
        { userType: { userTypeName: 'Customer' } },
      ]);

      await expect(service.reassignTicket(1, { ticketId: 1, assignTo: 2 }))
        .rejects.toThrow(BadRequestException);
    });

    it('should reassign ticket when valid', async () => {
      prisma.ticketAssignment.findUnique.mockResolvedValue({
        ticketId: 1,
        assignTo: 5, // original user
      });

      prisma.user.findUnique.mockResolvedValue({ id: 2 });

      prisma.user_userType.findMany.mockResolvedValue([
        { userType: { userTypeName: 'Staff' } },
      ]);

      prisma.ticketAssignment.update.mockResolvedValue({
        ticketId: 1,
        assignTo: 2,
        assignedAt: new Date(),
      });

      const updateTicketStatusMock = jest
        .spyOn(service, 'updateTicketStatus')
        .mockResolvedValue(undefined); // mock internal method

      const result = await service.reassignTicket(99, {
        ticketId: 1,
        assignTo: 2,
      });

      expect(result).toEqual(
        expect.objectContaining({
          ticketId: 1,
          assignTo: 2,
        })
      );
    });
  });

  // =================== reslove ticket ===================
  describe('resolvedTicket', () => {
    it('should resolve ticket if assigned and status is IN_PROGRESS', async () => {
      // Arrange
      const ticketId = 1;
      const staffId = 2;
      const comment = 'Resolved after fixing';

      const ticketMock = {
        id: ticketId,
        currentStatusId: 2,
        assignment: [{ assignTo: staffId }],
      };

      prisma.tickets.findUnique.mockResolvedValue(ticketMock);

      const updateStatusMock = jest
        .spyOn(service, 'updateTicketStatus')
        .mockResolvedValue(undefined);

      // Act
      const result = await service.resolveTicket(ticketId, staffId, comment);

      // Assert
      expect(prisma.tickets.findUnique).toHaveBeenCalledWith({
        where: { id: ticketId },
        include: { assignment: true },
      });

      expect(updateStatusMock).toHaveBeenCalledWith(ticketId, 3, staffId, comment);



      expect(result).toEqual({ message: 'Ticket marked as resolved' });
    });

    it('should throw error if ticket not found', async () => {
      prisma.tickets.findUnique.mockResolvedValue(null);

      await expect(
        service.resolveTicket(1, 2, 'some comment')
      ).rejects.toThrow('Ticket not found');


    });

    it('should throw if staff is not assigned to the ticket', async () => {
      prisma.tickets.findUnique.mockResolvedValue({
        id: 1,
        currentStatusId: 2,
        assignment: [{ assignTo: 99 }], // not matching staffId
      });

      await expect(
        service.resolveTicket(1, 2, 'some comment')
      ).rejects.toThrow('You are not assigned to this ticket');


    });

    it('should throw if ticket is not in IN_PROGRESS status', async () => {
      prisma.tickets.findUnique.mockResolvedValue({
        id: 1,
        currentStatusId: 1, // not IN_PROGRESS
        assignment: [{ assignTo: 2 }],
      });

      await expect(
        service.resolveTicket(1, 2, 'some comment')
      ).rejects.toThrow('Ticket must be IN_PROGRESS to resolve it');

    });

  });

  // =================== closed ticket ===================
  describe('resolvedTicket', () => {
    it('should close the ticket if status is RESOLVED', async () => {
      const ticketId = 1;
      const staffId = 2;
      const comment = 'Closing after confirmation';

      const ticketMock = {
        id: ticketId,
        currentStatusId: 3, // RESOLVED
        assignment: [{ assignTo: staffId }],
      };

      prisma.tickets.findUnique.mockResolvedValue(ticketMock);

      const updateStatusMock = jest
        .spyOn(service, 'updateTicketStatus')
        .mockResolvedValue(undefined);

      const result = await service.closedTicket(ticketId, staffId, comment);

      expect(prisma.tickets.findUnique).toHaveBeenCalledWith({
        where: { id: ticketId },
        include: { assignment: true },
      });

      expect(updateStatusMock).toHaveBeenCalledWith(ticketId, 4, staffId, comment);

      expect(result).toEqual({ message: 'Ticket marked as closed' });
    });

    it('should throw if ticket is not found', async () => {
      prisma.tickets.findUnique.mockResolvedValue(null);

      await expect(service.closedTicket(1, 2, 'comment')).rejects.toThrow('Ticket not found');


    });

    it('should throw if ticket is not in RESOLVED status', async () => {
      prisma.tickets.findUnique.mockResolvedValue({
        id: 1,
        currentStatusId: 2, // Not RESOLVED
        assignment: [{ assignTo: 2 }],
      });

      await expect(service.closedTicket(1, 2, 'comment')).rejects.toThrow(
        'Ticket must be Resloved to closed it'
      );


    });

  });

});