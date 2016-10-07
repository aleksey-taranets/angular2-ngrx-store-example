import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const apiUrl = 'https://api.github.com';
import { UsersFilter } from '../../models';

import { Users } from '../../models';

@Injectable()
export class ApiService {

  constructor (private http: Http) {}

  get(path): Observable<Response> {
    return this.http.get(apiUrl + path)
      .map(res => res.json());
  }

  loadUsers( filter: UsersFilter ): Observable<Users[]> {
    let q: string[] = [];
    if (filter.name) q.push(filter.name);
    if (filter.repos) q.push('repos:>' + filter.repos);
    if (filter.followers) q.push('followers:>' + filter.followers);
    return this.get('/search/users?q=' + q.join('+')).map((res) => res['items']);
  }

  loadUser( userId: string ): Observable<Response> {
    return this.get('/users/' + userId);
  }

}
