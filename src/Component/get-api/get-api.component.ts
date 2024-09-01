import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetAPIComponent {

  bookObj: any = {
    bookName: '',
    bookAuthorName: '',
    bookMedium: '',
    bookPublishedYear: ''
  };
  url: string = 'https://localhost:7024/api/Book/GetBookList';
  BookList: any[] = [];

  isEditMode: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchBook();
  }

  resetForm() {
    this.bookObj = {
      bookName: '',
      bookAuthorName: '',
      bookMedium: '',
      bookPublishedYear: ''
    };
  }

  EditBook(url: string, bookObj: any) {
    console.log(bookObj);
    this.http.post('https://localhost:7024/api/Book/UpdateBookPost', bookObj).subscribe((response: any) => {
      if (response.res === true) {
        alert(response.msg);
        this.resetForm();
        this.isEditMode = false;  
        this.fetchBook();        
      } else {
        alert('Error in updating the Data');
      }
    }, (error) => {
      console.error('There was an error!', error);
      alert('An error occurred while updating the data');
    });
  }

  fetchBook() {
    this.http.get(this.url).subscribe((response: any) => {
      console.log(response.getList);
      this.BookList = response.getList;
    });
  }

  deleteBook(bookID: number) {
    if (confirm('Are you sure to delete this book')) {
      this.http.delete(`https://localhost:7024/api/Book/DeleteBook/${bookID}`).subscribe((response: any) => {
        if (response.res === true) {
          alert(response.msg);
          this.fetchBook();
        }
      });
    }
  }

  EditBookGet(data: any) {
    this.bookObj = { ...data }; 
    this.isEditMode = true;    
  }

  cancelEdit() {
    this.isEditMode = false;  
  }
}
