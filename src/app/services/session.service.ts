import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request';
import { Observable } from 'rxjs';
import { Session } from '../models/session';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  login(request: LoginRequest): void {
    this.http.post<Session>(environment.baseUrlPublic + 'session', request, this.httpOptions).subscribe(
      (response: Session) => {
        console.log('Response', response);
        sessionStorage.setItem('access-token', response.accessToken);
      },
      error => console.error('Error', error)
    );
  }
}
