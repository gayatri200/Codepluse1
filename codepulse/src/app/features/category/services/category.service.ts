import { UpdateCategoryRequest } from './../models/Update-category-request.model';
import { Category } from './../models/category.model';
import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
              id: any;
            //id:any
              constructor(private http:HttpClient) { }
              addCategory(model:AddCategoryRequest):Observable<void>
              {
                return this.http.post<void>(`https://localhost:7144/api/Categories`,model);
              }

              getAllCategories():Observable<Category[]>
              {
                return this.http.get<Category[]>(`https://localhost:7144/api/Categories`);
              }
              getCategoryById(id:string):Observable<Category>
              {

                return this.http.get<Category>(`https://localhost:7144/api/Categories/${id}`);
              }
              UpdateCategory(id:string,updatecategoryrequest:UpdateCategoryRequest):Observable<Category>
              {
                return this.http.put<Category>(`https://localhost:7144/api/Categories/${id}`,updatecategoryrequest);
              }
              deletecategory(id:string) : Observable<Category>{
              return this.http.delete<Category>(`https://localhost:7144/api/Categories/${id}`);
             }

}
