import {Component} from 'angular2/core';
import {CounterComponent} from './counter.component';

@Component({
  selector: 'my-app',
  styles: [`
    .app {
      display: block;
      text-align: center;
      padding: 25px;
      background: #f5f5f5;
    }
  `],
  template: `
    <div class="app">
    	<!--
    		In the child component named counter.component.ts
    		. 'counterValue' is the @Input value specified in the child component 
    		. 'counterChange' is the @Output value specified in the child component
    		. 'counter' is the selector in @Component of the child component
    		
    		Here we assign the public variable 'myValue' to 'counterValue', 
    		the @Input value to counter.component.ts, meaning we are passing
    		the value into counter.component.ts. This occurs at component 
    		initialization.
    		
    		The @Output event handler 'myValueChanged' can be triggered multiple times
    		
    	-->
      <counter [counterValue]="myValue" (counterChange)="myValueChanged($event);"></counter>
    </div>
  `,
  directives: [CounterComponent]
})
export class AppComponent {

	// set the initial value for passing to the child component
  public myValue:number = 2;

	// set the event handler for listening to events that may be emitted from the child component
  myValueChanged($event) {
		console.log($event.value);
  }

}