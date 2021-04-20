import "jquery"; // still needs jQuery for replaceWith
import Base from "@patternslib/patternslib/src/core/base";

export default Base.extend({
    name: "resourcepolling",
    trigger: ".pat-resourcepolling",

    init() {
        const src = this.el.getAttribute("src");
        const image = new Image();
        let timer = null;
        let interval = 1000;

        image.onload = () => {
            console.log("Image found");
            this.$el.replaceWith(image);
            if (timer) {
                window.clearInterval(timer);
            }
        };
        image.onerror = () => {
            console.log("Image not found");
            if (timer) {
                window.clearInterval(timer);
            }
            timer = window.setInterval(() => {
                console.log("sending the request again");
                this.el.src = "spinner.gif";
                image.src = src;
            }, interval);
            interval = interval * 2;
        };
        image.src = src;
    },
});
