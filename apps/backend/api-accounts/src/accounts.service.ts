import * as bcrypt from 'bcrypt';
import { AccountDto } from './models/account.model';
import { Account, IAccount } from './models/account.schema';

export interface AccountResponse {
  status: number;
  data: AccountDto | AccountDto[];
  error?: {
    message: string;
  }
}

export class AccountService {
  static async getAll(): Promise<AccountResponse> {
    try {
      const account: IAccount[] | void = await Account.find();
      const accounts = (account || []).map((account: IAccount) => ({
        email: account.email,
        password: account.password,
        role: account.role,
      }));
      return {
        status: 200,
        data: accounts
      }
    } catch (error) {
      return {
        status: 500,
        data: null,
        error: {
          message: error.message
        }
      };
    }
  }

  static async signup(account: AccountDto): Promise<AccountResponse> {
    try {
      const hashedPassword = await bcrypt.hash(account.password, 10);
      account.password = hashedPassword;
      const newAccount: IAccount | void = await Account.create(account);
      if (newAccount) {
        return {
          status: 201,
          data: {
            email: newAccount.email,
            password: hashedPassword,
            role: account.role,
          }
        };
      }
    } catch (error) {
      const status = error?.keyValue ? 400 : 500;
      return {
        status,
        data: null,
        error: {
          message: error.message
        }
      };
    }
  }

  static async delete(email: string): Promise<boolean> {
    try {
      const deletedAccount: IAccount | void = await Account.findOneAndDelete({
        email: email,
      });
      return !!deletedAccount;
    } catch (error) {
      return error;
    }
  }

  static async update(email: string, account: AccountDto): Promise<AccountResponse> {
    try {
      const hashedPassword = await bcrypt.hash(account.password, 10);
      const updateAccount: IAccount | void = await Account.findOneAndUpdate(
        {
          email: email,
        },
        account
      );
      if (updateAccount) {
        return {
          status: 200,
          data: {
            email: updateAccount.email,
            password: hashedPassword,
            role: account.role,
          }
        };
      }
    } catch (error) {
      return {
        status: 500,
        data: null,
        error: {
          message: error.message
        }
      };
    }
  }

  static async login(account: AccountDto): Promise<AccountResponse> {
    try {
      const existingAccount: IAccount | void = await Account.findOne({
        email: account.email,
      });
      if (!existingAccount) {
        throw new Error('account doesnt exist');
      }
  
      const isPasswordValid = await bcrypt.compare(
        account.password,
        existingAccount.password
      );
  
      if (!isPasswordValid) {
        throw new Error('credentials are invalid');
      }
  
      return {
        status: 200,
        data: {
          email: existingAccount.email,
          password: existingAccount.password,
          role: existingAccount.role,
        }
      };
    } catch (error) {
      const status = error instanceof Error ? 400 : 500;
      return {
        status,
        data: null,
        error: {
          message: error.message
        } 
      };
    }
  }
}
