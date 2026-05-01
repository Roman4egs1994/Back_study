import {Router, Request, Response} from "express";
import {videosDb} from "../../db/db";
import {HttpStatusesEnum} from "../../core/types/httpStatuses.type";
import {Video} from "../types/videos.type";
import {VideoInputDtoValidation} from "../validations/validations.video";

export const videosRoutes = Router();

videosRoutes
    .get("/", (req: Request, res: Response) => {
    res.status(HttpStatusesEnum.Content).send(videosDb);
})
    .post("/", (req: Request, res: Response) => {

        const errors = VideoInputDtoValidation(req.body);
        if(errors.length > 0) {
            res.status(HttpStatusesEnum.BadRequest).send(errors);
            return;
        }

       const {title, author, availableResolutions} = req.body
       const newVideo: Video = {
           id: videosDb.length >= 0 ? videosDb.length + 1 : 1,
           title,
           author,
           availableResolutions,
           canBeDownloaded: false,
           minAgeRestriction: null,
           createdAt: new Date().toISOString(),
           publicationDate: new Date().toISOString()
       }

       videosDb.push(newVideo);
       res.status(HttpStatusesEnum.Content).send(newVideo);
    })
    .get(`/:id`, (req:Request, res: Response) => {
        const id = req.params.id;
        const video = videosDb.find(video => video.id === Number(id));
        if(!video){
            res.status(HttpStatusesEnum.NotFound).send();
        }

        res.status(HttpStatusesEnum.Content).send(video);
    })
    .put('/:id', (req:Request, res: Response) => {
        const errors = VideoInputDtoValidation(req.body);
        if(errors.length > 0) {
            res.status(HttpStatusesEnum.BadRequest).send(errors);
            return;
        }

        const id = req.params.id;
        const video = videosDb.find(video => video.id === Number(id));
        if(!video){
            res.status(HttpStatusesEnum.NotFound).send();
            return;
        }
        const {title, author, availableResolutions, canBeDownloaded, minAgeRestriction, publicationDate} = req.body

        const updateVideo: Video = {
            ...video,
            id: Number(id),
            title,
            author,
            availableResolutions,
            canBeDownloaded,
            minAgeRestriction,
            publicationDate,
            createdAt: video.createdAt
        }

        const videoIndex = videosDb.findIndex(v => v.id === Number(id));
        videosDb[videoIndex] = updateVideo;
        res.status(HttpStatusesEnum.Content).send(updateVideo);

    })
    .delete("/:id",(req:Request, res: Response) => {
        const id = req.params.id;

        const video = videosDb.find(video => video.id === Number(id));
        if(!video) {
            res.status(HttpStatusesEnum.NotFound).send();
            return;
        }
        const videoIndex = videosDb.findIndex(v => v.id === Number(id));
        videosDb.splice(videoIndex, 1);
        res.status(HttpStatusesEnum.NoContent).send();
    })