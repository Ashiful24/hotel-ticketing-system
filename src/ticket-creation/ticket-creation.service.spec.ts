import { Test, TestingModule } from '@nestjs/testing';
import { TicketCreationService } from './ticket-creation.service';
import { PrismaService } from 'src/prisma.service';
import { CreateTicketDto } from './dto/create-ticket-dto';

describe('TicketCreationService', () => {
  let service: TicketCreationService;
  let prismaService: PrismaService;

  const mockPrismaService = {
    tickets: {
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
});
