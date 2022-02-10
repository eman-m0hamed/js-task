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


// form
// let Name= document.getElementById('name'),
//     email= document.getElementById('email'),
//     subject= document.getElementById('subject'),
//     message= document.getElementsByTagName('textarea'),
//     submit= document.getElementById('submit');

// let label1= document.getElementById('lab1'),
//     label2= document.getElementById('lab2'),
//     label3= document.getElementById('lab3'),
//     label4= document.getElementById('lab4');


//     submit.onclick= function(){
    
//         label1.textContent= Name.value;
//         label2.textContent= email.value;
//         label3.textContent= subject.value;
//         label4.textContent= message[0].value;
// }


let inputs= document.getElementsByTagName('input'),
    message= document.getElementById('message'),
    labels= document.getElementsByClassName('lab'),
    submit= document.getElementById('submit');

    submit.onclick= function(){
    
        for(let i=0; i<labels.length-1; i++){
            labels[i].textContent= inputs[i].value;
        }
        labels[3].textContent= message.value;
}

