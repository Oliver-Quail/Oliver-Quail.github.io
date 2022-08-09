window.onload = function() {
   DisplayPosts();



   
    
}



function DisplayPosts() {
    var ContentHolder = document.getElementById("ContentHolder");
    var xhttp =  new XMLHttpRequest();
    xhttp.open("POST", "API.php?Mode=GetAdminPosts", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(); 
    xhttp.onload = function() {
        var Data = JSON.parse(this.responseText);
        Counter = 0;
        while(Counter < Data.length){
            var ClassText = '';
            if(Data[Counter]['LikedByUser'] == 1) {
                 ClassText = 'Liked';
            }
            var Post = document.createElement("section");
            Post.classList.add("AdminPost");
            Post.innerHTML = ` <section id="AdminData"> 
            <img id="AdminImage" src="Images/download.jpg"/> 
            <div>
                <p id="AdminName">Name</p>
                <p id="AdminTitle">Administrator</p>
            </div>
            </section>
        
            <h1>Title</h1>
            <p>`+ Data[Counter]['Text'] +`</p>
            <img src="Images/download.jpg"/>`;

            var LikeHolder = document.createElement('section');
            LikeHolder.classList.add(Data[Counter]['LikedByUser']);
            LikeHolder.id = Data[Counter]['PostId'];
            LikeHolder.classList.add('LikeCounter');

            
            LikeHolder.addEventListener('click', function(){
                console.log(this.id);
                var xhttp =  new XMLHttpRequest();
                if(this.classList.contains(1)) {
                    xhttp.open("POST", "API.php?Mode=UnlikePost", true);
                    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhttp.send('PostId='+this.id); 
                }
                else {
                    xhttp.open("POST", "API.php?Mode=LikePost", true);
                    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhttp.send('PostId='+this.id); 
                }
            });
            LikeHolder.innerHTML = `<ion-icon class="`+ ClassText +`" name="thumbs-up"></ion-icon>
            <p class="`+ ClassText +` LikeCount" id="`+ Data[Counter]['PostId'] +`">`+ Data[Counter]['Likes'] +`</p>`;

            ContentHolder.appendChild(Post);
            Post.appendChild(LikeHolder);
            Counter++;
        }
    } 
}