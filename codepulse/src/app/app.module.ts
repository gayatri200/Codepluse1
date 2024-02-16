import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { EditRepositoryComponent } from './features/category/edit-repository/edit-repository.component';
import { BlogPostListComponent } from './features/Blog-post/BlogPost-list/BlogPost-list.component';
import { AddBlogPostComponent } from './features/Blog-post/Add-BlogPost/Add-BlogPost.component';
import { MarkdownModule } from 'ngx-markdown';
import { HomeComponent } from './features/Public/home/home.component';
import { BlogDetailsComponent } from './features/Public/blog-details/blog-details.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryListComponent,
    AddCategoryComponent,
    EditRepositoryComponent,
    BlogPostListComponent,
    AddBlogPostComponent,
    HomeComponent,
    BlogDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
