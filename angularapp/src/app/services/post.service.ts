import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import $ from 'jquery';

import { Post } from '../models/Post';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PostService {
  http: HttpClient;
  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  getPosts() : Observable<Post[]>{
    return this.http.get<Post[]>(this.postsUrl);
  }

  savePost(post: Post) : Observable<Post>{
    return this.http.post<Post>(this.postsUrl, post, httpOptions);
  }

  updatePost(post: Post) : Observable<Post> {
    const url = `${this.postsUrl}/${post.id}`;
    return this.http.put<Post>(url, post, httpOptions);
  }

  removePost(post: Post | number ) : Observable<Post> {
    const id = typeof post === 'number'
      ? post
      : post.id;
    const url = `${this.postsUrl}/${id}`;
    return this.http.delete<Post>(url, httpOptions);
  }
}
