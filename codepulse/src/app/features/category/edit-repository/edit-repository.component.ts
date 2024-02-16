import { UpdateCategoryRequest } from './../models/Update-category-request.model';
import { CategoryService } from './../services/category.service';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Category } from '../models/category.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-repository',
  templateUrl: './edit-repository.component.html',
  styleUrls: ['./edit-repository.component.css']
})
export class EditRepositoryComponent implements OnInit,OnDestroy {


id :string|null=null;
paramsSubscription?:Subscription;
  category?:Category;
  EditSubscription?: Subscription;

  constructor(private route:ActivatedRoute,private categoryService:CategoryService,private router:Router) {


  }

  onFormSubmit():void {
      const updateCategoryRequest:UpdateCategoryRequest={
      name:this.category?.name??'',
      urlHandle:this.category?.urlHandle??''
      };
      if(this.id){
        this.EditSubscription=this.categoryService.UpdateCategory(this.id,updateCategoryRequest)
        .subscribe({
          next:(response)=>{
             this.router.navigateByUrl('/admin/categories');
          }
        })
      }

  }

  onDelete():void {


    console.log("delete")
    if(this.id)
    {
      this.categoryService.deletecategory(this.id)

      .subscribe({
        next:(response)=>
        {

          this.router.navigateByUrl('/admin/categories');
        }
      })
    }

    }

  ngOnInit(): void {
   this.paramsSubscription= this.route.paramMap.subscribe(
      {
        next:(params)=>{
          this.id=params.get('id');
          if(this.id)
          {
            //we have to get the data from the api
            this.categoryService.getCategoryById(this.id)
            .subscribe({
              next:(response)=>{
                this.category=response;
              }
            })
          }
        }
      }
    )
  }
  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
    this.EditSubscription?.unsubscribe();
  }
}




