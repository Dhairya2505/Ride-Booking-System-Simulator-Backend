import express, { Request, Response } from "express"
import { ride } from "./routes/request-ride.js"

const app = express()
app.use(express.json())

app.get(`/`, (req: Request, res: Response) => {
    res.send("Hello from server !!")
})

app.post(`/ride`, ride)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})