import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';

@Controller('users')
export class UserController {
  // GET /users/me
  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@GetUser() user: User) {
    // console.log({
    //   user: req.user,
    // });

    return user;
  }
}
