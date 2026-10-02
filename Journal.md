Describe how you implemented the timer and how you generated random colors. Why is it important to use a consistent interval for the lighting?

To create random panel colors, I used Math.floor(Math.random() * 256) to generate whole numbers for each color channel and formatted them into a standard rgb string. I implemented the timing with setInterval(), which runs a callback function every 1,000 milliseconds. Each second, this function fires to update the background color of both panels.

It's important to use a consistent interval for lighting to create a smooth, predictable visual effect. Maintaining a steady timing rhythm gives the page an intentional disco atmosphere rather than an erratic, flickering look.


                                            ~~~~~~



Explain the concept of “event bubbling.” How did stopPropagation() allow you to separate the Dancer’s interaction from the Floor’s interaction?

Event bubbling is the default behavior for how events move through the HTML DOM tree. When an event occurs on a child element, it does not stop there; instead, it "bubbles up" through its parent elements. 

Without intervention, clicking the dancer fires the dancer's click listener first and then immediately bubbles up to trigger the dance floor's click listener. Using stopPropagatio() intercepts this process inside the dancer's listener, halting the event chain so the dance floor's background color remain unchanged.
