import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

export interface UserDto {
    username: string;
  password: string;
  email:string
  name: string;
  lastname: string;
  city: string;
  address: string;
  phone: number;
   
}

@Injectable({ providedIn: 'root' })
export class UserService {
    private readonly baseUrl: string = 'http://localhost:3005/api/users';

    constructor(private http: HttpClient) {}

    getAll(): Observable<UserDto[]> {
        return this.http.get<UserDto[]>(`${this.baseUrl}`);
    }

    create(user: UserDto): Observable<UserDto> {
        return this.http.post<UserDto>(`${this.baseUrl}`, user);
    }

    delete(user: string): Observable<boolean> {
        return this.http.delete<boolean>(`${this.baseUrl}/?email=${user}`);
    }

    update(user: UserDto): Observable<UserDto> {
        return this.http.put<UserDto>(`${this.baseUrl}/?email=${user}`, user);
    }
}