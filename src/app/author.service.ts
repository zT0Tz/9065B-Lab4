import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {

  constructor() { }
  getAuthors() : string []{
      return ["Author1", "Author2", "Author3"];
  }

}
