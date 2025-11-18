import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { FirebaseModule } from '../firebase/firebase.module';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
    imports: [FirebaseModule],
})
export class AuthModule {}