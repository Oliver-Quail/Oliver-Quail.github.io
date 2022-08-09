window.onload = function() {

    var BackButton = document.getElementById('BackButton');
    BackButton.addEventListener('click', function(){
        window.location = 'Menu.html';
    });

    var ChatId = window.location.search;
    ChatId = ChatId.split("&")[1].split("=")[1];
    GetMessages();


    var SendButton = document.getElementById("SendButton");
    SendButton.addEventListener("click", function(){

        var TextToSend = document.getElementById("TextToSend");
        if(TextToSend.value == '' ||  TextToSend.value.length > 200) {
            alert('invalid message or mesage is too long');
        }
        else {
            xhttp.open("POST", "API.php?Mode=SendMessage", true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            console.log(TextToSend.value);
            var MessageContents = TextToSend.value;
            xhttp.send("ChatId=" + ChatId + "&MessageText=" + MessageContents);
            GetMessages();
        }
    });

    

}


function GetMessages() {
    var ChatId = window.location.search;
    ChatId = ChatId.split("&")[1].split("=")[1];
    var xhttp =  new XMLHttpRequest();
    xhttp.open("POST", "API.php?Mode=GetMessages", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onload = function() {
        var Messages = document.getElementById("Messages");
        var Data = JSON.parse(this.responseText);
        
        var counter = 0;
        while(counter < Data.length) {
            var MessageText = document.createElement("p");
            MessageText.classList.add("Message");
            if(Data[counter]["Sender"] == 1) {
                MessageText.classList.add("Rec");
            }
            console.log(MessageText.textContent);
            MessageText.textContent = Data[counter]["MessageContents"];
            Messages.appendChild(MessageText);
            counter++;
            console.log(counter);
        }
    } 

    xhttp.send("ChatId="+ChatId); 
}