import { portfolioModel, messages } from "../model/portfolio.model";
import { Request,Response } from "express";
import { proyecto} from "../model/portfolio.model";

export const portfolioController = {
    getPortfolio:(req:Request, res:Response) =>{
        const resul = portfolioModel.getPortfolios();
        res.json(proyecto)
    },

    getProject:(req:Request, res:Response) =>{
        const id = parseInt(req.params.id);
        res.json({message:proyecto[id]})
    },

    postPortfolio:(req:Request, res:Response) =>{
        const resulpost = portfolioModel.getPortfolios()
        const message = req.body.message
        proyecto.push(message)
        res.send(JSON.stringify('guardada'))
        console.log(message)
    },

    putPortfolio:(req:Request, res:Response)=>{
        const message = req.body.message
        const id = parseInt(req.params.id)
        proyecto[id] = message;
        res.json({message:proyecto[id]})
    },

    deletePortfolio:(req:Request, res:Response)=>{
        const id = parseInt(req.params.id)
        proyecto.splice(id,1)
        res.json({message:`delete${id}`})
    }

    
}

