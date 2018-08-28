import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PostService } from "../../services/post.service";

import { Post } from '../../models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Input() currentPost: Post;
  @Input() isEdit: boolean;
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() postUpdated: EventEmitter<Post> = new EventEmitter();

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(title: string, body: string) {
    if(!title||!body)
      alert('Please add post');
    else
      this.postService
        .savePost({title, body} as Post)
        .subscribe(
          post => {
            console.log('Posted:  ', post);
            this.newPost.emit(post);
          },
          error => console.log(error)
        );
  }

  updatePost() {
    this.postService
      .updatePost(this.currentPost)
      .subscribe(
        post => {
          console.log('Put:  ', post)
          this.isEdit = false;
          this.postUpdated.emit(post);
        },
        error => console.log(error)
      );
  }
}
