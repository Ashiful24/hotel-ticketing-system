import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RolesGuard implements CanActivate {
   constructor (private reflector : Reflector, private prisma : PrismaService) {}
 async canActivate(
    context: ExecutionContext,
  ): Promise<boolean>  {

    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!requiredRoles) return true;
   
    const req = context.switchToHttp().getRequest<Request>();

    const userId = req['user']?.id;
    if (!userId) throw new ForbiddenException('User not found');

    const roles = await this.prisma.user.findMany({
      where: { id: userId },
   
    });

    const userRoles = roles.map(r => r.userType);

    const hasRole = userRoles.some(role => requiredRoles.includes(role));
    if (!hasRole) throw new ForbiddenException('Insufficient permissions');

    return true;
  }
}
