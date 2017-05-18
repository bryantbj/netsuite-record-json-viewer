function main () {
    var rec = nlapiLoadRecord(
        nlapiGetRecordType(),
        nlapiGetRecordId()
    );
    var json = JSON.stringify(rec);
    document.dispatchEvent(new CustomEvent('ns-json', {
        detail: json
    }));
}

var script = document.createElement('script');
script.appendChild(document.createTextNode('(' + main + ')();'));
(document.body || document.head || document.documentElement).appendChild(script);
