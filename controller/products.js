
const fetch = (req,res) =>{
    res.status(200).json({"message":"This is get request"})
}

const create = (req,res)=>{
    res.status(200).json({"message":"This is Post request"})
}

const update = (req,res) =>{
    res.status(200).json({"message":"This is put request"})
}

const remove = (req,res) =>{
    res.status(200).json({"message":"This is put remove"})
}

module.exports = {
    fetch,
    create,
    update,
    remove
}