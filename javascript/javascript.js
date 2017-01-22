/* This validates the contact form */
function formValidate() {
    var values = document.getElementById("contactForm");
    var firstname = document.forms["contactForm"]["firstname"].value;  
    var lastname = document.forms["contactForm"]["lastname"].value;  
    var email = document.forms["contactForm"]["email"].value;  

    if(firstname.length == 0 || lastname.length == 0 || email.length == 0){
    	alert("Please fill the complete form");       
     }else{
    	alert("Thank you for submitting the form");  	
	}
}

/* This alerts reset message */
function resetMessage()
{
alert("The form has been reset");
}

/* This changes the color of input field when hovered */
function inputColor(x) {
    x.style.background = "#D8D7D8";
}

/* This displays date in the home page */
function todayDate() {
    var date = new Date();
    var display = date.toDateString();
    document.getElementById("todayDate").innerHTML = display;
}

/* This changes the property when mouse hovered */
function mouse_over(x){
	x.style.background = "white";
	x.style.color = "#000000";
}

/* This changes the property when mouse out */
function mouse_out(x){
	x.style.background = "red";
	x.style.color = "white";
}

