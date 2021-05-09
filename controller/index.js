// const mongoose = require("mongoose");
// Book = mongoose.model('Books')

const Book = require('../model');

// Create a book
exports.create = async (req, res) => {

    const book = new Book(req.body)
    try {
        await book.save()
        res.status(201).send({message:"Book is created Sucessfully", data: book})
    }
    catch (err) {
        res.status(500).send({message: err.message || "Some error occurred while creating the Book details.",});
    }

};

// Get all Books

exports.findAll = async (req, res) => {
    try {

        const getAllBooks = await Book.find();
        if (!getAllBooks)
            return res.status(404).send()
        res.status(200).send({ message: "List of is All Books", data: getAllBooks})
    }
    catch (err) {
        res.status(400).send({ message: err.message || "error while trying to retrieve all books"})
    };
}

// Find a Book by the id in the request

exports.findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const getOneBook = await Book.findById(id)
        if (!getOneBook)
            return res.status(404).send()
        res.status(200).send({message: `Book with id:${id} is provided Here`, data: getOneBook})
    }
    catch (err) {
        res.status(500).send({message:err.message || "Error retrieving the Book"});
    }
};

// Update a Book by the id in the request
exports.update = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send({ message: "Data to updated can not be empty!"})
        }
        const id = req.params.id;

        const updateBookById = await Book.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        
        if (!updateBookById)
            res.status(404).send({ message: `Cannot update Book with id=${id}. Maybe the Book cannot be found!`});
        res.send({ message: `Book with ${id} was updated successfully.`, data: updateBookById });

    }
    catch (err) {
        res.status(500).send({
            message: err.message || "Error updating Book with id=" + id
        });
    }
}






// Delete a Book with the specified id in the request
exports.delete = async (req, res) => {
    try {
        const id = req.params.id;

        const deleteBookById = await Book.findByIdAndRemove(id, {
            useFindAndModify: false

        })
        if (!deleteBookById)
            res.status(404).send({
                message: `Cannot delete Book with id=${id}. Maybe Book was not found!`
            });
        res.send({ message: `Book with id ${id} was deleted successfully!`,data : deleteBookById });

    }
    catch (err) {
        res.status(500).send({ message: err.message ||"Could not delete Book with id=" + id });
    }
};
