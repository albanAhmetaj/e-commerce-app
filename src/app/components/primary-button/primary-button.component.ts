import { Component, Input, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button class="btn bg-blue-500 text-white w-full border px-5 py-2 rounded-xl shadow-md hover:opacity-90" (click)="btnClicked.emit()"
    [class.disabled]="disabled" [disabled]="disabled">
      {{ label() }}
    </button>
  `,
  styles: `
    .btn.disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }
  `
})
export class PrimaryButtonComponent {

  label = input('');
  @Input() disabled: boolean = false;
  btnClicked = output();
}
