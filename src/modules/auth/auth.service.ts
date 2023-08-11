import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as fs from 'fs';
import { User, Prisma } from '@prisma/client';

const PATH_BACKGROUNDS = 'media/backgrounds/';
const PATH_BACKGROUNDS_DEFAULT = 'media/default/';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}
  async loginUser(payload: any): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { email: payload.login },
    });
    if (user) {
      return {
        access_token: await this.jwtService.signAsync({ sub: user.id }),
      };
    }
    const newUser = await this.prisma.user.create({
      data: { email: payload.login },
    });

    const filesDefault = fs.readdirSync(PATH_BACKGROUNDS_DEFAULT);

    for (const index in filesDefault) {
      const imagesPathFileRead = PATH_BACKGROUNDS_DEFAULT + filesDefault[index];
      const imagesPathFileWrite =
        PATH_BACKGROUNDS + `${new Date().valueOf()}.jpeg`;
      const img = fs.readFileSync(imagesPathFileRead);
      fs.writeFileSync(imagesPathFileWrite, img);
      await this.prisma.backgrounds.create({
        data: {
          path: imagesPathFileWrite,
          author_id: newUser.id,
        },
      });
    }

    return {
      access_token: await this.jwtService.signAsync({ sub: newUser.id }),
    };
  }
  async registrationTelegramUser(payload: any): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { username: payload.username },
    });
    if (user) {
      return {
        access_token: await this.jwtService.signAsync({ sub: user.id }),
      };
    }
    const newUser = await this.prisma.user.create({
      data: {
        artstation: 'Telegram',
        username: payload.username,
        name: payload.name,
        surname: payload.surname
      },
    });

    const filesDefault = fs.readdirSync(PATH_BACKGROUNDS_DEFAULT);

    for (const index in filesDefault) {
      const imagesPathFileRead = PATH_BACKGROUNDS_DEFAULT + filesDefault[index];
      const imagesPathFileWrite =
        PATH_BACKGROUNDS + `${new Date().valueOf()}.jpeg`;
      const img = fs.readFileSync(imagesPathFileRead);
      fs.writeFileSync(imagesPathFileWrite, img);
      await this.prisma.backgrounds.create({
        data: {
          path: imagesPathFileWrite,
          author_id: newUser.id,
        },
      });
    }

    return {
      access_token: await this.jwtService.signAsync({ sub: newUser.id }),
    };
  }
  async registryUser(payload: any): Promise<any> {
    return true;
  }
  async logout(): Promise<any> {
    return true;
  }
  async deleteUser(payload: any): Promise<any> {
    return true;
  }
}
