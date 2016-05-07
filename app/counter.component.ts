import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'counter',
  styles: [`
    .counter {
      position: relative;
    }
    .counter__input {
      border: 0;
      border-radius: 3px;
      height: 30px;
      max-width: 100px;
      text-align: center;
    }
    .counter__button {
      outline: 0;
      cursor: pointer;
      height: 30px;
      width: 30px;
      border: 0;
      border-radius: 3px;
      background: #0088cc;
      color: #fff;
    }
  `],
  template: `
    <div class="counter">
      <div class="counter__container">
        <button (click)="decrement();" class="counter__button">
          -
        </button>
        <input type="text" class="counter__input" [value]="counterValue">
        <button (click)="increment();" class="counter__button">
          +
        </button>
      </div>
    </div>
  `
})
export class CounterComponent {

	// Set up two-way communication with the parent component

	// This is to get the value of the parent component's variable 'counterValue'
  @Input() counterValue;
	// This is to send one or more events to the parent component
  @Output() counterChange = new EventEmitter();

	/*---------------------------

	 Every time the user clicks the '+' or '-' button the increment() or decrement()
	 click handler is called. This is where we emit an event to counterChange handler
	 to send an event to the parent component.
	*/
  increment() {
    this.counterValue++;
    this.counterChange.emit({
      value: this.counterValue
    })
  }
  decrement() {
    this.counterValue--;
    this.counterChange.emit({
      value: this.counterValue
    })
  }
}