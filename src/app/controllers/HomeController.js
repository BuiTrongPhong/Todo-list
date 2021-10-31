const axios = require('axios').create({
    baseURL: 'http://' + process.env.HOST + ':' + process.env.PORT + '/api',
    timeout: 1000
})
const index = async (req, res, next) => {
    try {
        const musics = await axios.get('/musics')
        res.render('desktop/home', {
            musics: musics.data.musics
        })
    } catch (error) {
        next(error)
    }
}
module.exports = {
    index
}