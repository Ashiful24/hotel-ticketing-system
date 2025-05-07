import { Test, TestingModule } from '@nestjs/testing';
import { TicketCreationController } from './ticket-creation.controller';

describe('TicketCreationController', () => {
  let controller: TicketCreationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TicketCreationController],
    }).compile();

    controller = module.get<TicketCreationController>(TicketCreationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
