const { Error } = require('mongoose')
const Music = require('../../modules/Music.js')
const index = async(req, res, next) => {
    try {
        const musics = await Music.find()
            return res.status(200).json({
                musics: musics
            })

        // return res.render('desktop/todo.njk', {
        //     todoList: todoList
        // })
    } catch (error) {
        next(error)
    }
}
// const getOneTodo = async (req, res, next) => {
//     try {
//         const todo = await Todo.findById(req.params.id)
//         return res.render('desktop/todoDetail', {
//             todo: todo
//         })
//     } catch (error) {
//         next(error)
//     }
// }
// const add = async (req, res, next) => {
//     try {
//         return res.render('desktop/createTodo')
//     } catch (error) {
//         next(error)
//     }
// }
// const createTodo = async (req, res, next) => {
//     try {
//         const newTodo = new Todo(req.body)
//         console.log(req.body)
//         await newTodo.save()
//             // return res.status(201).json({
//             //     message: 'success'
//             // })
//             // const todoList = await Todo.find()
//         return res.redirect('todos')
//     } catch (error) {
//         next(error)
//     }
// }
// const editTodo = async(req, res, next) => {
//     try {
//         const todo = await Todo.findById(req.params.id)
//         return res.render('desktop/editTodo', {
//             todo: todo
//         })
//     } catch (error) {
//         next(error)
//     }
// }
// const replaceTodo = async(req, res, next) => {
//     try {
//         const result = await Todo.findByIdAndUpdate(req.params.id, req.body)
//         res.redirect('../../todos')
//     } catch (error) {
//         next(error)
//     }
// }
// const deleteTodo = async(req, res, next) => {
//     try {
//         await Todo.deleteOne({ _id: req.params.id })
//         return res.redirect('back')
//     } catch (error) {
//         next(error)
//     }
// }
module.exports = {
    index,
    // getOneTodo,
    // editTodo,
    // add,
    // deleteTodo,
    // createTodo,
    // replaceTodo
}