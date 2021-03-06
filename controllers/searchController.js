const mysql = require('../models/index'),
    Mountain = mysql.Mountain,
    sequelize = require("sequelize"),
    Op = sequelize.Op;

exports.searchMountain = async (req, res) => {
    const searchWord = req.body.searchWord.substr(0, 2);
    console.log(searchWord);
    
    Mountain.findAll({
        where: {
            [Op.or] : {
            name: {
                [Op.like]: "%" + searchWord + "%",
            },
            address: {
                [Op.like]: "%" + searchWord + "%",
            }
        }
        }

    }).then((mountainList) => {
        res.render('search', {mountains: mountainList});
        /*
        const userId = req.session.id;
    
        Bookmark.findAll({
            where: {
                id : userId
            },
            include: [
                {
                    model: Mountain,
                   as: 'mountain',
                   required: true
               }
            ]
        }).then((bookmarkList) => {
            res.render('search', {
                mountains: mountainList,
                bookmarks: bookmarkList
            })
        }).catch(err => {
        res.status(500).send({
            message: err.message
        })
        */
    })
}

exports.searchMountainByName = async (req, res) => {
    const searchWord = req.body.searchWord.substr(0, 2);
    console.log(searchWord);
    
    Mountain.findAll({
        where: {
            name: {
                [Op.like]: "%" + searchWord + "%"
            }
        }
    }).then((mountainList) => {
        res.render('search', {mountains: mountainList});
        /*
        const userId = req.session.id;
    
        Bookmark.findAll({
            where: {
                id : userId
            },
            include: [
                {
                    model: Mountain,
                   as: 'mountain',
                   required: true
               }
            ]
        }).then((bookmarkList) => {
            res.render('search', {
                mountains: mountainList,
                bookmarks: bookmarkList
            })
        }).catch(err => {
        res.status(500).send({
            message: err.message
        })
        */
    })
}

exports.searchMountainByAdd = async (req, res) => {
    const searchWord = req.body.searchWord.substr(0, 2);
    console.log(searchWord);
    
    Mountain.findAll({
        where: {
            address: {
                [Op.like]: "%" + searchWord + "%"
            }
        }

    }).then((mountainList) => {
        res.render('search', {mountains: mountainList});
        /*
        const userId = req.session.id;
    
        Bookmark.findAll({
            where: {
                id : userId
            },
            include: [
                {
                    model: Mountain,
                   as: 'mountain',
                   required: true
               }
            ]
        }).then((bookmarkList) => {
            res.render('search', {
                mountains: mountainList,
                bookmarks: bookmarkList
            })
        }).catch(err => {
        res.status(500).send({
            message: err.message
        })
        */
    })
}

function switchWord(searchWord) {
    let sW = "";
    switch (searchWord) {
        case "???????????????":
            sW = "??????";
            break;
        case "???????????????":
            sW = "??????";
            break;
        case "???????????????":
            sW = "??????";
            break;
        case "???????????????":
            sW = "??????";
            break;
        case "???????????????":
            sW = "??????";
            break;
        case "???????????????":
            sW = "??????";
            break;
        case "???????????????":
            sW = "??????";
            break;
        case "?????????????????????":
            sW = "??????";
            break;
        case "?????????":
            sW = "??????";
            break;
        case "?????????":
            sW = "??????";
            break;
        case "?????????":
            sW = "??????";
            break;
    }

    return sW;
}