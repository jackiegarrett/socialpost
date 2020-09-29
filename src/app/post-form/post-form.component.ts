import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from './../interfaces/post';
import { SocialPostsComponent } from './../social-posts/social-posts.component';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Post>();
  constructor() { }

  ngOnInit(): void {
  }

  submitForm(form: NgForm) {
    if (form.value.title !== "" && form.value.thought !== "") {
      this.submitted.emit({
        title: form.value.title,
        thought: form.value.thought });
      }
    }
  }
