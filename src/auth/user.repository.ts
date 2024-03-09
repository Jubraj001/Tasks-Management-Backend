import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

export class UserRepository extends Repository<User> {
  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>,
  ) {
    super(
      UserRepository.target,
      UserRepository.manager,
      UserRepository.queryRunner,
    );
  }

  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;

    const user = this.create({ username, password });
    await this.save(user);
  }
}
