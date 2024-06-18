import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from './data/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {}

  getPost() : Observable<Post> {
    const url = "localhost:3000/api/posts/"
    return this.http.get<Post>(url)
  }
}
