
let isStatus = document.querySelector('h5');
let button = document.getElementById("add");

let check = 0;

button.addEventListener("click", function(){

    if(check === 0) {

        isStatus.innerHTML = 'Friends';
        isStatus.style.color = 'green';
        button.innerHTML = 'Remove Friend';
        button.style.background ='#dadada';
        button.style.color = '#111';
        check = " ";
    } 
    else {
       isStatus.innerHTML = 'Stranger';
       isStatus.style.color = 'red';
       button.innerHTML = 'Add Friend';
       button.style.background ='rgb(11, 97, 68)';
       button.style.color = '#fff';
       check = 0
    } 


})
