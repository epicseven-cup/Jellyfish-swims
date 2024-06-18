import { UUID } from "crypto";

export class Post {
	AuthorID:UUID
	CommuityName:string
	Description:string
	Like:number
	PostCommentID:UUID
	Visible:boolean
	constructor(authorID:UUID, commuityName:string, description:string, like:number, postCommentID:UUID, visible:boolean){
		this.AuthorID = authorID
		this.CommuityName = commuityName
		this.Description = description
		this.Like = like
		this.PostCommentID = postCommentID
		this.Visible = visible
	}
}