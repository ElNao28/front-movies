import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  private urlApi: string = environment.urlApi;

  public authUser(userData: any): Observable<Auth> {
    return this.http.post<Auth>(`${this.urlApi}auth`, userData);
  }
  public setTokenInLocalStorage(token: string): void {
    localStorage.setItem('token', token);
  }
}
