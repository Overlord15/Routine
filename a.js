// / get the input numbers from HTML input fields and swap them
function swap() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  num2 = num1 + num2; 
  num1 = num2 - num1; 
  num2 = num2 - num1;
//   document.getElementById("result").textContent = result;
//   let result = `Swapped numbers: ${num1}, ${num2}`;
  document.getElementById("result").innerHTML = "Number One : "+num1+", Number Two : "+num2;
  console.log("Done")
}
