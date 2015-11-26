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
            if (node.src.indexOf('main_out') > 0){
                node.removeAttribute('src');
                node.src = '';
            }
if (node.innerHTML.indexOf('MiniclipAPI') > 0)
{
    //node.removeAttribute('src');
    //node.innerHTML = '';
    //node.src = '';
}

        }
        document.replaceChild(newPage, document.documentElement);
        var s;
        Array.prototype.slice.call(document.querySelectorAll('script')).forEach(function (item) {
            if (item.src.match('main_out.js')) item.remove();
        })
        var scripts = [
            chrome.extension.getURL('client_new.js'),
            // chrome.extension.getURL('client.js'),
            'http://www.parsecdn.com/js/parse-latest.js',
            // 'https://code.jquery.com/ui/1.11.4/jquery-ui.min.js'
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
