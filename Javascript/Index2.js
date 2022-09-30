window.onload = function() {

    var B_Menu = document.getElementById("B_Menu");
    var NavBar = document.getElementById("NavBar");
    var L_Menu = document.getElementsByClassName("L_Menu");
    B_Menu.addEventListener("click", function(){
        if(NavBar.classList.contains("Grow")) {
            NavBar.classList.add("Shrink");
            NavBar.classList.remove("Grow");
            //NavBar.style.height = "100vh";
        }
        else {
            NavBar.classList.add("Grow");
            NavBar.classList.remove("Shrink");
        }
    });

    var LinkFunction =  function() {
        window.location = this.href;
        NavBar.classList.remove("Grow");
        NavBar.classList.add("Shrink");
    }

    for(var Counter = 0; Counter < L_Menu.length; Counter++) {
        L_Menu[Counter].addEventListener("click", LinkFunction, false);
    }
    showSlides(slideIndex);
}




    let slideIndex = 1;

    // Next/previous controls
    function plusSlides(n) {
        console.log("yeah");
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
        
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        //dots[slideIndex-1].className += " active";
}
