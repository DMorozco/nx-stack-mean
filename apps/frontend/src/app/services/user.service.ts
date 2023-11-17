import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from "rxjs";

export interface UserDto {
  email:string
  name: string;
  lastname: string;
  city: string;
  address: string;
  phone: number;
   
}

export interface UserResponse {
    status: number;
    data: UserDto;
    error?: {
        message:string;
    };
}

@Injectable({ providedIn: 'root' })
export class UserService {
    private readonly baseUrl: string = 'http://localhost:3005/api/users';
 
    constructor(private http: HttpClient) {}

      public async getAll(user: UserDto): Promise<UserResponse> {
        return await firstValueFrom(this.http.post<UserResponse>(`${this.baseUrl}`, user))
          .then((result) => {
            return result;
          })
          .catch((error) => {
            return error;
          });;
      }

      public async delete(user: UserDto): Promise<UserResponse> {
        return await firstValueFrom(this.http.post<UserResponse>(`${this.baseUrl}/email`, user))
          .then((result) => {
            return result;
          })
          .catch((error) => {
            return error;
          });;
      }

      public async update(user: UserDto): Promise<UserResponse> {
        return await firstValueFrom(this.http.post<UserResponse>(`${this.baseUrl}`, user))
          .then((result) => {
            return result;
          })
          .catch((error) => {
            return error;
          });;
      }

      public async createuser(user: UserDto): Promise<UserResponse> {
        return await firstValueFrom(this.http.post<UserResponse>(`${this.baseUrl}`, user))
          .then((result) => {
            console.log(JSON.stringify(result, null, 2))
            return result;
          })
          .catch((error) => {
            console.log(JSON.stringify(error, null, 2))
            return error;
          });
      }
    }
    