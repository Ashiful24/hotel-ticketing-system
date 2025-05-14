// audit.interceptor.ts
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { mergeMap, Observable, } from 'rxjs';

@Injectable()
export class AuditInterceptor implements NestInterceptor {
  constructor(private prisma: PrismaService) { }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const httpCtx = context.switchToHttp();
    const request = httpCtx.getRequest();
    const method = request.method;

    // Only log write operations
    if (!['POST', 'PUT', 'PATCH', 'DELETE'].includes(method)) {
      return next.handle();
    }

    const user = request.user;
    const route = request.route?.path;
    const body = request.body;
    const path = request.path;

    return next.handle().pipe(
      mergeMap(async (response) => {
        try {
          await this.prisma.auditLog.create({
            data: {
              userId: user?.id || 0,
              action: `${method} ${route}`,
              method,
              path,
              requestBody: JSON.stringify(body||{}),
              timestamp: new Date()
            },
          });
        } catch (err) {
          console.error('Audit log failed:', err);
        }
        return response; // ✅ You must return the original response
      }),
    );
  }
}
