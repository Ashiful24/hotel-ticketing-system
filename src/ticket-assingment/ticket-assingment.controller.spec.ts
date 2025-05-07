import { Test, TestingModule } from '@nestjs/testing';
import { TicketAssingmentController } from './ticket-assingment.controller';

describe('TicketAssingmentController', () => {
  let controller: TicketAssingmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TicketAssingmentController],
    }).compile();

    controller = module.get<TicketAssingmentController>(TicketAssingmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
