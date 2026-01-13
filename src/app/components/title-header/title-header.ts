import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title-header',
  imports: [],
  templateUrl: './title-header.html',
})
export class TitleHeaderComponent {
  title = input<string>();
  subtitle = input<string>();
}
