import { Test, TestingModule } from '@nestjs/testing';
import { TicketCreationController } from './ticket-creation.controller';
import { AuthGuard } from 'src/auth/auth.guard'; // or from your local path

describe('TicketCreationController', () => {
  let controller: TicketCreationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TicketCreationController],
      providers: [],
    })
      .overrideProvider(AuthGuard)
      .useValue({
        canActivate: jest.fn().mockReturnValue(true), // always allow
      })
      .compile();

    controller = module.get<TicketCreationController>(TicketCreationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
