var userList = [];

function createUser() {
  //lấy input
  var email = document.getElementById("txtEmail").value;
  var name = document.getElementById("txtName").value;
  var password = document.getElementById("txtPassword").value;
  var phone = document.getElementById("txtPhone").value;
  var gender = document.querySelector('input[name="radio"]:checked').value;

  // Gọi tới hàm validation để kiểm tra xem form có hợp lệ hay không
  var isValid = validation();
  if (!isValid) {
    return alert("Vui lòng kiểm tra giá trị của các input");
  }

  var newUser = new User(email, name, password, phone, gender);
  userList.push(newUser);
  console.log(userList);
}
function validation() {
  var isValid = document.getElementById("formRegister").checkValidity();
  if (!isValid) {
    // DOM tới input txtEmail và kiểm tra hợp lệ
    var inpEmail = document.getElementById("txtEmail");
    var spanEmail = document.getElementById("spanEmail");
    if (inpEmail.validity.valueMissing) {
      // input đang bị lỗi required
      spanEmail.innerHTML = "Email không được để trống";
    } else if (inpEmail.validity.patternMismatch) {
      // input đang bị lỗi email không đúng định dạng
      spanEmail.innerHTML = "Email không đúng định dạng";
    } else {
      spanEmail.innerHTML = "";
    }
    var inpName = document.getElementById("txtName");
    var spanName = document.getElementById("spanName");
    if (inpName.validity.valueMissing) {
      spanName.innerHTML = "Tên không được để trống";
    } else if (inpName.validity.patternMismatch) {
      spanName.innerHTML = "Tên không đúng định dạng";
    } else {
      spanName.innerHTML = "";
    }
    var inpPassword = document.getElementById('txtPassword');
    var spanPassword = document.getElementById('spanPassword');
    if (inpPassword.validity.valueMissing) {
      spanPassword.innerHTML = 'Mật khẩu không được để trống';
    }else{
      spanPassword.innerHTML=""
    }
    var inpPhone = document.getElementById('txtPhone');
    var spanPhone = document.getElementById('spanPhone');
    if(inpPhone.validity.valueMissing) {
      spanPhone.innerHTML = "Số điện thoại không được để trống"
    }else if(inpPhone.validity.patternMismatch){
      spanPhone.innerHTML = "Số điện thoại sai định dạng"
    }else{
      spanPhone.innerHTML = "";
    }

    var inpPasswordConfirm = document.getElementById('passwordConfirm');
    var spanPasswordConfirm = document.getElementById('spanPasswordConfirm');
    if (inpPasswordConfirm.validity.valueMissing) {
      spanPasswordConfirm.innerHTML = 'Mật khẩu không được để trống';
    }else{
      spanPasswordConfirm.innerHTML="";
    }
  }

}