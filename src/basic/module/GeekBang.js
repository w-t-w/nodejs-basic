const EventEmitter = require('events').EventEmitter;

class GeekBang extends EventEmitter {
    constructor() {
        super();
        setInterval(function () {
            this.emit("lesson", {price: Math.floor(Math.random() * 100)});
        }, 800);
    }
}

const geekBang = new GeekBang();

module.exports = geekBang;
