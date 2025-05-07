import { Test, TestingModule } from '@nestjs/testing';
import { TicketCreationService } from './ticket-creation.service';

describe('TicketCreationService', () => {
  let service: TicketCreationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TicketCreationService],
    }).compile();

    service = module.get<TicketCreationService>(TicketCreationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
