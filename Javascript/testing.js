
window.addEventListener("load", function(){
    new JSTesting(true);
});


class JSTesting {
    constructor(Dimensions) {
        if(Dimensions == true) {
            var Body =  document.getElementsByTagName("body")[0];
            var DimensionsElement = document.createElement("p");
            DimensionsElement.style.position = "fixed";
            DimensionsElement.style.right = "0px";
            DimensionsElement.style.bottom = "0px";
            DimensionsElement.style.backgroundColor = "white";
            DimensionsElement.textContent = window.innerWidth + "px X " + window.innerHeight + "px";
            DimensionsElement.style.zIndex = 15;
            DimensionsElement.style.fontSize = "20px";
            
            window.addEventListener("resize", function(){
                DimensionsElement.textContent = window.innerWidth + "px X " + window.innerHeight + "px";
            });
            Body.appendChild(DimensionsElement);
        }
    }
}