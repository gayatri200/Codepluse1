import { BlogPostService } from './../../category/services/blogPost.service';
import { AddBlogpostRequest } from './../../category/models/add-blog.post.model';
import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/internal/Subscription';
import { Observable } from 'rxjs';
import { Category } from '../../category/models/category.model';
import { CategoryService } from '../../category/services/category.service';

@Component({
  selector: 'app-Add-BlogPost',
  templateUrl: './Add-BlogPost.component.html',
  styleUrls: ['./Add-BlogPost.component.css']
})
export class AddBlogPostComponent  {
  categories$?:Observable<Category[]>;
  model:AddBlogpostRequest;
  private addBlogPostSubscription?:Subscription;

  constructor(private blogPostService:BlogPostService,private categoryservice:CategoryService) {
    this.model={
      title:'',
      shortDescription:'',
      urlHandle:' ',
      content:' ',
      featuredImageUrl: '',
      author:'',
      isVisible:true,
      publishedDate:new Date(),
      categories:[]
    }
   }
   ngOnInit(): void {
    this.categories$=this.categoryservice.getAllCategories()
  }

   onFormSubmit() {
    console.log(this.model)
    this.addBlogPostSubscription=this.blogPostService.addBlogPost(this.model)
    .subscribe({
      next:(response)=>
      {
        console.log('This was successful!');
      }
    })
}

  ngOnDestroy(): void {
    this.addBlogPostSubscription?.unsubscribe();
  }

}
