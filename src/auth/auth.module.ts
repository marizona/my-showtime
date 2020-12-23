import { forwardRef, Module } from "@nestjs/common";
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from '../config/keys';
import { AdminGuard } from './guards/admin.guard';
import { JwtAuthGuard } from './guards/jwt.guard';
import { JwtStrategy } from './guards/jwt-strategy';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        // secret: configService.get('JWT_SECRET'),
        secret: config.jwt,
        signOptions: { expiresIn: '1000000s' },
      }),
    }),
  ],
  providers: [AuthService, AdminGuard, JwtAuthGuard, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
