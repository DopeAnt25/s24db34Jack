//API for our Resources
exports.api = function(req, res){
    res.write('[');
res.write('{"resource":"drones", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};