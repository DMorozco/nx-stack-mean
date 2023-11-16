import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface AccountDto {
  username: string;
  email: string;
  password: string;
  role?: string;
}

export interface AccountResponse {
  status: number;
  data: AccountDto | AccountDto[];
  error?: {
    message: string;
  };
}

@Injectable({ providedIn: 'root' })
export class AccountService {
  private readonly baseUrl: string = 'http://localhost:3002/api/accounts';
  login: any;

  constructor(private http: HttpClient) {}

  signup(user: AccountDto): Observable<AccountResponse> {
    return this.http.post<AccountResponse>(`${this.baseUrl}/signup`, user);
  }
}
