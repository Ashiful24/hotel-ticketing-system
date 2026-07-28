import { Test, TestingModule } from '@nestjs/testing';
import { TicketCreationService } from './ticket-creation.service';
import { PrismaService } from '@/prisma.service';
import { CreateTicketDto } from './dto/create-ticket-dto';
import { UpdateTicketDto } from './dto/update-ticket-dto';
import { BadRequestException, NotFoundException } from '@nestjs/common';

describe('TicketCreationService', () => {
  let service: TicketCreationService;
  let prismaService: PrismaService;

  const mockPrismaService = {
    tickets: {
      create: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    ticketStatus: {
      create: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TicketCreationService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<TicketCreationService>(TicketCreationService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // =========Create Ticket =============
  describe('createTicket', () => {
    it('should create a ticket successfully', async () => {
      const userId = 1;
      const dto: CreateTicketDto = {
        roomNumber: 101,
        title: 'Test Ticket',
        description: 'This is a test ticket',
        priorityId: 1,
        issueTypeId: 2,
      };

      const createdTicket = {
        id: 123,
        creatorId: userId,
        ticketCode: `TICKET-${Date.now()}`,
        roomNumber: dto.roomNumber,
        title: dto.title,
        description: dto.description,
        priorityId: dto.priorityId,
        issueTypeId: dto.issueTypeId,
        currentStatusId: 1,
        createdAt: new Date(),
      };

      mockPrismaService.tickets.create.mockResolvedValue(createdTicket);

      const result = await service.createTicket(userId, dto);

      expect(prismaService.tickets.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          creatorId: userId,
          roomNumber: dto.roomNumber,
          title: dto.title,
          description: dto.description,
          priorityId: dto.priorityId,
          issueTypeId: dto.issueTypeId,
          currentStatusId: 1,
          statuses: {
            create: {
              statusId: 1,
              changnedBy: userId,
              comment: "Your ticket has been created",
            },
          },
        }),
      });

      expect(result).toEqual(createdTicket);
    });

    it('should throw error if prisma create fails', async () => {
      const userId = 1;
      const dto: CreateTicketDto = {
        roomNumber: 101,
        title: 'Test Ticket',
        description: 'This is a test ticket',
        priorityId: 1,
        issueTypeId: 2,
      };

      const error = new Error('Database error');
      mockPrismaService.tickets.create.mockRejectedValue(error);

      await expect(service.createTicket(userId, dto)).rejects.toThrow('Database error');
    });
  });

  // ===========Update ticket =============
  describe('updateTicketsById', () => {
    const ticketId = 1;

    const updateDto: UpdateTicketDto = {
      roomNumber: 101,
      title: 'Air Conditioner Broken',
      description: 'The AC in room 101 is not working.',
      priorityId: 2,
      issueTypeId: 3,
    };

    it('should throw NotFoundException if ticket does not exist', async () => {
      mockPrismaService.tickets.findUnique.mockResolvedValue(null);

      await expect(service.updateTicketsById(ticketId, updateDto)).rejects.toThrow(NotFoundException);
      expect(mockPrismaService.tickets.findUnique).toHaveBeenCalledWith({ where: { id: ticketId } });
    });

    it('should update and return the ticket if it exists', async () => {
      const existingTicket = {
        id: ticketId,
        roomNumber: 101,
        title: 'Old Title',
        description: 'Old Desc',
        priorityId: 1,
        issueTypeId: 1,
      };

      const updatedTicket = { id: ticketId, ...updateDto };

      mockPrismaService.tickets.findUnique.mockResolvedValue(existingTicket);
      mockPrismaService.tickets.update.mockResolvedValue(updatedTicket);

      const result = await service.updateTicketsById(ticketId, updateDto);

      expect(result).toEqual(updatedTicket);
      expect(mockPrismaService.tickets.findUnique).toHaveBeenCalledWith({ where: { id: ticketId } });
      expect(mockPrismaService.tickets.update).toHaveBeenCalledWith({
        where: { id: ticketId },
        data: updateDto,
      });
    });
  });

  // ===========Delete ticket =============
  describe('DeleteTicketsById', () => {

    const ticketId = 42;

    it('should throw NotFoundException if ticket does not exist', async () => {
      mockPrismaService.tickets.findUnique.mockResolvedValue(null);

      await expect(service.deleteTicketsById(ticketId)).rejects.toThrow(NotFoundException);
      expect(mockPrismaService.tickets.findUnique).toHaveBeenCalledWith({ where: { id: ticketId } });
      expect(mockPrismaService.tickets.delete).not.toHaveBeenCalled();
    });

    it('should delete the ticket and return success message', async () => {
      const existingTicket = { id: ticketId, title: 'Sample Ticket' };

      mockPrismaService.tickets.findUnique.mockResolvedValue(existingTicket);
      mockPrismaService.tickets.delete.mockResolvedValue(undefined); // delete returns void

      const result = await service.deleteTicketsById(ticketId);

      expect(mockPrismaService.tickets.findUnique).toHaveBeenCalledWith({ where: { id: ticketId } });
      expect(mockPrismaService.tickets.delete).toHaveBeenCalledWith({ where: { id: ticketId } });
      expect(result).toEqual({ message: `Ticket with ID ${ticketId} has been deleted successfully.` });
    });
  });

  // ========= Reopend Ticket ===========
  describe('Reopend Ticket', () => {
    const ticketId = 101;
    const creatorId = 10;
    const otherUserId = 20;

    it('should throw if ticket is not found', async () => {
      mockPrismaService.tickets.findUnique.mockResolvedValue(null);

      await expect(service.reopenTicket(ticketId, creatorId)).rejects.toThrow(BadRequestException);
      expect(mockPrismaService.tickets.findUnique).toHaveBeenCalledWith({
        where: { id: ticketId },
        select: { id: true, creatorId: true, currentStatusId: true },
      });
    });

    it('should throw if user is not the creator', async () => {
      mockPrismaService.tickets.findUnique.mockResolvedValue({
        id: ticketId,
        creatorId,
        currentStatusId: 4,
      });

      await expect(service.reopenTicket(ticketId, otherUserId)).rejects.toThrow(BadRequestException);
    });

    it('should throw if ticket is not CLOSED', async () => {
      mockPrismaService.tickets.findUnique.mockResolvedValue({
        id: ticketId,
        creatorId,
        currentStatusId: 2, // Not closed
      });

      await expect(service.reopenTicket(ticketId, creatorId)).rejects.toThrow(BadRequestException);
    });

    it('should reopen the ticket successfully', async () => {
      mockPrismaService.tickets.findUnique.mockResolvedValue({
        id: ticketId,
        creatorId,
        currentStatusId: 4, // CLOSED
      });

      mockPrismaService.ticketStatus.create.mockResolvedValue({});
      mockPrismaService.tickets.update.mockResolvedValue({});

      const result = await service.reopenTicket(ticketId, creatorId, 'Reopening for further review');

      expect(mockPrismaService.ticketStatus.create).toHaveBeenCalledWith({
        data: {
          ticketId,
          statusId: 5,
          changnedBy: creatorId,
          comment: 'Reopening for further review',
        },
      });

      expect(mockPrismaService.tickets.update).toHaveBeenCalledWith({
        where: { id: ticketId },
        data: {
          currentStatusId: 5,
        },
      });

      expect(result).toEqual({ message: 'Ticket reopened successfully' });
    });

  });

});
