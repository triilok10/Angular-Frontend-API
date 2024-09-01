import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetAPIComponent {


  url: string = 'https://localhost:7024/api/Book/GetBookList';
  BookList: any[] = [];


  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.fetchBook();
  }

  fetchBook() {
    this.http.get(this.url).subscribe((response: any) => {
      console.log(response.getList);
      this.BookList = response.getList
    })
  }

  deleteBook(bookID: number) {
    if (confirm('Are you sure to delete this book')) {
      this.http.delete(`https://localhost:7024/api/Book/DeleteBook/${bookID}`).subscribe((response: any) => {
        if (response.res == true) {
          alert(response.msg);
          this.fetchBook();
        }
      })
    }
  }
}
