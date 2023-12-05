function submit() {
  let email = document.getElementById("txtEmail").value;
  let name = document.getElementById("txtName").value;
  let password = document.getElementById("txtPassword").value;
  let phone = document.getElementById("txtPhone").value;
  let gender = document.querySelector('input[name="radio"]:checked').value;

  let isValid = validation();
  if (!isValid) {
    return alert("Vui lòng kiểm tra giá trị của các input");
  } else {
    let newUser = new User(email, name, password, phone, gender);
    let promise = axios({
      url: " https://shop.cyberlearn.vn/api/Users/signup",
      method: "POST",
      data: newUser,
    });
    promise.then((result) => {
      alert(result.data?.message);
      resetForm();
    });
    promise.catch((err) => {
      alert(err?.message);
      resetForm();
    });
  }
}

function validation() {
  let check = true;
  let isValid = document.getElementById("formRegister").checkValidity();
  if (!isValid) {
    check = false;
    let inpEmail = document.getElementById("txtEmail");
    let spanEmail = document.getElementById("spanEmail");
    let inpName = document.getElementById("txtName");
    let spanName = document.getElementById("spanName");
    let inpPassword = document.getElementById("txtPassword");
    let spanPassword = document.getElementById("spanPassword");
    let inpPhone = document.getElementById("txtPhone");
    let spanPhone = document.getElementById("spanPhone");
    let inpPasswordConfirm = document.getElementById("passwordConfirm");
    let spanPasswordConfirm = document.getElementById("spanPasswordConfirm");

    // Validate email
    if (inpEmail.validity.valueMissing) {
      spanEmail.innerHTML = "Email không được để trống";
    } else if (inpEmail.validity.patternMismatch) {
      spanEmail.innerHTML = "Email không đúng định dạng";
    } else {
      spanEmail.innerHTML = "";
    }
    // Validate name
    if (inpName.validity.valueMissing) {
      spanName.innerHTML = "Tên không được để trống";
    } else if (inpName.validity.patternMismatch) {
      spanName.innerHTML = "Tên không đúng định dạng";
    } else {
      spanName.innerHTML = "";
    }
    // Validate password
    if (inpPassword.validity.valueMissing) {
      spanPassword.innerHTML = "Mật khẩu không được để trống";
    } else {
      spanPassword.innerHTML = "";
    }
    // Validate phone number
    if (inpPhone.validity.valueMissing) {
      spanPhone.innerHTML = "Số điện thoại không được để trống";
    } else if (inpPhone.validity.patternMismatch) {
      spanPhone.innerHTML = "Số điện thoại sai định dạng";
    } else {
      spanPhone.innerHTML = "";
    }
    // Validate password confirm
    if (inpPasswordConfirm.validity.valueMissing) {
      spanPasswordConfirm.innerHTML = "Mật khẩu không được để trống";
    } else {
      spanPasswordConfirm.innerHTML = "";
    }
  }
  return check;
}

function resetForm() {
  let inpEmail = document.getElementById("txtEmail");
  let inpName = document.getElementById("txtName");
  let inpPassword = document.getElementById("txtPassword");
  let inpPhone = document.getElementById("txtPhone");
  let inpPasswordConfirm = document.getElementById("passwordConfirm");

  inpEmail.value = "";
  inpName.value = "";
  inpPassword.value = "";
  inpPhone.value = "";
  inpPasswordConfirm.value = "";
}
