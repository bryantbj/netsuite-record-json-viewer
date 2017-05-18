document.addEventListener('ns-json', function (event) {
    var data = event.detail;
    chrome.runtime.sendMessage({
        type: 'ns-json-new',
        data: data
    });
}, true);


