import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    // auth convert to json object
    return { msg: 'I have signed up' };
  }

  signin() {
    return { msg: 'I have signed in' };
  }
}
