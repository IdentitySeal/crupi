
const Users = require('../model');

// Create a Users
exports.create = async (req, res) => {

    const user = new Users(req.body)
    try {
        await user.save()
        res.status(201).send({ message:"User is created Sucessfully", data: user})
    }
    catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while creating the User details.",});
    }

};

// Get all Users

exports.findAll = async (req, res) => {
    try {

        const getAllUsers = await Users.find();
        if (!getAllUsers)
            return res.status(404).send()
        res.status(200).send({ message: "List of is All Users", data: getAllUsers})
    }
    catch (err) {
        res.status(400).send({ message: err.message || "error while trying to retrieve all Users"})
    };
}

// Find a User by the id in the request

exports.findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const getOneUser = await Users.findById(id)
        if (!getOneUser)
            return res.status(404).send()
        res.status(200).send({ message: `Users with id:${id} is provided Here`, data: getOneUser})
    }
    catch (err) {
        res.status(500).send({ message: err.message || "Error retrieving the User"});
    }
};

// Update a User by the id in the request
exports.update = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send({ message: "Data to updated can not be empty!"})
        }
        const id = req.params.id;

        const updateUsersById = await Users.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        
        if (!updateUsersById)
            res.status(404).send({ message: `Cannot update User with id=${id}. Maybe the User cannot be found!`});
        res.send({ message: `User with ${id} was updated successfully.`, data: updateUsersById });

    }
    catch (err) {
        res.status(500).send({
            message: err.message || "Error updating User with id=" + id
        });
    }
}






// Delete a User with the specified id in the request
exports.delete = async (req, res) => {
    try {
        const id = req.params.id;

        const deleteUsersById = await Users.findByIdAndRemove(id, {
            useFindAndModify: false

        })
        if (!deleteUsersById)
            res.status(404).send({
                message: `Cannot delete User with id=${id}. Maybe User was not found!`
            });
        res.send({ message: `User with id ${id} was deleted successfully!`, data: deleteUsersById });

    }
    catch (err) {
        res.status(500).send({ message: err.message ||"Could not delete User with id=" + id });
    }
};
