import pattern from "./pat-resourcepolling";

describe("pat-resourcepolling", () => {
    beforeEach(() => {
        document.body.innerHTML = "";
    });

    it("is initialized correctly", async () => {
        document.body.innerHTML = `
            <img src="hello-ok.png" class="pat-resourcepolling" />
        `;

        const el = document.querySelector(".pat-resourcepolling");

        // Dummy test, just tests for not throwing an error.
        expect(() => pattern.init(el)).not.toThrow(Error);
    });
});
