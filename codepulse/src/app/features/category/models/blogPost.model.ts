import { Category } from "./category.model";

export interface BlogPost
{
id:string;
title:string,
content:string
featuredImageUrl:string
urlHandle:string
publishedDate:Date
author:string
isVisible:boolean
shortDescription:string
categories:Category[];
}
