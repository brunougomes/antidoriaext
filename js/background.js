function onloadExtension() {
    var message = {
        "title": "AntiDoria",
        "contentmsg": "A extensão está funcionando."
    }

    var options = {
        type: "basic",
        title: message.title,
        message: message.contentmsg,
        iconUrl: "img/icon.png"
    }
    chrome.notifications.create("start_extension", options, function () { });
}

document.addEventListener("DOMContentLoaded", function () {
    onloadExtension();
});