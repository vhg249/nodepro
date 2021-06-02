module.exports = {
    check : async function check(req, res, next) {
        if (req.params.id == "Huong")
        {
            next()
        }
        else if (req.params.id == "Thao") {
            res.json({mess: "Are you hacker"})
        }
        else {
            next()
        }
    },
    
    getUserId : async (req, res) => {
        var id = req.params.id
        res.json({ID: id})
    }
}