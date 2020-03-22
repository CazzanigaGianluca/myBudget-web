import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request';
import { Session } from '../models/session';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  user: Session;
  error: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  login(request: LoginRequest): void {
    this.http.post<Session>(`${environment.baseUrlPublic}/session`, request).subscribe(
      (response: Session) => {
        console.log('Response', response);
        this.user = response;
        this.router.navigate(['dashboard']);
        this.error.next(false);
      },
      error => {
        console.error('Error during authentication!!', error);
        this.error.next(true);
      }
    );
  }

  isAuthenticated(): boolean {
    if (this.user) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}