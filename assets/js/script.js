// mengirim pesan di google sheet

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyC-N7pbEi3tTA-dEbwTK1xF2gMlXcf5uHWAj9XaKtpbfV3LH8IYAs9NnCcVOSeN-tu/exec";
const form = document.forms["portofolio-contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});

// Fungsi memanggil data ketika sukses
function handleGetFormData() {
  return {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
  };
}

function validateFormData({ name, email, subject } = {}) {
  return name && email && subject;
}

function submit() {
  const formData = handleGetFormData();

  if (validateFormData(formData)) {
    swal({
      title: "Good job!",
      text: "Data berhasil dikirim!",
      icon: "success",
      button: "Aww yiss!",
    });

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
  }
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  submit();
});
