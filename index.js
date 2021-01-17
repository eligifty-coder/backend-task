import express from 'express'
import axios from 'axios'

const app = express()
const port = process.env.PORT || 8080;

app.get('/api/rates', async(req,res) => {
    const query = req.query;
    try {
        const resp = await axios.get(`https://api.exchangeratesapi.io/latest?base=${query.base}&symbols=${query.currency}`);
        res.status(200).json({'result':resp.data})
    } catch (error) {
        res.status(500).json({message:"Internal Server Error or Invalid Currency Symbols"})
    }
})

app.listen(port, () => console.log("app is running"))