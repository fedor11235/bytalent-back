import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    // @InjectRepository(User)
    // private readonly userModel: Repository<User>,

    // @InjectRepository(Token)
    // private readonly tokenModel: Repository<Token>,

    // private jwtService: JwtService,
  ) {}
  async loginUser(body: any): Promise<any> {
    return true;
  }
  async registryUser(body: any): Promise<any> {
    return true;
  }
  async logout(body: any): Promise<any> {
    return true;
  }
  async deleteUser(body: any): Promise<any> {
    return true;
  }
}