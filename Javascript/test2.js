var Description = ["", "This was a project built for a applied computing SAC (school assessed courswork) for my final year of school. In the project I worked with a client, applied the Problem solving methodology and built an API to service a high fidelity for a future mobile application.", "This project involved presenting data collected by students during a student run waste audit and presnt the data gathered to the school. Additionally it uses a desion tree to allocate jobs to and manage students. Current in use by Kardinia International College", "This was a project which my friends and i built for fun. It had the goal to replace the currently in use study planners. On this project I learnt how to lead a small team of developers and leveraging solution architectures, version control software and other technologies to lead a team and build a product."];


window.onload = function() {
    var Prev = document.getElementById("Prev");
    var Next = document.getElementById("Next");


    Prev.addEventListener("click", function(){
        plusSlides(-1);
    });
    Next.addEventListener("click", function(){
        plusSlides(1);
    });

    var DescriptionText = document.getElementById("UnderText");
    DescriptionText.textContent = Description[0];
    
    let slideIndex = 1;


    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    /*function currentSlide(n) {
        showSlides(slideIndex = n);
        
    }*/

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("Slide");
        let dots = document.getElementsByClassName("Dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
     
        slides[slideIndex-1].style.display = "block";
        DescriptionText.textContent = Description[slideIndex];
}



    showSlides(slideIndex);
}


