import { UUID } from "crypto";
import { subscribe } from "diagnostics_channel";
import { title } from "process";

export class Post {
	AuthorID:string
	CommuityName:string
	Title:string
	Subtitle:string
	Content:string
	ImageIDs:string[]
	Like:number
	PostCommentID:string
	Visible:boolean
	constructor(authorID:string, commuityName:string, title:string, subtitle:string, description:string, imageIDs:string[], like:number, postCommentID:string, visible:boolean){
		this.AuthorID = authorID
		this.CommuityName = commuityName
		this.Title = title
		this.Subtitle = subtitle
		this.Content= description
		this.ImageIDs = imageIDs
		this.Like = like
		this.PostCommentID = postCommentID
		this.Visible = visible
	}
}