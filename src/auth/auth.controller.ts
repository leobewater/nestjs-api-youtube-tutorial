import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

// prefix route
@Controller('auth')
export class AuthController {
  // dependency injection
  // private authService: AuthService equal to this.authService = AuthSericve
  constructor(private authService: AuthService) {}

  // Route - /auth/signup
  @Post('signup')
  signup(@Body() dto: AuthDto) {
    // console.log({
    //   dto,
    // });
    return this.authService.signup(dto);
  }

  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
