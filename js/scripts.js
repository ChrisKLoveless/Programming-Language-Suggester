//Event listener for loading page and running UI logic
addEventListener("load", function() {
  const form = document.querySelector("form")

//add Event Listener to hold form values and convert to numbers
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const input1 = parseInt(document.getElementById("input1").value);
    const input2 = parseInt(document.getElementById("input2").value);
    const input3 = parseInt(document.getElementById("input3").value);
    const input4 = parseInt(document.getElementById("input4").value);
    const input5 = parseInt(document.getElementById("input5").value);
    const total = input1 + input2 + input3 + input4 + input5;

    let result;
  document.getElementById("output").innerText = result;  

//Business Logic
if (total >=5 && total <= 10) {
  document.getElementById("result-message").removeAttribute("class");
  document.getElementById("output").innerText = "JavaScript";
}
else if (total > 10 && total <= 20) {
  document.getElementById("result-message").removeAttribute("class");
  document.getElementById("output").innerText = "Python";
}
else if (total > 20 && total <= 25) {
  document.getElementById("result-message").removeAttribute("class");
  document.getElementById("output").innerText = "Rust";
}
else if (undefined) {
  document.getElementById("error-message").removeAttribute("class"); 
}
else {
  document.getElementById("error-message").removeAttribute("class"); 
}
//add event listener for reset button to reload page on click
  const reset = document.getElementById("reset-btn");
  reset.addEventListener("click", function() {
    document.location.reload();
  })
  
 })  
}); 
 




