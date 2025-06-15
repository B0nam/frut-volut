import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const existsUserWithSameEmail = await this.userRepository.existsBy({
      email: createUserDto.email,
    });

    if (existsUserWithSameEmail)
      throw new ConflictException('There is already an user with same e-mail');

    const user = new User(createUserDto.email, createUserDto.password);

    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(uuid: string) {
    return this.userRepository.findOneBy({ uuid });
  }
}
