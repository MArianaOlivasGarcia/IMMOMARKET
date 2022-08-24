const services = {}

services.sendMail = function(url, config) {

        return fetch(url, config)
            .then(res => res.json())
            .then((res) => {
                return res.status;
            })
            .catch(() => {
                return 500;
            })
    }
    // Format url
services.normalize = (function() {
    var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç"
    var to = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc"
    var mapping = {};

    for (var i = 0, j = from.length; i < j; i++) {
        mapping[from.charAt(i)] = to.charAt(i);
    }

    return function(str) {
        var ret = [];
        for (var i = 0, j = str.length; i < j; i++) {
            var c = str.charAt(i);
            if (Object.prototype.hasOwnProperty.call(str.charAt(i))) {
                ret.push(mapping[c]);
            } else {
                ret.push(c);
            }
        }
        return ret.join('').replace(/[^-A-Za-z0-9]+/g, '-').toLowerCase();
    }
})()
export default services;