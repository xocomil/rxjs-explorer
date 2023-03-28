import { Component, HostBinding } from '@angular/core';
import { FruitsComponent } from '@rxjs-explorer/outer-observables';

@Component({
  selector: 'rxjs-explorer-root',
  template: `<h1 class="text-blue-700 text-xl">RxJs</h1>
    <p>This works!</p>
    <p>Here is the title: {{ title }}</p>
    <rxjs-explorer-fruits />`,
  styleUrls: ['./app.component.scss'],
  imports: [FruitsComponent],
  standalone: true,
})
export class AppComponent {
  @HostBinding() class = 'rounded border-4 bg-slate-100';

  title = 'rxjs-explorer';
}
