import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// make this a global module and will be shared in app
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
