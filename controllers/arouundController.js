const mysql = require('../models/index'),
    Around = mysql.Around,
    Mountain = mysql.Mountain,
    sequelize = require("sequelize"),
    Op = sequelize.Op;

exports.searchAroundByAdd = async(req, res) => {
    const searchWord = switchToKorean(req.params.region);
    console.log(searchWord);
    
    Around.findAll({
        where: {
            address: {
                [Op.like]: "%" + searchWord + "%"
            }
        },
        include: [
            {
                model: Mountain,
                as: 'mountain',
                required: true
            }
        ]
    }).then(aroundList => {
        res.render('around', {arounds: aroundList})
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    })
}

exports.searchAroundByName = async (req, res) => {
    const searchWord = req.body.searchWord;
    console.log(searchWord);
    
    Around.findAll({
        include: [
            {
                model: Mountain,
                as: 'mountain',
                required: true,
                where: {
                    name: {
                        [Op.like]: "%" + searchWord + "%"
                    }
                }
            }
        ]
    }).then((aroundList) => {
        res.render('around', {arounds: aroundList});
    }).catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
}

exports.allAround = async (req, res) => {
    Around.findAll({
        include: [
            {
                model: Mountain,
                as: 'mountain',
                required: true,
                attributes: ['name']
            }
        ]
    }).then(aroundList => {
        res.render('around', {arounds: aroundList,
        mountain: {
            name: 'mountain'.name
        }
    });
    }).catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
};