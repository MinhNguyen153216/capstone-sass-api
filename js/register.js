let userList = [];

function createUser() {
  console.log("create");
  //lấy input
  let email = document.getElementById("txtEmail").value;
  let name = document.getElementById("txtName").value;
  let password = document.getElementById("txtPassword").value;
  let phone = document.getElementById("txtPhone").value;
  let gender = document.querySelector('input[name="radio"]:checked').value;

  // Gọi tới hàm validation để kiểm tra xem form có hợp lệ hay không
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
      alert("Bạn đăng kí thành công !");
    });

    promise.catch((err) => {
      console.log(err);
    });
  }
}
function validation() {
  let check = true;
  let isValid = document.getElementById("formRegister").checkValidity();
  if (!isValid) {
    check = false;
    // DOM tới input txtEmail và kiểm tra hợp lệ
    let inpEmail = document.getElementById("txtEmail");
    let spanEmail = document.getElementById("spanEmail");
    if (inpEmail.validity.valueMissing) {
      // input đang bị lỗi required
      spanEmail.innerHTML = "Email không được để trống";
    } else if (inpEmail.validity.patternMismatch) {
      // input đang bị lỗi email không đúng định dạng
      spanEmail.innerHTML = "Email không đúng định dạng";
    } else {
      spanEmail.innerHTML = "";
    }
    let inpName = document.getElementById("txtName");
    let spanName = document.getElementById("spanName");
    if (inpName.validity.valueMissing) {
      spanName.innerHTML = "Tên không được để trống";
    } else if (inpName.validity.patternMismatch) {
      spanName.innerHTML = "Tên không đúng định dạng";
    } else {
      spanName.innerHTML = "";
    }
    let inpPassword = document.getElementById("txtPassword");
    let spanPassword = document.getElementById("spanPassword");
    if (inpPassword.validity.valueMissing) {
      spanPassword.innerHTML = "Mật khẩu không được để trống";
    } else {
      spanPassword.innerHTML = "";
    }
    let inpPhone = document.getElementById("txtPhone");
    let spanPhone = document.getElementById("spanPhone");
    if (inpPhone.validity.valueMissing) {
      spanPhone.innerHTML = "Số điện thoại không được để trống";
    } else if (inpPhone.validity.patternMismatch) {
      spanPhone.innerHTML = "Số điện thoại sai định dạng";
    } else {
      spanPhone.innerHTML = "";
    }

    let inpPasswordConfirm = document.getElementById("passwordConfirm");
    let spanPasswordConfirm = document.getElementById("spanPasswordConfirm");
    if (inpPasswordConfirm.validity.valueMissing) {
      spanPasswordConfirm.innerHTML = "Mật khẩu không được để trống";
    } else {
      spanPasswordConfirm.innerHTML = "";
    }
  }
  return check;
}
