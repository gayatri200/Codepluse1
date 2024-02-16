import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../../category/services/blogPost.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../../category/models/blogPost.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blog$?:Observable<BlogPost[]>;
  constructor(private blogpostservice:BlogPostService)
  {

  }
  ngOnInit(): void {
    this.blog$=this.blogpostservice.getAllBlogPosts();
  }

}
