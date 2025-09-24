

const paintCanvas = document.querySelector('.js-paint');
const context = paintCanvas.getContext('2d');
context.lineCap = 'round';
//this determinds how the color is printed onto the page

const colorPicker = document.querySelector('.js-color-picker');

colorPicker.addEventListener('change' , event => {
    context.strokeStyle = event.target.value;
}); // these determind the color value the 'event' here is the same as the color picker. The target becomes the color picker

const lineWidthRange = document.querySelector('.js-line-range');
const lineWidthLabel = document.querySelector('.js-range-value'); // these are the slider

lineWidthRange.addEventListener('input', event => 
{
    const width = event.target.value;
    lineWidthLabel.innerHTML = width;
    //changes the 'px' number when you move the slider.

    context.lineWidth = width;
    //this changes the width of the drawing line
});
//when a change is made on the color slider, it is called an input. The event.target is the same as the event in the colorPicker. They are the same

let x = 0, y = 0;
// coordnate systems in canvases are inverted
let isMouseDown = false;

const stopDrawing = () => {isMouseDown = false; }
const startDrawing = event => {
    isMouseDown = true;
    [x, y] = [event.offsetX, event.offsetY];
    // destructering assignment
}
const drawLine = event => {
    if (isMouseDown) {
        const newX = event.offsetX;
        const newY = event.offsetY;
        context.beginPath();
        context.moveTo(x , y);
        context.lineTo(newX, newY);
        context.stroke();
        //[x , y] = [newX, newY];
        //can either use the top or bottom one, both work
        x = newX;
        y = newY
    }
}




paintCanvas.addEventListener('mousedown', startDrawing);
paintCanvas.addEventListener('mousemove', drawLine);
// you move the mouse
paintCanvas.addEventListener('mouseup', stopDrawing);
//you release the mouse
paintCanvas.addEventListener('mouseout', stopDrawing);
// you move the mouse outside of the canvas area
