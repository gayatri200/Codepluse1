import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddBlogpostRequest } from '../models/add-blog.post.model';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blogPost.model';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private http:HttpClient) { }
  addBlogPost(model:AddBlogpostRequest):Observable<BlogPost>
  {
    return this.http.post<BlogPost>(`https://localhost:7144/api/Blogpost`,model);
  }
  getAllBlogPosts():Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>(`https://localhost:7144/api/Blogpost`);
  }

}
