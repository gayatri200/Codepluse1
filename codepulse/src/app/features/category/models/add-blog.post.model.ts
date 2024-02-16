export interface AddBlogpostRequest{
  title:string,
  content:string
  featuredImageUrl:string
  urlHandle:string
  publishedDate:Date
  author:string
  isVisible:boolean
  shortDescription:string
  categories:string[]
}
