let button = document.getElementsByClassName('btn');
let pragraph = document.getElementsByClassName('pragraph');
for(let i=0; i<button.length; i++){
    button[i].onclick= function(){
        if(button[i].textContent=="See More"){
            pragraph[i].style= "height:100px;";
            button[i].textContent="See Less";
        }
        else {
            pragraph[i].style= "height:0;";
            button[i].textContent="See More";
        }
    }

    
};



