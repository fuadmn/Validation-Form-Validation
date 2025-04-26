const form = document.querySelector('#registerionForm');



  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const confirmPassword = document.querySelector("#confirmPassword");


const error = document.querySelector("#error");
const success = document.querySelector("#success");


form.addEventListener("submit", function(event){
   event.preventDefault();

   error.textContent = "";
   success.textContent = "";
   // Validate fields

   const isUsernameValid = validateUsername();

   if(!isUsernameValid){
      username.focus(); //waxa us saara focus ka sara username
      return
   }


   success.textContent = "Registration successfully!"
    
})

function validateUsername(){

   if(username.value === ''){
      // error
      setError(username, 'Username is required');
      return false
   }else{
      // success
      setSuccess(username);
      return true
   }
}

function setError(element, message){
   // show error class
   element.classList.add('invalid')//classList waxa waaye class oo hesto no soo qobo
   // hide success class
   element.classList.remove('valid');
   error.textContent = message;
}


function setSuccess(element){

   element.classList.add('valid');
   element.classList.remove('invalid');
}