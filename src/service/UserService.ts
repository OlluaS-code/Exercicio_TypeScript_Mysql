import { UserRepository, User } from "../repositories/UserRepository";

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  public async findById(id: number): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  public async create(user: User): Promise<User> {
    return this.userRepository.create(user);
  }

  public async update(id: number, user: User): Promise<User | null> {
    return this.userRepository.update(id, user);
  }

  public async delete(id: number): Promise<boolean> {
    return this.userRepository.delete(id);
  }
}
