var Drone = require('../models/drone');

//List of all Drones
exports.drone_view_all_Page = async function(req, res) {
    try{
        theDrones = await Drone.find();
        res.render('drones', {title: 'Drone Search Results', results: theDrones});
    }catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`)
    }
};

//for a specific Drone
exports.drone_detail = async function(req, res){
    console.log("Detail" + req.params.id)
    try {
        result = await Drone.findById(req.params.id)
        res.sends(result)
    }catch(err){
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found}`);
    }
};

//handle cosumte create on post
exports.drone_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Drone();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"model":"goat", "purpose":"Spying", "flight_range":8}
    document.model = req.body.model;
    document.purpose = req.body.purpose;
    document.flight_range = req.body.flight_range;
    try{
        let result = await document.save();
        res.send(result);
    }catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`)
    }
};

// handle Drone delete from on DELETE
exports.drone_delete = function(req, res){
    res.send('NOT IMPLEMENTED: Drone Delete DELETE '+ req.params.id);
};

//handle drone update from on PUT
exports.drone_update_put = function(req, res){
    res.send('NOT IMPLEMENTED: Drone update PUT' + req.params.id);
};