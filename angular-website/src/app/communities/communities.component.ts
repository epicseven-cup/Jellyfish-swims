import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../data/post';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-communities',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './communities.component.html',
  styleUrl: './communities.component.scss'
})
export class CommunitiesComponent {
  constructor(private postService: PostService) {}
  // posts = this.postService.getPost() 
}
