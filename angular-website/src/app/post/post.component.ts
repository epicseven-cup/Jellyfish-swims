import { Component, Input } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardContent} from '@angular/material/card'
import { MatButton } from '@angular/material/button'
import { randomUUID, UUID } from 'crypto';
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardContent, MatButton],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input({required: true}) title:string = "";
  @Input({required: true}) subtitle:string = "";
  @Input({required: true}) content:string = "";
  @Input({required: true}) like:number = 0;
  @Input({required: true}) comment:UUID = randomUUID();
}
