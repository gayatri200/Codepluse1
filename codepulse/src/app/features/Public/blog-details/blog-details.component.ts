import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
url:string|null=null;
  constructor(private route:ActivatedRoute)
  {

  }
  ngOnInit(): void {
    this.route.paramMap
    .subscribe({
      next:(params)=>
      {
        this.url=params.get('url');
      }
    })
  }

}
