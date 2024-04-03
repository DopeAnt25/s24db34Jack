var Drone = require('../models/drone');

//List of all Drones
exports.drone_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Drone list');
};

//for a specific Drone
exports.drone_detail = function(req, res){
    res.send('NOT IMPLEMENTED: Drone Detail: ' + req.params.id);
};

//handle cosumte create on post
exports.drone_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Drone create post');
};

// handle Drone delete from on DELETE
exports.drone_delete = function(req, res){
    res.send('NOT IMPLEMENTED: Drone Delete DELETE '+ req.params.id);
};

//handle drone update from on PUT
exports.drone_update_put = function(req, res){
    res.send('NOT IMPLEMENTED: Drone update PUT' + req.params.id);
};