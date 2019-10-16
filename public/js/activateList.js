function activate(el) {
	console.log("IN FUNCTION");    
    var current = document.querySelector('.active');
    console.log(current);
    if (current) {
    	console.log(current.classList);
        current.classList.remove('active');
        console.log(current.classList);
    }
    el.classList.add('active');
}