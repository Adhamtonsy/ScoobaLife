function checkInput() {
  var input_name = document.getElementById("name").value;
  var input_email = document.getElementById("email").value;
  var input_subject = document.getElementById("subject").value;
  var input_msg = document.getElementById("message").value;

  if (
    input_name == "" ||
    input_email == "" ||
    input_subject == "" ||
    input_msg == ""
  ) {
    alert("Please enter fill all data");
    return false;
  } else {
    alert("Message Sent");
  }
  return true;
}

/* Storing user's device details in a variable*/
let details = navigator.userAgent;

/* Creating a regular expression 
containing some mobile devices keywords 
to search it in details string*/
let regexp = /android|iphone|kindle|ipad/i;

/* Using test() method to search regexp in details
it returns boolean value*/
let isMobileDevice = regexp.test(details);

if (isMobileDevice) {
  console.log("Moblie Done");

  document.getElementById("logo").style.width = "20%";
  document.getElementById("logo").style.top = "20px";
 

  document.getElementById("nav-item").style.width = "70%";
  document.getElementById("nav-item").style.height = "40px";
  document.getElementById("item-1").style.fontSize = "0.8em";
  document.getElementById("item-2").style.fontSize = "0.8em";
  document.getElementById("item-3").style.fontSize = "0.8em";
  document.getElementById("item-4").style.fontSize = "0.8em";
  document.getElementById("item-5").style.fontSize = "0.8em";
  document.getElementById("central").style.flexWrap = "nowrap";
  document.getElementById("contect").style.width = "auto";
  document.getElementById("contect").style.fontSize = "0.8em";
  document.getElementById("input-email").style.width = "100%";

} else {
  console.log("You are using Desktop");
}
