import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://api.pokemontcg.io/v2/';

  headers = new HttpHeaders();
  constructor(private http: HttpClient) {
    this.headers = this.headers.set('X-Api-Key', '6e68250f-4cc6-453f-8beb-6c2cb659f643');
  }

  card = (id: string = '', page: string = '1', type: string = '') => {
    const paramsType = (type.length) ? '&q=types:' + type : '';

    return this
      .http
      .get(this.url + 'cards/' + id + '?orderBy=name&pageSize=22&page=' + page + paramsType, {headers: this.headers});
  }

  types = () => {
    return this
      .http
      .get(this.url + 'types', {headers: this.headers});
  }
}
