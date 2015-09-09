if (window.location.href.indexOf('/agar.io/') + 1) {

    window.stop();
    document.documentElement.innerHTML = 'Initialize plugin...';

    var xhr = new XMLHttpRequest();

    xhr.open('GET', window.location.href, true);

    xhr.onerror = function () {
        document.documentElement.innerHTML = 'Error getting Agar.io client';
    };

    xhr.onload = function () {
        var page = document.implementation.createHTMLDocument("");
        page.documentElement.innerHTML = this.responseText;

        var newPage = document.importNode(page.documentElement, true);

        var nodeList = newPage.querySelectorAll('script');
        for (var i = 0; i < nodeList.length; ++i) {
            var node = nodeList[i];
            if (node.innerText.indexOf('POSITIVE_INFINITY') > 0){
                node.removeAttribute('src');
                node.innerText = '';
            }
        }
        document.replaceChild(newPage, document.documentElement);
        var s;
        var scripts = [
            chrome.extension.getURL('client.js')
        ];
        for (i = 0; i < scripts.length; ++i) {
            s = document.createElement('SCRIPT');
            s.charset = 'UTF-8';
            s.src = scripts[i];
            document.getElementsByTagName('HEAD')[0].appendChild(s);
        }
    }
    xhr.send();
}
