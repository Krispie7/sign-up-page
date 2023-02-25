let pass1=document.querySelector("#password");
let pass2=document.querySelector("#confirmPassword");
let result;

function checkPassword(){
    if (pass1.value==pass2.value){
        result=true;
        document.getElementById("passWarning").style.visibility="hidden";
    }
    else{
        result=false;
        document.getElementById("passWarning").style.visibility="visible";
    }
    return;
}

pass1.addEventListener('keyup', () =>{
    if (pass1.value.length !=0 ) checkPassword()
})

pass2.addEventListener('keyup', checkPassword)