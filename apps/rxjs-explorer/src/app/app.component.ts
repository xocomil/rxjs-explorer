import { Component } from '@angular/core';

@Component({
  selector: 'rxjs-explorer-root',
  template: `<h1>RxJs</h1>
    <p>This works!</p>
    <p>Here is the title: {{ title }}</p>`,
  styleUrls: ['./app.component.scss'],
  standalone: true,
})
export class AppComponent {
  title = 'rxjs-explorer';
}
