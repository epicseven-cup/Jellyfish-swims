import { Component, Input, numberAttribute } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardContent, MatCardImage} from '@angular/material/card'
import { MatButton } from '@angular/material/button'
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardContent, MatButton, MatCardImage],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input({required: true}) title:string = "";
  @Input({required: true}) subtitle:string = "";
  @Input({required: true}) content:string = "";
  @Input({required: true, transform: numberAttribute}) like = 0;
  @Input({required: true}) comment:string = "";
}
