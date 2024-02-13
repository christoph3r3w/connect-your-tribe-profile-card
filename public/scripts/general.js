const body = document.querySelector('body');
const root = document.querySelector(':root');
const screen = document.querySelector('screen');
const B_start = document.querySelector('.start');
const theme = document.querySelectorAll('.window_theme');
// restart button
// const RS_B = document.querySelector('');
var bentana = document.querySelector('div.window_card').id;
const exit = document.querySelector('.exit');


theme.forEach(Element =>{
    Element.addEventListener('click',(e)=>{
        body.classList.toggle('dark_theme');
        root.classList.toggle('dark_theme');
        console.log('it worked')
    });

});
















console.log(bentana);
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