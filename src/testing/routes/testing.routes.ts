import {Router, Request, Response} from "express";
import {videosDb} from "../../db/db";
import {HttpStatusesEnum} from "../../core/types/httpStatuses.type";


export const testingRoutes = Router();

testingRoutes.delete("/all-data", (req: Request, res: Response) => {
    videosDb.length = 0;
    res.status(HttpStatusesEnum.NoContent).send();
})