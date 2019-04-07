import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Api} from '../core/api';
import {Observable} from 'rxjs';

@Injectable()
export class TagsService extends Api {

  private actionName = 'tags';

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  getAll(): Observable<any> {
    return this.get(`${this.actionName}/getAll`);
  }

}
