import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

export interface UserDto {
    name: string;
    lastname: string
    email: string;
    phone: string;
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

    delete(email: string): Observable<boolean> {
        return this.http.delete<boolean>(`${this.baseUrl}/?email=${email}`);
    }

    update(user: UserDto): Observable<UserDto> {
        return this.http.put<UserDto>(`${this.baseUrl}/?email=${user.email}`, user);
    }
}