import { Test, TestingModule } from '@nestjs/testing';
import { AuthGuard } from './auth.guard';
import { JwtService } from '@nestjs/jwt'; // Adjust if the dependency is different (e.g., Reflector or another service)

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthGuard,
        {
          provide: JwtService, // Replace with the actual dependency if different
          useValue: {
            // Mock methods here, e.g.:
            verify: jest.fn(),
            sign: jest.fn(),
            // Add other methods as needed
          },
        },
      ],
    }).compile();

    guard = module.get<AuthGuard>(AuthGuard);
  });

  it('should be defined', () => {
    expect(guard).toBeDefined();
  });
});
