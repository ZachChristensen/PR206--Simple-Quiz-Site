var myapp = {},
question = document.getElementById("question"),
btn1 = document.getElementById("butt1"),
btn2 = document.getElementById("butt2"),
btn3 = document.getElementById("butt3"),
btn4 = document.getElementById("butt4");


function updateQuestion() {
	question.innerHTML  = "Hello World!";
}

btn1.addEventListener("click", updateQuestion);