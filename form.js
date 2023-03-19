function valid(){
    let name = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let password = document.getElementById("password").value;
    let c_password = document.getElementById("c_password").value;
    let message = document.getElementById("message");

    if( name != 0 && email!=0 && password!=0 && c_password!=0){
       if( password.length>=8 && c_password.length>=8 && password == c_password){
        message.textContent = "valid";
        message.style.color="#1dcd59";
       }
       else{
        message.textContent="invalid";
       }
    }
    else{

        message.textContent="";
        alert("please fill up the form");

    }
}