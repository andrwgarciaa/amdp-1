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
  element.toggleAttribute("required");
}

function loginCheck() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let message = "";
  if (loginEmail.value.length < 1) {
    message += "Email harus diisi!\n";
  } else {
    if (!emailPattern.test(loginEmail.value)) {
      message += "Format email tidak tepat!\n";
    }
  }
  if (loginPass.value.length < 1) {
    message += "Password harus diisi!\n";
  }
  if (message != "") alert(message);
  return message == "";
}

function regisCheck() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passPattern = /^(?=.*[\d])(?=.*[A-Z])[\w]{8,}/;
  let message = "";
  if (regisName.value.length < 1) {
    message += "Nama harus diisi!\n";
  }
  if (!emailPattern.test(regisEmail.value)) {
    message += "Format email tidak tepat!\n";
  }
  if (!(genmale.checked || genfemale.checked)) {
    message += "Pilih gender!\n";
  }
  if (regisPass.value.length < 8) {
    message += "Password minimal 8 karakter!\n";
  } else {
    if (!passPattern.test(regisPass.value)) {
      message +=
        "Password harus memiliki minimal 1 huruf kapital dan 1 angka!\n";
    }
  }
  if (regisPass2.value.length < 1) {
    message += "Tulis kembali password yang sama!\n";
  } else {
    if (regisPass2.value != regisPass.value) {
      message += "Konfirmasi password tidak sesuai!\n";
    }
  }
  if (message != "") alert(message);
  return message == "";
}
