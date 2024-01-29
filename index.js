$(document).ready(function(){
    
    $(".notre-job1").textillate({
    in:{effect:"rollIn",delay:50},
    out:{effect:"rollOut",sync:true,delay:60},
    loop:true 
});
console.log("vhgdhgghd")
$(".notre-job2").textillate({
    in:{effect:"rollIn",delay:50},
    out:{effect:"rollOut",sync:true,delay:60},
    loop:true 
});


})
const buttons = document.querySelectorAll('.faq-toggle');



buttons.forEach((button) =>{
    button.addEventListener('click', () =>{
        button.parentNode.classList.toggle('active')
    })
})