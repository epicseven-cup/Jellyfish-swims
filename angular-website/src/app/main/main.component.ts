import { booleanAttribute, Component, Input } from '@angular/core';
import { MatTab, MatTabGroup} from '@angular/material/tabs';
import { CommunitiesComponent } from '../communities/communities.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatTabGroup, MatTab, CommunitiesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
}
