import express, {Request, Response} from "express"
import { createPlayerService, deletePlayerService, getPlayerByIdService, getPlayerService } from "../services/players/players-services";
import { badRequest, noContent, ok } from "../utils/http-helper";

export const getPlayer = async (req: Request, res: Response) => {
    const HttpResponse = await getPlayerService();
    
    res.status(HttpResponse.statusCode).json(HttpResponse.body);
}

export const getPlayerById = async (req: Request, res: Response)  => {
    const id = parseInt(req.params.id);

    const httpResponse = await getPlayerByIdService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const deletePlayer = async(req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const httpResponse = await deletePlayerService(id);
}

export const postPlayer = async(req: Request, res: Response) => {
    const bodyValue = req.body;
    const httpResponse = await createPlayerService(bodyValue);

    if (httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
    } 
    
    // else {
    //     const response = await badRequest();
    //     res.status(await response.statusCode).json()
    // }
    
}