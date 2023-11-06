import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

export interface ContactDto {
    name: string;
    email: string;
    message: string
}

@Injectable({ providedIn: 'root' })
export class ContactService {
    private readonly baseUrl: string = 'http://localhost:3006/api/contacts/';

    constructor(private http: HttpClient) {}

    getAll(): Observable<ContactDto[]> {
        return this.http.get<ContactDto[]>(`${this.baseUrl}`);
    }

    create(contact: ContactDto): Observable<ContactDto> {
        return this.http.post<ContactDto>(`${this.baseUrl}`, contact);
    }

    update(contact: ContactDto): Observable<ContactDto> {
        return this.http.put<ContactDto>(`${this.baseUrl}`, contact);
    }
} 