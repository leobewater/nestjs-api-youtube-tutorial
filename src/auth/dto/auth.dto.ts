import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// using class validator package so need to define as class instead of interface
export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
