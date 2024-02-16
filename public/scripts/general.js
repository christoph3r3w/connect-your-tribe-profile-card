const body = document.querySelector('body');
const root = document.querySelector(':root');
const screen = document.querySelector('screen');
const B_start = document.querySelector('.start');
const theme = document.querySelectorAll('.window_theme');
// restart button
// const RS_B = document.querySelector('');
// var bentanaid = document.querySelector('div.window_card').id;
const exit = document.querySelector('.exit');


theme.forEach(Element =>{
    Element.addEventListener('click',(e)=>{
        body.classList.toggle('dark_theme');
        root.classList.toggle('dark_theme');
        console.log('it worked')
    });
    
});

// drag start
// drag over
// drop
// if mouse down and dragstarts 

// var bentana = document.querySelectorAll('.window_card');
// bentana.forEach(be => {
//     be.addEventListener('dragstart',dragging);
//     be.addEventListener('mousedown',mousedown);

//     if(mousedown && dragging){
//         console.log("yes")
//     };
    
   

// });

var ramchi = document.querySelectorAll('.window_header');
var bentana = document.querySelectorAll('.window_card');
var currentWindow = null; // Variable to track the currently dragged window

// Function to handle mouse down event
// Set the current window as the one being clicked
function mousedown(event) {
    currentWindow = this; 
}


// Function to handle drag start event
function dragging(event) {
    if (currentWindow) {
        // Calculate the offset between the mouse position and the window position
        var offsetX = event.pageX - currentWindow.offsetLeft;
        var offsetY = event.pageY - currentWindow.offsetTop;

        // Set the cursor style to 'grabbing' to indicate dragging
        currentWindow.style.cursor = 'grabbing';

        // Function to handle mouse move event
        function mousemove(event) {
            // Set the window position based on the mouse position and the offset
            currentWindow.style.left = (event.pageX - offsetX) + 'px';
            currentWindow.style.top = (event.pageY - offsetY) + 'px';
        }

        // Function to handle mouse up event
        function mouseup(event) {
            // Unset the current window and remove event listeners
            currentWindow = null;
            currentWindow.style.cursor = 'grab';

            document.removeEventListener('mousemove', mousemove);
            document.removeEventListener('mouseup', mouseup);
        }

        // Add event listeners for mouse move and mouse up
        document.addEventListener('mousemove', mousemove);
        document.addEventListener('mouseup', mouseup);
    }
}
bentana.forEach(be => {
    be.addEventListener('dragstart', (event) => event.preventDefault()); // Prevent default drag behavior
    be.addEventListener('mousedown', mousedown);
    be.addEventListener('dragstart', dragging);
});


















// console.log(bentana);
// let check = function(){
// if (bentana === 'personal') { 
//      exit.setAttribute("popovertarget","personal")
//  } else if (bentana === 'sprint') { 
//     exit.setAttribute("popovertarget","sprint") 
//  } else if (bentana === 'music') { 
//     exit.setAttribute("popovertarget","music") 
// } else { console.log("pop")  }
// };
// check();