import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  baseURL = 'https://jsonplaceholder.typicode.com/';
  constructor(private httpClient: HttpClient) {}
  getUserName(name: string) {
    const URL = `${this.baseURL}users?name=${name}`;
    return this.httpClient.get(URL);
  }
  getUserPost(id: any) {
    const URL = `${this.baseURL}posts?userId=${id}`;
    return this.httpClient.get(URL);
  }
}
