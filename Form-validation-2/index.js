const validation = () => {
  //id

  let id = document.getElementById("user-id").value;
  if (id === null || id === "") {
    document.getElementById("id").innerHTML = "enter your user-id";
    document.getElementById("id").style.color = "red";
    document.getElementById("user-id").style.border = "2px solid red";
  } else {
    document.getElementById("id").innerHTML = "";
    document.getElementById("user-id").style.border = "2px solid green";
  }
  // name
  let nam = document.getElementById("names").value;
  if (nam === null || nam === "") {
    document.getElementById("na").innerHTML = "enter your name";
    document.getElementById("na").style.color = "red";
    document.getElementById("names").style.border = "2px solid red";
  } else {
    document.getElementById("na").innerHTML = "";
    document.getElementById("names").style.border = "2px solid green";
  }
  //   email

  let email = document.getElementById("email").value;
  let emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email === null || email === "") {
    document.getElementById("mail").innerHTML = "enter your email";
    document.getElementById("mail").style.color = "red";
    document.getElementById("email").style.border = "2px solid red";
  } else if (email.match(emailformat)) {
    document.getElementById("email").style.border = "2px solid green";
    document.getElementById("mail").innerHTML = " ";
  } else {
    document.getElementById("email").style.border = "2px solid red";
    document.getElementById("mail").innerHTML =
      "entered an invalid email address!";
    document.getElementById("mail").style.color = " red";
  }

  //   1pas
  let pword = document.getElementById("pass").value;
  if (pword === null || pword === "") {
    document.getElementById("pa").innerHTML = "enter your password";
    document.getElementById("pa").style.color = "red";
    document.getElementById("pass").style.border = "2px solid red";
  } else if (pword.length < 8) {
    document.getElementById("pa").innerHTML =
      "Password must be at least 8 to 12 characters long";
    document.getElementById("pa").style.color = "red";
    document.getElementById("pass").style.border = "2px solid red";
  } else {
    document.getElementById("pa").innerHTML = "";
    document.getElementById("pass").style.border = "2px solid green";
  }
  //add
  let add = document.getElementById("address").value;
  let addmatch = /^[0-9a-zA-Z]+$/;
  if (add === null || add === "") {
    document.getElementById("add").innerHTML = "enter your adderss";
    document.getElementById("add").style.color = "red";
    document.getElementById("address").style.border = "2px solid red";
  } else if (add.match(addmatch)) {
    document.getElementById("add").innerHTML = "";
    document.getElementById("address").style.border = "2px solid green";
  } else {
    document.getElementById("add").innerHTML =
      "User address must have alphanumeric characters only";
    document.getElementById("add").style.color = "red";
    document.getElementById("address").style.border = "2px solid red";
  }
  //country

  let country = document.getElementById("country").value;
  if (country === "Default") {
    document.getElementById("coun").innerHTML =
      "Select your country from the list";
    document.getElementById("coun").style.color = "red";
    document.getElementById("country").style.border = "2px solid red";
  } else {
    document.getElementById("coun").innerHTML = "";
    document.getElementById("country").style.border = "2px solid green";
  }
  //zip

  let zip = document.getElementById("zip").value;
  var zipnum = /^[0-9]+$/;
  if (zip === null || zip === "") {
    document.getElementById("zi").innerHTML = "enter your zip-code";
    document.getElementById("zi").style.color = "red";
    document.getElementById("zip").style.border = "2px solid red";
  } else if (zip.length > 6) {
    document.getElementById("zi").innerHTML = "zip-code must be 6 digit long";
    document.getElementById("zi").style.color = "red";
    document.getElementById("zip").style.border = "2px solid red";
  } else {
    if (zip.match(zipnum)) {
      document.getElementById("zi").innerHTML = "";
      document.getElementById("zip").style.border = "2px solid green";
    } else {
      document.getElementById("zi").innerHTML =
        "ZIP code must have numeric characters only";
      document.getElementById("zi").style.color = "red";
      document.getElementById("zip").style.border = "2px solid red";
    }
  }

  //gender

  let gen = document.querySelector('input[name="gender"]:checked');
  if (gen != null) {
    document.getElementById("gen").innerHTML = "";
  } else {
    document.getElementById("gen").innerHTML = "Select your gender";
    document.getElementById("gen").style.color = "red";
  }

  // cheack;

  let eng = document.querySelector('input[name="eng"]:checked');

  if (eng != null) {
    document.getElementById("eng").innerHTML = "";
  } else {
    document.getElementById("eng").innerHTML = "Select your language";
    document.getElementById("eng").style.color = "red";
  }
};
