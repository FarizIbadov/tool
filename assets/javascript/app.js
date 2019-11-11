function myFunction() {
    var element = document.getElementById("nav-list");
    element.classList.toggle("active");
}

document.querySelector('#burger').onclick = () =>  myFunction()
