    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message

let inp = document.getElementById("inputField");
let sub = document.getElementById("submit");
let fom = document.getElementById("myForm");
let hed = document.getElementById("head");
let chc = false
console.log(chc)
console.log()

sub.addEventListener("click",check)


function check(){
  format = /^[a-z0-9]+$/i;
  if (!(format.test(inp.value))){
    inp.setCustomValidity("Please, enter alphanumeric input");
  } else{
    inp.setCustomValidity('')
    fom.style.display = "none";
    hed.innerHTML = "You did it!"
    event.preventDefault()
  }
}