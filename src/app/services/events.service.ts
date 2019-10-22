import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class EventsService {

  constructor(private http: HttpClient) { }
  // Get all posts from the API

  getAllEvents() {
    return this.http.get('/api/events');
  }

  add(data) {
    return this.http.post('/api/events', data, httpOptions).pipe(map((response: any) => response.json()));
  }

}
