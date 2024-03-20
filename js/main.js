let eyeEl = document.getElementById("eye-el");
let pass = document.getElementById("password");

function changeValue(){
    if (pass.type === "password"){
        pass.type = "text";
        eyeEl.src = "./recourses/images/eye.png"
     
    } else{
        pass.type = "password"
        eyeEl.src = "./recourses/images/hide.png"
    }
}


