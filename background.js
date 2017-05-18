// Received from content.js
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    switch (msg.type) {
        case "ns-json-new":
            storeAndDisplayJson(msg);
            break;
    }
    return true;
});

// Received from popup.js
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

// Injects click.js into Netsuite page for NS API context
chrome.browserAction.onClicked.addListener (function (tab) {
    chrome.tabs.executeScript(null, {
        file: 'click.js'
    });
});

// Saves the json and creates a new tab
var storeAndDisplayJson = function (msg) {
    chrome.storage.local.set({
        json: msg.data
    });

    chrome.tabs.query({active: true}, function (tabs) {
        var index = tabs[0].index;
        chrome.tabs.create({url: chrome.extension.getURL('popup.html'), index: index + 1});
    });
}


