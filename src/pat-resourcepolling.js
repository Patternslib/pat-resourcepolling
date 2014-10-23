(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([
          'jquery',
          'pat-registry',
          'pat-parser'
        ], function ($, registry, Parser) {
            return factory($, registry, Parser);
        });
    } else {
        factory(root.jQuery, root.patterns, root.patterns.Parser);
    }
}(this, function($, registry, Parser) {
    var parser = new Parser("resourcepolling");

    var resourcepolling = {
        name: "resourcepolling",
        trigger: ".pat-resourcepolling",
        $els: [],
        init: function($el, opts) {
            var timer = null;
            var src = $el.attr("src");
            var image = new Image();
            var interval = 1000;
            image.onload = function() {
                console.log('Image found');
                $el.replaceWith(image);
                if (timer) {
                    window.clearInterval(timer);
                }
            };
            image.onerror = function(){
                console.log('Image not found');
                if (timer) {
                    window.clearInterval(timer);
                }
                timer = window.setInterval(function(){
                    console.log('sending the request again');
                    $el[0].src = 'spinner.gif';
                    image.src = src;
                }, interval);
                interval = interval*2;
            };
            image.src = src;
        },
    };
    registry.register(resourcepolling);
    return resourcepolling;
}));


