import { Test, TestingModule } from '@nestjs/testing';
import { TicketAssingmentService } from './ticket-assingment.service';

describe('TicketAssingmentService', () => {
  let service: TicketAssingmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TicketAssingmentService],
    }).compile();

    service = module.get<TicketAssingmentService>(TicketAssingmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
