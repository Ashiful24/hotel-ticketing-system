import { Test, TestingModule } from '@nestjs/testing';
import { TicketAssingmentController } from './ticket-assingment.controller';
import { AuthGuard } from 'src/auth/auth.guard';

describe('TicketAssingmentController', () => {
  let controller: TicketAssingmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TicketAssingmentController],
      providers: [],
    })
      .overrideProvider(AuthGuard)
      .useValue({
        canActivate: jest.fn().mockReturnValue(true), // always allows access
      })
      .compile();

    controller = module.get<TicketAssingmentController>(TicketAssingmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
