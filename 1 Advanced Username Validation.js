const form = document.querySelector('#registerionForm');



  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const confirmPassword = document.querySelector("#confirmPassword");


const error = document.querySelector("#error");
const success = document.querySelector("#success");


form.addEventListener("submit", function(event){
   event.preventDefault();

   // Validate fields

   const isUsernameValid = validateUsername()

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

   element.classList.add('invalid')//classList waxa waaye class oo hesto no soo qobo
   element.classList.remove('valid');
}


function setSuccess(element){

   element.classList.add('valid');
   element.classList.remove('invalid');
}