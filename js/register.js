var userList = [];

function createUser() {
  //lấy input
  var email = document.getElementById("txtEmail").value;
  var name = document.getElementById("txtName").value;
  var password = document.getElementById("txtPassword").value;
  var phone = document.getElementById("txtPhone").value;
  var gender = document.getElementById("gender").value;

  var newUser = new User(email, name, password, phone, gender);
  userList.push(newUser);
  console.log(userList);

}
