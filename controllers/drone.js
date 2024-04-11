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
        res.send(result)
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
exports.drone_delete = async function(req, res){
    console.log("delete" + req.params.id)
    try{
        result = await Drone.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    }catch(err){
        res.status(500)
        res.send(`{"error": Error Deleting ${err}}`);
    }
};

//handle drone update from on PUT
exports.drone_update_put = async function(req, res){
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try{
        let toUpdate = await Drone.findById(req.params.id)
        // do update of properties model, purpose, flight_range
        if(req.body.model) toUpdate.model = req.body.model;
        if(req.body.purpose) toUpdate.purpose = req.body.purpose;
        if(req.body.flight_range) toUpdate.flight_range = req.body.flight_range;
        let result = await toUpdate.save();
        console.log("Success " + result)
        res.send(result)
    }catch(err){
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}}failed`);
    }
};

//Handle a show one view with id specified by query
exports.drone_view_one_Page = async function(req, res){
    console.log("single view for id "+ req.query.id)
    try{
        result = await Drone.findById(req.query.id)
        res.render('dronedetail',
    {title:'Drone Detail', toShow: result});
    }catch(err){
        res.status(500)
        res.send(`{"error": ${err}}`)
    }
};

// Handle building the view for creating a drone.
// No body, no in path parameter, no query.
// Does not need to be async
exports.drone_create_Page = function(req,res){
    console.log("create view")
    try{
        res.render('dronecreate',{title: 'Drone Create'});
    }catch(err){
        res.status(500)
        res.send(`{"error": ${err}}`);
    }
};

// Handle building the view for updating a drone.
// query provides the id
exports.drone_update_Page = async function(req, res){
    console.log("update view for item"+ req.query.id)
    try{
        let result = await Drone.findById(req.query.id)
        res.render('droneupdate',{ title: 'Drone Update', toShow: result});
    }catch(err){
        res.status(500)
        res.send(`{"error": ${err}}`);
    }
};

exports.drone_delete_Page = async function(req,res){
    console.log("Delete view for id" + req.query.id)
    try{
        result = await Drone.findById(req.query.id)
        res.render('dronedelete', {title: 'Drone Delete', toShow:result})
    }catch(err){
        res.status(500)
        res.send(`{"error": ${err}}`);
    }
}