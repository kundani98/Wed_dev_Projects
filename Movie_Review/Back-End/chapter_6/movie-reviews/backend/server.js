import express from 'express'
import cors from 'cors'
import movies from './api/movies.route.js'

const app = express()

//attacj cors and express.json
app.use(cors())
app.use(express.json())

//Create our intial route
app.use("/api/v1/movies", movies)
app.use('*', (req, res) => {
    res.status(404).json({ error: "not found" })
})

export default app