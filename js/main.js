let eyeEl = document.getElementById("eye-el");
let pass = document.getElementById("password");

function changeValue(){
    if (pass.type === "password"){
        pass.type = "text";
        eyeEl.src = "../recourses/images/eye.png"
        eyeEl.alt = "Imagen de un Ojo, que presionando en él, encripta la contraseña";  
        console.log(eyeEl.alt)
     
    } else{
        pass.type = "password"
        eyeEl.src = "../recourses/images/hide.png"
    }
}


