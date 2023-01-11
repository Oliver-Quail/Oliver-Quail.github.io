window.onload = function() {
    var ActiveSkillText = document.getElementById("SkillDescription").children;
    console.log(ActiveSkillText);
    var Roles = document.getElementById("Roles");
    var RolesText = ["Web Developer", "Programmer", "Graphic Designer"];
    var RolesOutputText = "";
    var CounterLength = 0;
    var Counter = 0;
    var RolesTimer = setInterval(() => {
        if(CounterLength < RolesText[Counter].length) {
            RolesOutputText += RolesText[Counter][CounterLength];
            Roles.innerHTML = RolesOutputText;
            CounterLength++;
        }
        else if (Counter == 2) {
            clearInterval(RolesTimer);
        }
        else {
            RolesOutputText += "<br/>";
            CounterLength = 0;
            Counter++;
        }
    }, 75);

    var MenuButton = document.getElementById("MenuButton");
    var Menu = document.getElementById("MenuBar");
    var MenuShown = 0;
    MenuButton.addEventListener("click", function(){
        if(MenuShown == 0) {
            MenuShown = 1;
            //Menu.classList.remove("HiddingMenu");
            //Menu.classList.remove("ShowMenu");
            Menu.classList.add("ShowMenu");
            Menu.addEventListener("animationend", function(){
                Menu.classList.add("ShownMenu");
            });
        }
        else {
            MenuShown = 0;
            Menu.classList.add("HiddingMenu");
            Menu.addEventListener("animationend", function(){
                Menu.classList.remove("HiddingMenu");
                Menu.classList.remove("ShownMenu");
            });
            Menu.classList.remove("ShowMenu");          
        }
    });

    CreateFluxList(document.getElementById("SkillsList"), document.getElementById("SkillDescription"));
    CreateFluxList(document.getElementById("ContactTitles"), document.getElementById("ContactPanel"));

    var options = {
        threshold:1,
        rootMargin: "-100px",

    }

    var TextOptions = {
        threshold:1,
        rootMargin: "0px"
    }

    const ExperienceObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                console.log(entry.target);
                entry.target.classList.add("Active");
                observer.unobserve(entry.target);
            }
        });
       
    }, options);

    const TextObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                console.log(entry.target);
                entry.target.classList.add("Active");
                observer.unobserve(entry.target);
            }
        });
       
    }, TextOptions);

    const ExperienceTitles = document.getElementsByClassName("RollIn");
    const ExperienceText = document.getElementsByClassName("FadeIn");
    const ArticleTitles = document.getElementsByClassName("ArticleTitle");
    Object.keys(ExperienceTitles).forEach(Title => {
        ExperienceObserver.observe(ExperienceTitles[Title]);
    });
    Object.keys(ExperienceText).forEach(Title => {
        TextObserver.observe(ExperienceText[Title]);
    });
    Object.keys(ArticleTitles).forEach(Title => {
        ExperienceObserver.observe(ArticleTitles[Title]);
    });

}

function CreateFluxList(TitlesHolder, ContentHolder) {
    var TitlesArray = TitlesHolder.children;
    var ContentsArray = ContentHolder.children;
    console.log(TitlesArray);
    console.log(TitlesArray.length);
    if(TitlesArray.length != ContentsArray.length) {
        console.error("The number of Titles does not match the number of contents pannels");
        return;
    }
    console.log("--------");

    Object.keys(TitlesArray).forEach(Key => {
        console.log(TitlesArray[Key]);
        var CurrentPanel =  ContentsArray[Key];

        TitlesArray[Key].addEventListener("click", function(){
            var ContentCounter = 0;
            while(ContentCounter < ContentsArray.length) {
                ContentsArray[ContentCounter].removeAttribute("class");
                TitlesArray[ContentCounter].removeAttribute("class");
                ContentCounter++;
            }
            CurrentPanel.classList.add("ActivePanel");
            this.classList.add("ActiveTitle");

            if(window.window < 600) {
                window.location = CurrentPanel;
            }
        });
        
    });

}

function AdvanceFux(TitlesHolder, ContentHolder, Counter) {
    var TitlesArray = TitlesHolder.children;
    var ContentsArray = ContentHolder.children;

    Object.keys(TitlesArray).forEach(Element => {
        
    });

}