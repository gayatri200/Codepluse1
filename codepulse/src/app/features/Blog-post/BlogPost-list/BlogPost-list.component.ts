import { Observable } from 'rxjs';
import { BlogPostService } from '../../category/services/blogPost.service';
import { BlogPost } from './../../category/models/blogPost.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-BlogPost-list',
  templateUrl: './BlogPost-list.component.html',
  styleUrls: ['./BlogPost-list.component.css']
})
export class BlogPostListComponent implements OnInit {

  blogPosts$?:Observable<BlogPost[]>;

  constructor(private blogPostservice:BlogPostService) { }

  ngOnInit() {
    //get all blog post from api
  this.blogPosts$=  this.blogPostservice.getAllBlogPosts();
    console.log( this.blogPostservice.getAllBlogPosts())
  }

}
