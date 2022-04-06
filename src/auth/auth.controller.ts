import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

// prefix route
@Controller('auth')
export class AuthController {
  // dependency injection
  // private authService: AuthService equal to this.authService = AuthSericve
  constructor(private authService: AuthService) {}

  // Routes
  // /auth/signup
  @Post('signup')
  signup() {
    return 'I am signed up';
  }

  @Post('signin')
  signin() {
    return 'I am signed in';
  }
}
