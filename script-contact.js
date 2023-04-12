function myAlert(){
	var nameField=document.getElementById('name').value;
	var emailField=document.getElementById('email').value;
	var selectField=document.getElementById('query').options[document.getElementById('query').selectedIndex].value;
	var textField=document.getElementById('subject').value;

	
	if (nameField=="" || emailField=="" || textField=="")
		{
		   alert ("Please fill out the form fully. Thank you!");
		}
	else{
		alert("Thanks for reaching out "+nameField+". We'll be back in touch about your "+selectField+" query via "+emailField+" shortly.");
	}
};
function setList(){
	var weddings=document.getElementById("setListW");
	var festivals=document.getElementById("setListF");
	var selection=document.getElementById("query").value;
	
	if(selection=="wedding"){
		weddings.style.display = "block";
		festivals.style.display = "none";
	}
	else if(selection=="festival"){
		weddings.style.display = "none";
		festivals.style.display = "block";
	}
	else{
		weddings.style.display = "none";
		festivals.style.display = "none";		
	}
}