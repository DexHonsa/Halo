'use strict';
// Import
var config = require(__dirname+'/../config.js');
var thinky = require('thinky')(config);
var r = thinky.r;
var type = thinky.type;
var Query = thinky.Query;
var Validator = require('Validator');
var jwt = require('jsonwebtoken');

// Create the models
// Note: if we don't provide the field date, the default function will be called


var User = thinky.createModel('User', {
    id: type.string(),
    first_name: type.string(),
    last_name: type.string(),
    email: type.string(),
    password: type.string(),
    title: type.string(),
    phone: type.string(),
    address: type.string(),
    city: type.string(),
    type: type.string(),
    state: type.string(),
    zip: type.string(),
    status: type.string(),
    user_img_path: type.string(),
    role_id: type.string(),
    role: type.string(),
    created_at: type.date().default(r.now())
    
});





// Specify the relations

// A Client has one User that we will keep in the field `User`.
//Client.belongsTo(User, "User", "UserId", "id");
//User.hasMany(Client, "Client", "id", "UserId");

// A Client has multiple Roles that we will keep in the field `Roles`.
//Client.hasMany(Role, "Roles", "id", "ClientId");
//Role.belongsTo(Client, "Client", "ClientId", "id");


// Make sure that an index on date is available

User.ensureIndex("email");


function validateInput(data){
    var errors = {};
    if(Validator.isNull(data.email)){
        errors.email = 'This field is required';
    }
    if(Validator.isNull(data.email)){
        errors.password = 'This field is required';
    }

}

exports.LoginCheck = function(req, res){
    const { username, password } = req.body;


    User.filter({'email' : username, 'password' : password}).run().then(function(User){
        if(User.length >= 1){
            const token = jwt.sign({
                id: User[0].id,
                email: User[0].email
            }, config.jwtSecret);


            res.json({
                token
             })

        }else{
            res.status(401).json({errors: {form : "Invalid Credentials" } });
        }
        
    }).error(handleError(res));
   


};



// Retrieve all Users
exports.Users = function (req, res) {
    User.orderBy({index: 'first_name'}).run().then(function(User) {
        res.json({
            User: User
        });
    }).error(handleError(res));
};


// Retrieve one User
exports.User = function (req, res) {
    var id = req.params.id;

    User.get(id).run().then(function(User) {
        res.json({
            User: User
        });
    }).error(handleError(res));
};


// Save an User in the database
exports.addUser = function (req, res) {
    User.save(req.body).then(function(result) {
        res.json(result);
    }).error(handleError(res));
};


// Delete a User
exports.deleteUser = function (req, res) {
    var id = req.params.id;

    // Delete a User 
    User.get(id).run().then(function(User) {
        User.delete().then(function(User) {
            res.json({
                result: User
            })
        }).error(handleError(res));
    }).error(handleError(res));
};


// Edit a User
exports.editUser = function (req, res) {
    // Update an User
    User.get(req.body.id).update(req.body).run().then(function(User) {
        res.json({
            User: User
        })
    }).error(handleError(res));
};




function handleError(res) {
    return function(error) {
        console.log(error.message);
        return res.send(500, {error: error.message});
    }
}
