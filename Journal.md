Describe how you implemented the timer and how you generated random colors. Why is it important to use a consistent interval for the lighting?

To create random panel colors, I used Math.floor(Math.random() * 256) to generate whole numbers for each color channel and formatted them into a standard rgb string. I implemented the timing with setInterval(), which runs a callback function every 1,000 milliseconds. Each second, this function fires to update the background color of both panels.

It's important to use a consistent interval for lighting to create a smooth, predictable visual effect. Maintaining a steady timing rhythm gives the page an intentional disco atmosphere rather than an erratic, flickering look.
