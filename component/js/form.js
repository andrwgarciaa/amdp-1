const loginEmail = document.querySelector("#loginemail");
const loginPass = document.querySelector("#loginpassword");
const regisName = document.querySelector("#regisname");
const regisEmail = document.querySelector("#regisemail");
const regisMaleGender = document.querySelector("#genmale");
const regisFemaleGender = document.querySelector("#genfemale");
const regisCity = document.querySelector("#regiscity");
const regisPass = document.querySelector("#regispassword");
const regisPass2 = document.querySelector("#regispassword2");

function removeRequired(el) {
  const element = document.querySelector(`#${el.id}`);
  if (!element.value.length == 0) {
    element.classList.add("filled");
  }
}

function loginCheck() {
  let message = "";
  if (loginEmail.value.length < 1) {
    message += "Email harus diisi!\n";
  }
  if (loginPass.value.length < 1) {
    message += "Password harus diisi!\n";
  }
  if (message != "") alert(message);
  return message == "";
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
  return false;
}

document.body.addEventListener(
  "focus",
  (event) => {
    const target = event.target;
    switch (target.tagName) {
      case "INPUT":
      case "TEXTAREA":
      case "SELECT":
        document.body.classList.add("keyboard");
    }
  },
  true
);
document.body.addEventListener(
  "blur",
  () => {
    document.body.classList.remove("keyboard");
  },
  true
);
