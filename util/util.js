/**
 * Created by jay on 2016-9-28.
 */
var crypto = require('crypto');
module.exports = {
    extend: function (target, source, flag) {
        for (var key in source) {
            if (source.hasOwnProperty(key))
                flag ?
                    (target[key] = source[key]) :
                    (target[key] === void 0 && (target[key] = source[key]));
        }
        return target;
    },
    //MD5加密
    MD5: function (password) {
        var md5 = crypto.createHash('md5');
        md5.update(password);
        return md5.digest('hex');
    }
};