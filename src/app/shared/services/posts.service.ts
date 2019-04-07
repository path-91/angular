import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Api} from '../core/api';
import {Observable} from 'rxjs';

@Injectable()
export class PostsService extends Api {

  private actionName = 'posts';

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  index(page: number = 1, tagId: number = 0): Observable<any> {
    return this.get(`${this.actionName}?page=${page}&tag_id=${tagId}`);
  }

  total(tagId: number = 0): Observable<any> {
    return this.get(`${this.actionName}/total?tag_id=${tagId}`);
  }

  getById(id: number): Observable<any> {
    return this.get(`${this.actionName}/getById/${id}`);
  }

}
