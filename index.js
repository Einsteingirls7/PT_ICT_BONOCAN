function sendMail(){
	var params = {
		name: document.getElementById("name").value ,
		email: document.getElementById("email").value ,
		message: document.getElementById("message").value ,
	
	};

const serviceID ="service_yuevtph";
const templateID ="service_yuevtph";

emailjs.send(serviceID,templateID,params)
.then(
	res =>{
		document.getElementById("name").value ="";
		document.getElementById("email").value ="";
		document.getElementById("message").value ="";
		console.log(res);
		alert("Thank You Elsa Your Message For Me Has Been Sent Successfully");
	})
.catch(err=>console.log(err));
}
