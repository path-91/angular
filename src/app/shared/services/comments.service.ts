import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Api} from '../core/api';
import {Observable} from 'rxjs';

@Injectable()
export class CommentsService extends Api {

  private actionName = 'comments';

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  add(formData: FormData): Observable<any> {
    return this.post(`${this.actionName}/add`, formData);
  }
}
