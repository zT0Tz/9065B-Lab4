import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service'

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  providers: [AuthorService]
})
export class AuthorsComponent implements OnInit {
  
  title = "The title of authors page";
  authors;

  constructor(authorService: AuthorService) {
    this.authors = authorService.getAuthors();
  }

  ngOnInit() {
  }

}
