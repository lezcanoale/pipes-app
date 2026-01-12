import { Component } from '@angular/core';
import { TitleHeaderComponent } from '../../components/title-header/title-header';
import { Card } from '../../components/card/card';

@Component({
  selector: 'app-uncommon-page',
  imports: [TitleHeaderComponent, Card],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPageComponent {}
