var Task = (function () {
    function Task(userId, customerId, providerId, date, title, notes, price, id, color) {
        this.userId = userId;
        this.customerId = customerId;
        this.providerId = providerId;
        this.date = date;
        this.title = title;
        this.notes = notes;
        this.price = price;
        this.id = id;
        this.color = color;
    }
    return Task;
})();
exports.Task = Task;
//# sourceMappingURL=task.js.map