import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Post } from './../interfaces/post';
import { SocialPostsComponent } from './../social-posts/social-posts.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() deleted = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  clickDelete = ():void => {
    this.deleted.emit();
  }

}
