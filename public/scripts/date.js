// console.log("start");
const CT = document.querySelector('.current_T');


function taskbar_time() {

    const now = new Date();

    const T_hour = String(now.getHours()).padStart(2, '0');
    const T_minute = String(now.getMinutes()).padStart(2, '0'); 
    const T_time = T_hour + ':' + T_minute;
    CT.innerHTML = T_time;
}


setInterval(taskbar_time, 1000);
taskbar_time();


// console.log("done");
// console.log(CT);




