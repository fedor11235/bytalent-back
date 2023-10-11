import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
// import jwt from 'jsonwebtoken';
// const jwt = require('jsonwebtoken');
// import * as fs from 'fs';
// import { User, Prisma } from '@prisma/client';

// const PATH_BACKGROUNDS = 'media/backgrounds/';
// const PATH_BACKGROUNDS_DEFAULT = 'media/default/';
// const APPLE_KEY = 'apple-key.p8';
// const KEY_ID = '56N8J94YHM'
// const TEAM_ID = '';
// const CLIENT_ID = '';
// const KEY_ID = '';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}
  async loginUser(payload: any): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { username: payload.login },
    });
    if (user) {
      return {
        access_token: await this.jwtService.signAsync({ sub: user.id }),
      };
    }
    const newUser = await this.prisma.user.create({
      data: { username: payload.login },
    });

    return {
      access_token: await this.jwtService.signAsync({ sub: newUser.id }),
    };
  }
  async loginTelegramUser(payload: any): Promise<any> {
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
        authorization: 'Telegram',
        username: payload.username,
        name: payload.name,
        surname: payload.surname,
      },
    });

    return {
      access_token: await this.jwtService.signAsync({ sub: newUser.id }),
    };
  }
  async loginAppleUser(payload: any): Promise<any> {
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
        authorization: 'Apple',
        username: payload.username,
        name: payload.name,
        surname: payload.surname,
      },
    });

    return {
      access_token: await this.jwtService.signAsync({ sub: newUser.id }),
    };
  }
  // async creatingDfaultBackgrounds(newUser: User) {
  //   const filesDefault = fs.readdirSync(PATH_BACKGROUNDS_DEFAULT);

  //   for (const index in filesDefault) {
  //     const format = 'jpeg';
  //     const name = String(new Date().valueOf());
  //     const type = 'img';
  //     const imagesPathFileRead = PATH_BACKGROUNDS_DEFAULT + filesDefault[index];
  //     const imagesPathFileWrite = PATH_BACKGROUNDS + `${name}.${format}`;
  //     const img = fs.readFileSync(imagesPathFileRead);
  //     fs.writeFileSync(imagesPathFileWrite, img);
  //     await this.prisma.backgrounds.create({
  //       data: {
  //         path: imagesPathFileWrite,
  //         format: format,
  //         name: name,
  //         type: type,
  //         author_id: newUser.id,
  //       },
  //     });
  //   }
  // }
}

// async registrationAppleUser(payload: any): Promise<any> {
//   const privateKey = fs.readFileSync(APPLE_KEY);
//   const headers = {
//     kid: KEY_ID,
//     type: undefined // есть ли другой способ удалить тип?
//   }
//   const claims = {
//     'iss': TEAM_ID,
//     'aud': 'https://appleid.apple.com' ,
//     'sub': CLIENT_ID,
//   }

//   const token = jwt.sign(claims, privateKey, {
//     algorithm: 'ES256',
//     header: headers,
//     expiresIn: '24h'
//    });

//    return {
//     access_token: token,
//   };
// }
