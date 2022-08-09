var parallax = require('rallax');

window.onload = function() {
    var ParaBackground1 = document.getElementById("ParaBackground1");
    var ParaBackground2 = document.getElementById("ParaBackground2");
    var ParaBackground3 = document.getElementById("ParaBackground3");
    var ParaBackground4 = document.getElementById("ParaBackground4");
    var ParaBackgrounds = document.getElementsByClassName("ArticleParaBackground");
    new simpleParallax(ParaBackgrounds);

    const options = { speed: 0.4 }
    const parallax = rallax('.ArticleParaBackground', options);

    


}