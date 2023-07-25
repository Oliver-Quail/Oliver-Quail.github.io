window.onload = function() {

    const DownArrow = document.getElementById("DownArrow");
    const Menu = document.getElementById("Menu");
    const Body = document.querySelectorAll("body")[0];
    const Section = document.getElementsByClassName("UnderContent");
    const CarHolder = document.getElementById("CarHolder");
    let Road = document.getElementById("Road");
    let Content = document.getElementById("Content");
    let MainContent = document.getElementById("MainContent");
    const Car = document.getElementById("Car");
    let ShowingMenu = false;
    
    

    DownArrow.onclick = function() {
        if(!ShowingMenu) {
            Menu.classList.add("Showing");
        }
        else {
            Menu.classList.add("Hiding");
            Menu.classList.remove("Showing");
            Menu.classList.remove("Hiding");
        }
        ShowingMenu = !ShowingMenu;
    }   

    function AdjustRoadSize() {
        //console.log(window.innerWidth);
        if(window.innerWidth > 900) {
            var sum = document.getElementsByClassName("UnderContent")[0].clientHeight +  document.getElementsByClassName("UnderContent")[1].clientHeight +  document.getElementsByClassName("UnderContent")[2].clientHeight +  document.getElementsByClassName("UnderContent")[3].clientHeight + 140;
            Height = sum + "px";
            MainContent.style.height =  Height;
            Road.style.height = sum;
        }
        else {
            MainContent.setAttribute("style", "height: fit-content");

        }
    }

    function AdjustCar() {
        let XOffset = Content.clientWidth + (Road.clientWidth * .052) + window.innerWidth*.1;
        let CarSize = Road.clientWidth * .42;
        XOffset += "px";
        MainContentMarginTop = -1*CarSize + 10;
        MainContentMarginTop += "px";
        CarSize += "px";
        CarHolder.style.marginLeft = XOffset;
        Car.style.fontSize = CarSize;
        MainContent.style.marginTop = MainContentMarginTop;

    }


    AdjustRoadSize();
    AdjustCar();
    window.addEventListener("resize", function(){
        AdjustRoadSize();
        AdjustCar();
    });

}