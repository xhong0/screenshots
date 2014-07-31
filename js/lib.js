/**
 * @fileOverview 自定义所需的库
 * @author xhong
 */

if (typeof window.xh === 'undefined') {
    window.xhong = {};
}

xhong.$ = function(id) {
    return document.getElementById(id);
}
xhong.event = {

    addHandler: function(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },

    removeHandler: function(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    
    getTarget: function(event) {
        return event.target || event.srcElement;
    },

    getEvent: function(event) {
        return event ? event : window.event;
    }
};