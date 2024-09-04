import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http: HttpClient) { }

  getAllDept() {
    return this.http.get('https://localhost:7024/api/Book/GetBookList');
  }
}
