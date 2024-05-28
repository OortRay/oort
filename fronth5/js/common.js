window.util = window.util || {};
(function () {

    util.formatAlert = function () {
        window.alert = function (name) {
            var iframe = document.createElement("IFRAME");
            iframe.name = 'format';
            iframe.style.display = "none";
            iframe.setAttribute("src", 'data:text/plain,');
            document.documentElement.appendChild(iframe);
            window.frames['format'].window.alert(name);
            iframe.parentNode.removeChild(iframe);
        };

        window.confirm = function (message) {
            var iframe = document.createElement("IFRAME");
            iframe.name = 'format';
            iframe.style.display = "none";
            iframe.setAttribute("src", 'data:text/plain,');
            document.documentElement.appendChild(iframe);
            var result = window.frames['format'].window.confirm(message);
            iframe.parentNode.removeChild(iframe);
            return result;
        }
    }
})();