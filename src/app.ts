import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express';
import portfolioRouter from './router/portfolio.router'
// 

//  export const data = require ('../cliente/app')
// export const data = require ('../cliente/app')




const mama:Array<string>=[]

const app = express()
app.use(cors())
app.use(express.json())
app.use(portfolioRouter)





// app.get('/',(req: Request, res: Response) => {
//     res.json(data)
//       console.log('Aprovecha')
//     })


    // app.post('/', (req, res)=>{
    //   const pruebas = req.body.prueba
    //   const age = req.body.age
    //   const name = req.body.name
    //   prueba.push(pruebas, age, name)
    //   res.send(JSON.stringify('guardada'))
    //   console.log(prueba)
    // })

    

  
      

// app.get('/v/:id', (req, res)=>{
//   const id = parseInt(req.params.id)
//   res.json({proyecto:prueba [id]});

// })



app.listen(3002, ()=> console.log('Serve por el port 300'))