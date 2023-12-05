function login() {
    let email = document.getElementById("txtEmail").value;
    let password = document.getElementById("txtPassword").value;

    let isValid = validation();
    if (!isValid) {
      return alert("Vui lòng kiểm tra giá trị của các input");
    } else {
      let newUser = new User(email, password);
      let promise = axios({
        url: " https://shop.cyberlearn.vn/api/Users/login",
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
      let inpPassword = document.getElementById("txtPassword");
      let spanPassword = document.getElementById("spanPassword");
  
      // Validate email
      if (inpEmail.validity.valueMissing) {
        spanEmail.innerHTML = "Email không được để trống";
      } else if (inpEmail.validity.patternMismatch) {
        spanEmail.innerHTML = "Email không đúng định dạng";
      } else {
        spanEmail.innerHTML = "";
      }
      // Validate password
      if (inpPassword.validity.valueMissing) {
        spanPassword.innerHTML = "Mật khẩu không được để trống";
      } else {
        spanPassword.innerHTML = "";
      }
    }
    return check;
  }
  
  function resetForm() {
    let inpEmail = document.getElementById("txtEmail");
    let inpPassword = document.getElementById("txtPassword");
  
    inpEmail.value = "";
    inpPassword.value = "";
  }
  