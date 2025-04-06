import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { RespCreateUser } from '../../../shared/interfaces/respCreateuser.iterface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  private apiUrl: string = environment.urlApi;

  public registerNewUser(user: any): Observable<RespCreateUser> {
    return this.http.post<RespCreateUser>(`${this.apiUrl}users`, user);
  }
  public recoverPassword(email: string) {
    return this.http.get(`${this.apiUrl}recover-password`, {
      params: { email },
    });
  }
}
