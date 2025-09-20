import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInInput } from './dto/signin.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { verify } from 'argon2';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async validateLocalUser({ email, password }: SignInInput) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) throw new UnauthorizedException('User not found');

    const passwordMatched = await verify(user.password!, password);

    if (!passwordMatched)
      throw new UnauthorizedException('Invalid credentials');

    return user;
  }

  async generateToken(userId: number) {}
}
