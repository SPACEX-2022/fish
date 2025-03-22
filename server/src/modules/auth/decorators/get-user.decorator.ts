import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayload } from '../dto/auth.dto';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): JwtPayload => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
); 