module.exports = (object, defaultValue) => new Proxy(object, {get: (object, key) => typeof object[key] == 'undefined' ? defaultValue : object[key]})
