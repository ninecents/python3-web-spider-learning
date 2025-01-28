window = global;

Object.defineProperty(window, "Window", {
    get: function () {
        return Window
    }, enumerable: false, configurable: true
});

window.Window