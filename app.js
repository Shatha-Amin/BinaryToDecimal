let inputBox = document.getElementById("binary");

let convertBtn = document.querySelector(".btn");

let para = document.querySelector(".result");

function checkString(str) {
  let isBinary = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "0" || str[i] == "1") {
      isBinary = true;
    } else {
      isBinary = false;
    }
  }
  return isBinary;
}

let convertBinarytoDecimal = (e) => {
  e.preventDefault();
  let binary = inputBox.value;
  let check = checkString(binary);
  if (check) {
    let decimal = parseInt(binary, 2);
    //   console.log(decimal);
    para.textContent = `Decimal Number : ${decimal}`;
  } else {
    alert("please Enter a Binary Number 😏");
  }
};

convertBtn.addEventListener("click", convertBinarytoDecimal);
