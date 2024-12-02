import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private _http: HttpClient) { }

  // Método para obtener la lista de usuarios con paginación
  getUsers(page: number, size: number): Observable<any> {
    let params = new HttpParams()
    .set('page', page)
    .set('size', size);

    return this._http.get(`${this.baseUrl}/list`, {params});
  }

  // Método para registrar un usuario
  registerUser(user: User): Observable<User> {
    console.log(user);
    return this._http.post<User>(`${this.baseUrl}/create`, user);
  }

  updateUser(id: number, user: User): Observable<User> {
    const url = `${this.baseUrl}/${id}`;
    return this._http.put<User>(url, user);
  }

  getUserById(id: number): Observable<User> {
    const url = `${this.baseUrl}/${id}`;
    return this._http.get<User>(url);
  }

  deleteUser(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this._http.delete<any>(url);
  }

}
