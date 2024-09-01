import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-insert-book',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './insert-book.component.html',
  styleUrls: ['./insert-book.component.css']
})
export class InsertBookComponent {
  bookObj: any = {
    bookName: '',
    bookAuthorName: '',
    bookMedium: '',
    bookPublishedYear: ''
  };
  url: string = 'https://localhost:7024/api/Book/InsertBook';


  constructor(private http: HttpClient) { }

  SubmitBook(url: string, bookObj: any) {
    console.log(bookObj);
    this.http.post(url, bookObj).subscribe((response: any) => {
      if (response.res === true) {
        alert(response.msg);
        this.resetForm();
      } else {
        alert('Error in inserting the Data');
      }
    }, (error) => {
      console.error('There was an error!', error);
      alert('An error occurred while inserting the data');
    });
  }

  resetForm() {
    this.bookObj = {
      bookName: '',
      bookAuthorName: '',
      bookMedium: '',
      bookPublishedYear: ''
    };
  }

}
