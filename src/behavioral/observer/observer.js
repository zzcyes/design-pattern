function Observer() {
    this.events = {};
}

Observer.prototype.listen = function (key, fn) {
    if (!this.events[key]) {
        this.events[key] = [fn]
    } else {
        this.events[key].push(fn)
    }
}

Observer.prototype.trigger = function () {
    var key = Array.prototype.shift.call(arguments),
        fns = this.events[key];
    if (!fns || fns.length === 0) {
        return false;
    }
    for (var i = 0, fn; fn = fns[i++];) {
        fn.apply(this, arguments);
    }
}

Observer.prototype.remove = function (key, fn) {
    var fns = this.events[key];
    if (!fns) {
        return false;
    }
    if (!fn) {
        fns && (fns.length = 0);
    } else {
        for (var i = fns.length - 1; i >= 0; i--) {
            var _fn = fns[i];
            if (_fn === fn) {
                fns.splice(i, 1);
            }
        }
    }
}

module.exports = Observer;
