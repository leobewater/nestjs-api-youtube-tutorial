import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  // dependency injection
  constructor(private prisma: PrismaService) {}
  signup() {
    // auth convert to json object
    return { msg: 'I have signed up' };
  }

  signin() {
    return { msg: 'I have signed in' };
  }
}
