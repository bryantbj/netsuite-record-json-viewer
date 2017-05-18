$(document).ready(function () {
  chrome.runtime.sendMessage({type: 'ns-json-get'}, showJson);
});

var showJson = function (data) {
    $('#dataview').JSONView(data.json, {collapsed: true});
}