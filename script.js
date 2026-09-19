//your JS code here. If required.
let user = document.getElementById("username");
let password = document.getElementById("password");
let checkbox = document.getElementById("checkbox");
let submit = document.getElementById("submit");
let existing = document.getElementById("existing");

let name = localStorage.getItem("user");
if(name){
	existing.style.display="block";
}

submit.addEventListener("click",()=>{
	if(checkbox.checked){
	localStorage.setItem("user",user.value);
	existing.style.display="block";
    }
    else{
	localStorage.clear();
		existing.style.display="none";
    }
	alert("Logged in as " + user.value);
})

existing.addEventListener("click",()=>{
	let name = localStorage.getItem("user");
	alert("logged in as " + name)
})