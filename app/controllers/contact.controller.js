exports.create = (req,res) => {
    res.send({messge: "create handler"});
};

exports.findAll = (req,res) => {
    res.send({messge: "findAll handler"});
};

exports.findOne = (req,res) => {
    res.send({messge: "findOne handler"});
};

exports.update = (req,res) => {
    res.send({messge: "update handler"});
};

exports.delete = (req,res) => {
    res.send({messge: "delete handler"});
};

exports.deleteAll = (req,res) => {
    res.send({messge: "deleteAll handler"});
};

exports.findAllFavorite = (req,res) => {
    res.send({messge: "findAllFavorite handler"});
};
