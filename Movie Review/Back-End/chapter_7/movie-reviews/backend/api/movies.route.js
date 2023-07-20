import express from 'express'
//  import movies from './api/movies.route.js'

const router = express.Router() // get access to express router

 router.route('/').get((req,res) => res.send('hello world'))


export default router