import { UserDto } from './models/user.model';
import { IUser, User } from './models/users.schema';

interface Response {
  message;
}

export class UserService {
  static async getAll(): Promise<UserDto[]> {
    const users: IUser[] | void = await User.find();
    return (users || []).map((user: IUser) => ({
      username: user.username,
      password: user.password,
      email: user.email,
      name: user.name,
      lastname: user.lastname,
      city: user.city,
      address: user.address,
      phone: user.phone,
    }));
  }

  static async getById(email: string): Promise<UserDto> {
    const user: IUser | void = await User.findOne({ email: email });
    if (user) {
      return {
        username: user.username,
        password: user.password,
        email: user.email,
        name: user.name,
        lastname: user.lastname,
        city: user.city,
        address: user.address,
        phone: user.phone,
      };
    }
    return null;
  }

  static async create(user: UserDto): Promise<UserDto> {
    try {
      const newUser: IUser | void = await User.create(user);
      if (newUser) {
        return {
          username: user.username,
          password: user.password,
          email: user.email,
          name: user.name,
          lastname: user.lastname,
          city: user.city,
          address: user.address,
          phone: user.phone,
        };
      }
    } catch (error) {
      return error;
    }
    return null;
  }

  static async delete(email: string): Promise<boolean> {
    const deletedUser: IUser | void = await User.findOneAndDelete({
      email: email,
    });
    return !!deletedUser;
  }

  static async update(
    email: string,
    user: UserDto
  ): Promise<UserDto | Response> {
    try {
      const updateUser: IUser | void = await User.findOneAndUpdate(
        { email: email },
        user
      );
      if (updateUser) {
        return {
          username: user.username,
          password: user.password,
          email: user.email,
          name: user.name,
          lastname: user.lastname,
          city: user.city,
          address: user.address,
          phone: user.phone,
        };
      }
    } catch (error) {
      return error;
    }
    return { message: 'cannot find the user' };
  }
}
