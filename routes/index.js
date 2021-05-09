module.exports = app => {
    const books = require("../controller");
    var router = require("express").Router();

    // Create a new Book
    router.post("/", books.create);

    // Retrieve all Books
    router.get("/", books.findAll);

    // Retrieve a single Book with id
    router.get("/:id", books.findOne);

    // Update a Book with id
    router.put("/:id", books.update);

    // Delete a Book with id
    router.delete("/:id", books.delete);


    // main api endpoint to all routes
    app.use('/api/books', router);
};