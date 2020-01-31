const toggleMenu = document.querySelector(".toggle-menu");
let isOpen = false;
// toggleMenu.addEventListener("click", activeMenu);

function activeMenu() {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");

  if (!isOpen) {
    header.style.height = "auto";
    nav.style.display = "block";
    isOpen = true;
  } else {
    header.style.height = "7.3rem";
    nav.style.display = "none";
    isOpen = false;
  }
}

// Select User type in create user page
const userType = document.querySelector("#selectUser");
const userForm = document.querySelector(".user-form");
const researcherForm = document.querySelector(".researcher-form");

userType.addEventListener("change", selectUser);

function selectUser() {
  if (userType.value == "user") {
    hideForm();
    userForm.style.display = "block";
  } else if (userType.value == "researcher") {
    hideForm();
    researcherForm.style.display = "block";
  }
}

function hideForm() {
  const userForms = document.querySelectorAll(".account-form");
  userForms.forEach(form => {
    form.style.display = "none";
  });
}
