const index = async (req, res, next) => {
    try {
        res.render('desktop/home')
    } catch (error) {
        next(error)
    }
}
module.exports = {
    index
}