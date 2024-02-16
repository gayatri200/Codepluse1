import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { EditRepositoryComponent } from './features/category/edit-repository/edit-repository.component';
import { BlogPostListComponent } from './features/Blog-post/BlogPost-list/BlogPost-list.component';
import { AddBlogPostComponent } from './features/Blog-post/Add-BlogPost/Add-BlogPost.component';
import { HomeComponent } from './features/Public/home/home.component';
import { BlogDetailsComponent } from './features/Public/blog-details/blog-details.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'blog/:url',
    component:BlogDetailsComponent
  },
  {
    path:'admin/categories',
    component:CategoryListComponent
  },
  {
    path:'admin/categories/add',
    component:AddCategoryComponent
  },
  {
    path:'admin/categories/:id',
    component:EditRepositoryComponent
  },
  {
    path:'admin/blogposts',
    component:BlogPostListComponent
  },
  {
    path:'admin/blogposts/add',
    component:AddBlogPostComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
