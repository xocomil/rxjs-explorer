import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rxjs-explorer-fruits',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>fruits works!</p> `,
  styleUrls: ['./fruits.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FruitsComponent {}
