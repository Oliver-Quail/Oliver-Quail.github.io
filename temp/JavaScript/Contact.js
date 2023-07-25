window.onload = function() {
    
    const PhoneNumber = document.getElementById("PhoneNumber");
    const EmailContents = document.getElementById("EmailContents");
    PhoneNumber.style.display = "none";
    
    const PhoneButton = document.getElementById("PhoneButton");
    const EmailButton = document.getElementById("EmailButton");

    PhoneButton.addEventListener("click", function() {
        PhoneNumber.style.display = "block";
        EmailContents.style.display = "none";
    });
    EmailButton.addEventListener("click", function() {
        EmailContents.style.display = "flex";
        PhoneNumber.style.display = "none";
    });none
}