import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { TitleHeaderComponent } from '../../components/title-header/title-header';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, TitleHeaderComponent, DatePipe],
  templateUrl: './basic-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPageComponent {
  nameLower = signal('ALEJANDRA');
  nameUpper = signal('alejandra');
  fullName = signal('AleJaNdRa LeZcAnO');

  customDate = signal(new Date());

  thickingDate = effect((onCleanUp) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);

    onCleanUp(() => {
      clearInterval(interval);
    });
  });
}
