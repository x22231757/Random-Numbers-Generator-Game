function checkNumber()
{
	//Initialize the Array of size 5
	var randomArray = [0,0,0,0,0];
	
	//Input random int to the array
	for (let i = 0; i<randomArray.length; i++){
		randomArray[i] = Math.floor(Math.random() * 10) + 1;
	}
	
	
	//Get user data
	var userNumber = parseInt(document.getElementById("user_number").value);
	
	//Add if statemnts to validate the input
	if(userNumber<0){
		document.getElementById("submit_button").style.visibility = "hidden";
		document.getElementById("content").innerHTML +="Please enter a valid integer number (0-10)";
		document.getElementById("content").innerHTML +="<br></br><button onClick='window.location.reload()'>Play Again</button>";
		return
	}else if(userNumber>10){
		document.getElementById("submit_button").style.visibility = "hidden";
		document.getElementById("content").innerHTML +="Please enter a valid integer number (0-10)";
		document.getElementById("content").innerHTML +="<br></br><button onClick='window.location.reload()'>Play Again</button>";
		return
	}
	
	//Count how many times userNumber appear within the random array
	var sum = 0;
	
	for (let i = 0; i<randomArray.length; i++){
		if (randomArray[i] == userNumber){
			sum =sum+ 1;
		}
	}
	
	//Output how many time userNumber appear in the array
	document.getElementById("submit_button").style.visibility = "hidden";
	document.getElementById("content").innerHTML +="Your number appears in the array " + sum + " times.";
	document.getElementById("content").innerHTML +="<br></br><button onClick='window.location.reload()'>Play Again</button>";
}