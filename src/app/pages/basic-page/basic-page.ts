import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleHeaderComponent } from '../../components/title-header/title-header';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, TitleHeaderComponent],
  templateUrl: './basic-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPageComponent {
  nameLower = signal('ALEJANDRA');
  nameUpper = signal('alejandra');
  fullName = signal('AleJaNdRa LeZcAnO');
}
