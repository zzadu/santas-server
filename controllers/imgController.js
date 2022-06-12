const request = require("request"),
    fetch = require('node-fetch');


const key = 'JsYDcymAO%2BdqZ2KscehCHVe%2B83DUZExkHQdWA5S1eVJaBHVHjkaHVELfhZ3xX5pGknpwTb6wRVIg4fbsQOV%2Fnw%3D%3D';

const add1 = 'http://apis.data.go.kr/1400000/service/cultureInfoService/mntInfoImgOpenAPI?mntiListNo='
    add2 = '&ServiceKey=',
    add3 = '&_type=json',
    address = add1 + req.params.number + add2 + key + add3;

exports.getImage = async (req, res) => {

    fetch(address).then(result => {

        const js = result.json();

        let image = js.response.body.items.item;

        if (!Array.isArray(image)) {
            image = new Array(image);
        }

        if (image[0] != undefined) {
            return res.redirect("https://www.forest.go.kr/images/data/down/mountain/" + image[0].imgfilename);
        }
        else {
            return res.redirect("../../images/noimage.png");
        }
        }
    )

 /*
    request.get(address, (error, resp, body) => {
        console.log(body);

        if (!isJson(body)) {
            console.log(body);

            return res.redirect("../../images/cantload.png");
        }
        const js = body.json();

        let image = js.response.body.items.item;

        if (!Array.isArray(image)) {
            image = new Array(image);
        }

        if (image[0] != undefined) {
            return res.redirect("https://www.forest.go.kr/images/data/down/mountain/" + image[0].imgfilename);
        }
        else {
            return res.redirect("../../images/noimage.png");
        }
    }) */
};

exports.getImages = async (req, res) => {

    const imgNum = req.params.imgNum;

    fetch(address).then(result => {

        const js = result.json();

        let image = js.response.body.items.item;

        if (!Array.isArray(image)) {
            image = new Array(image);
        }

        if (image[0] != undefined) {
            return res.redirect("https://www.forest.go.kr/images/data/down/mountain/" + image[imgNum].imgfilename);
        }
        else {
            return res.redirect("../../images/noimage.png");
        }
        }
    )

    /*
    request.get(address, (error, resp, body) => {

        if (!isJson(body)) {
            console.log(body);
            return res.redirect("../../images/cantload.png");
        }

        const json = JSON.parse(body);
        let image = json.response.body.items.item;

        if (!Array.isArray(image)) {
            image = new Array(image);
        }

        if (image[0] != undefined && image[imgNum] != null) {
            res.redirect("https://www.forest.go.kr/images/data/down/mountain/" + image[imgNum].imgfilename);
        }
        else {
            res.redirect("../../images/noimage.png");
        }
    }) */
}

function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
