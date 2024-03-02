function highlight() {
    //Write your code here
	let element = document.querySelectorAll("strong");
	// element.classList.add("onmouse")
	element.forEach((ele)=>{
		// ele.style.color="green"
		ele.classList.add("onmouse")
	})

}


function return_normal() {
    //Write your code here
	let element = document.querySelectorAll("strong");
	element.forEach((ele)=>{
		// ele.style.color="black"
		ele.classList.remove("onmouse")
	})
    
}
