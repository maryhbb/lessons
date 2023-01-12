function implementMap() {
    Array.prototype.map = function (projectionFunction) {
        const results = [];
        this.forEach(function (itemInArray) {
            // ------------ INSERT CODE HERE! ----------------------------
            // Apply the projectionFunction to each item in the array and add
            // each result to the results array.
            // Note: you can add items to an array with the push() method.
            // ------------ INSERT CODE HERE! ----------------------------
        });
        return results;
    };
}

module.exports = {
    implementMap,
};
