// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
System.register([], function(exports_1) {
    var Utils;
    return {
        setters:[],
        execute: function() {
            (function (Utils) {
                function uuid() {
                    var i, random;
                    var uuid = '';
                    for (i = 0; i < 32; i++) {
                        random = Math.random() * 16 | 0;
                        if (i === 8 || i === 12 || i === 16 || i === 20) {
                            uuid += '-';
                        }
                        uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
                            .toString(16);
                    }
                    return uuid;
                }
                Utils.uuid = uuid;
                function store(namespace, data) {
                    if (data) {
                        return localStorage.setItem(namespace, JSON.stringify(data));
                    }
                    var store = localStorage.getItem(namespace);
                    return (store && JSON.parse(store)) || [];
                }
                Utils.store = store;
                function extend() {
                    var objects = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        objects[_i - 0] = arguments[_i];
                    }
                    var newObj = {};
                    for (var i = 0; i < objects.length; i++) {
                        var obj = objects[i];
                        for (var key in obj) {
                            if (obj.hasOwnProperty(key)) {
                                newObj[key] = obj[key];
                            }
                        }
                    }
                    return newObj;
                }
                Utils.extend = extend;
            })(Utils = Utils || (Utils = {}));
            exports_1("Utils", Utils);
        }
    }
});
