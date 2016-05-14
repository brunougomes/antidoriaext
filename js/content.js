//debugger;

window.addEventListener("load", callme, false);

function callme(evt) {
    
    console.log("It's a trap!!!");

    var badwordstosearch = ["sauna", "gay", "lésbica", "lesbica"]
    var find = false;
    
    for (i = 0; i < badwordstosearch.length; i++) {
        if (window.location.href.search(badwordstosearch[i]) >= 0) {
            find = true;
        }
    }

    if (find) {
        images = document.getElementsByClassName("rg_i");

        for (i = 0; i < images.length; i++) {
            images[i].src = "http://www.reactionface.info/sites/default/files/images/1287666826226.png";
            images[i].style.backgroundColor = "red";
        }

        setTimeout(function () {
            window.location.replace(chrome.extension.getURL("surprise.html"));
        }, 3000);
        
    }
}