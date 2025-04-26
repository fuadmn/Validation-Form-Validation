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
   const isEmailVaild = validateEmail();

   if(!isUsernameValid){
      username.focus(); //waxa us saara focus ka sara username
      return
   }else if(!isEmailVaild){
      email.focus();
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

function validateEmail(){
   
   		const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


   if(!email.value.match(emailPattern)){
      setError(email, "Please enter a valid email address")
      return false;
   }else{
      setSuccess(email)
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