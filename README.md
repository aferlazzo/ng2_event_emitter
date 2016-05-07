
   	In the child component named counter.component.ts
        . 'counterValue' is the @Input value specified in the child component
        . 'counterChange' is the @Output value specified in the child component
        . 'counter' is the selector in @Component of the child component

    Here we assign the public variable 'myValue' to 'counterValue',
    the @Input value to counter.component.ts, meaning we are passing
    the value into counter.component.ts. This occurs at component
    initialization.

    The @Output event handler 'myValueChanged' can be triggered multiple times

    In the ChildComponent class in counter.compnent.ts, we
	set up two-way communication with the parent component

	We use the @Input decorator to get the value of the parent component's
	variable 'counterValue'

	We user the @Output decorator to send one or more events to the parent component
    via the counterChange event emitter function.

	Every time the user clicks the '+' or '-' button the increment() or decrement()
	click handler is called. This is where we emit an event to counterChange handler
	to send an event to the parent component.

