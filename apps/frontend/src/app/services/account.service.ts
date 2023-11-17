import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface AccountDto {
  username: string;
  email?: string;
  password: string;
  role?: string;
}

export interface AccountResponse {
  status: number;
  data: AccountDto;
  error?: {
    message: string;
  };
}

@Injectable({ providedIn: 'root' })
export class AccountService {
  private readonly baseUrl: string = 'http://localhost:3002/api/accounts';

  constructor(private http: HttpClient) {}

  public async signup(user: AccountDto): Promise<AccountResponse> {
    return await firstValueFrom(this.http.post<AccountResponse>(`${this.baseUrl}/signup`, user))
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error;
      });;
  }

  public async login(user: AccountDto): Promise<AccountResponse> {
    return await firstValueFrom(this.http.post<AccountResponse>(`${this.baseUrl}/login`, user))
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error;
      });
  }
}
