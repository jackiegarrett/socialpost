import { Component, OnInit } from '@angular/core';
import { Post } from './../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  show: boolean = false;

  posts: Post[] = [
    {title: "Grand Circus",
    thought: "I have learned a lot already!"},
    {title: "What I want to learn next",
    thought: "I want to learn about screen readers, UI, and animations."},
    {title: "Lunch today",
    thought: "I will eat chicken katsu for lunch today."}
  ];

  showForm = ():void => {
    this.show = true;
  }

  constructor() { }

  ngOnInit(): void {}

  handleSubmit(post: Post):void {
    this.show = false;
    this.posts.push(post);
  }

  handleDelete(i: number): void {
    this.posts.splice(i, 1);
  }
}
