import { Component, input } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
})
export class TimerComponent {
  input = 0;
  seconds = 0;
  onChange(event: Event) {
    this.input = Number((event.target as HTMLInputElement).value);
  }
  startTimer() {
    this.seconds = this.input;
    for (let i = this.seconds; i >= 0; i--) {
      setTimeout(() => {
      }, (this.seconds - i) * 1000);
    }
  }
}
