import { Router } from "express";
import { portfolioController } from "../controller/portfolio.controller";

const router = Router();

router.get('/', portfolioController.getPortfolio);

router.get('/project/:id', portfolioController.getProject)

router.post('/', portfolioController.postPortfolio)

router.put('/project/:id', portfolioController.putPortfolio)

router.delete('/project/:id', portfolioController.deletePortfolio)

export default router;