module.exports = (object, defaultValue) => new Proxy(object, {get: (object, key) => key in object ? object[key] : defaultValue})
