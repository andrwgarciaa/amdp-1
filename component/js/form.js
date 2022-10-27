const loginEmail = document.querySelector("#loginemail");
const loginPass = document.querySelector("#loginpassword");
const regisName = document.querySelector("#regisname");
const regisEmail = document.querySelector("#regisemail");
const regisMaleGender = document.querySelector("#genmale");
const regisFemaleGender = document.querySelector("#genfemale");
const regisCity = document.querySelector("#regiscity");
const regisPass = document.querySelector("#regispassword");
const regisPass2 = document.querySelector("#regispassword2");

function loginCheck() {
  if (loginEmail.value.length < 1) {
    alert("Email harus diisi!");
  } else if (loginPass.value.length < 1) {
    alert("Password harus diisi!");
  }
  return false;
}

function regisCheck() {
  let message = "";
  if (regisName.value.length < 1) {
    message += "Nama harus diisi!\n";
  }
  if (!regisEmail.value.endsWith("@[a-z].[a-z]")) {
    message += "Format email tidak tepat!\n";
  }
  // if (regisName.value.length < 1){
  //     message += 'Nama harus diisi!\n'
  // }
  alert(message);
}
