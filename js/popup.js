function clickHandler() {
    var message = {
        "title": "Proteção",
        "contentmsg": "Você está protegido!"
    }

    var options = {
        type: "basic",
        title: message.title,
        message: message.contentmsg,
        iconUrl: "img/icon.png"
    }
    chrome.notifications.create("check_protection", options, function () { });
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("checkBtn").addEventListener("click", clickHandler);
});