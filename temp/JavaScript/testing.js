
window.addEventListener("load", function(){
    let testing = new JSTesting(true);
    window.addEventListener("resize", function(){
        testing.DisplayText();
        //DimensionsElement.textContent = window.innerWidth + "px X " + window.innerHeight + "px";
    });
});


class JSTesting {
    constructor(Dimensions) {
        if(Dimensions == true) {
            let Body =  document.getElementsByTagName("body")[0];
            this.DimensionsElement = document.createElement("p");
            this.DimensionsElement.style.position = "fixed";
            this.DimensionsElement.style.right = "0px";
            this.DimensionsElement.style.bottom = "0px";
            this.DimensionsElement.style.backgroundColor = "white";
            this.DimensionsElement.style.fontWeight = "bold";
            this.DisplayText();
            //DimensionsElement.textContent = window.innerWidth + "px X " + window.innerHeight + "px";
            this.DimensionsElement.style.zIndex = 15;
            this.DimensionsElement.style.fontSize = "20px";
            
            
            Body.appendChild(this.DimensionsElement);
        }
    }
    DisplayText() {
        if(window.innerWidth <= 500) {
            this.DimensionsElement.textContent = "Device style: Phone";
        }
        else if (window.innerWidth <= 900) {
            this.DimensionsElement.textContent = "Device style: Tablet";
        }
        else {
            this.DimensionsElement.textContent = "Device style: Computer / Laptop"; 
        }
    }
}

