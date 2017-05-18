chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    switch (msg.type) {
        case "ns-json-new":
            console.log(msg);
            storeAndDisplayJson(msg);
            break;
    }
    return true;
});

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    switch (msg.type) {
        case "ns-json-get":
            data = chrome.storage.local.get('json', function (data) {
                sendResponse(data);
            });
            break;
    }
    return true;
});

chrome.browserAction.onClicked.addListener (function (tab) {
    chrome.tabs.executeScript(null, {
        file: 'click.js'
    });
});

var storeAndDisplayJson = function (msg) {
    chrome.storage.local.set({
        json: msg.data
    });

    chrome.tabs.create({url: chrome.extension.getURL('popup.html')});
}


