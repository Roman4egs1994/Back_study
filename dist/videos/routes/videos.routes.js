"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videosRoutes = void 0;
const express_1 = require("express");
const db_1 = require("../../db/db");
const httpStatuses_type_1 = require("../../core/types/httpStatuses.type");
const validations_video_1 = require("../validations/validations.video");
exports.videosRoutes = (0, express_1.Router)();
exports.videosRoutes
    .get("/", (req, res) => {
    res.status(httpStatuses_type_1.HttpStatusesEnum.Content).send(db_1.videosDb);
})
    .post("/", (req, res) => {
    const errors = (0, validations_video_1.VideoInputDtoValidation)(req.body);
    if (errors.length > 0) {
        res.status(httpStatuses_type_1.HttpStatusesEnum.BadRequest).send(errors);
        return;
    }
    const { title, author, availableResolutions } = req.body;
    const newVideo = {
        id: db_1.videosDb.length >= 0 ? db_1.videosDb.length + 1 : 1,
        title,
        author,
        availableResolutions,
        canBeDownloaded: false,
        minAgeRestriction: null,
        createdAt: new Date().toISOString(),
        publicationDate: new Date().toISOString()
    };
    db_1.videosDb.push(newVideo);
    res.status(httpStatuses_type_1.HttpStatusesEnum.Content).send(newVideo);
})
    .get(`/:id`, (req, res) => {
    const id = req.params.id;
    const video = db_1.videosDb.find(video => video.id === Number(id));
    if (!video) {
        res.status(httpStatuses_type_1.HttpStatusesEnum.NotFound).send();
    }
    res.status(httpStatuses_type_1.HttpStatusesEnum.Content).send(video);
})
    .put('/:id', (req, res) => {
    const errors = (0, validations_video_1.VideoInputDtoValidation)(req.body);
    if (errors.length > 0) {
        res.status(httpStatuses_type_1.HttpStatusesEnum.BadRequest).send(errors);
        return;
    }
    const id = req.params.id;
    const video = db_1.videosDb.find(video => video.id === Number(id));
    if (!video) {
        res.status(httpStatuses_type_1.HttpStatusesEnum.NotFound).send();
        return;
    }
    const { title, author, availableResolutions, canBeDownloaded, minAgeRestriction, publicationDate } = req.body;
    const updateVideo = Object.assign(Object.assign({}, video), { id: Number(id), title,
        author,
        availableResolutions,
        canBeDownloaded,
        minAgeRestriction,
        publicationDate, createdAt: video.createdAt });
    const videoIndex = db_1.videosDb.findIndex(v => v.id === Number(id));
    db_1.videosDb[videoIndex] = updateVideo;
    res.status(httpStatuses_type_1.HttpStatusesEnum.Content).send(updateVideo);
})
    .delete("/:id", (req, res) => {
    const id = req.params.id;
    const video = db_1.videosDb.find(video => video.id === Number(id));
    if (!video) {
        res.status(httpStatuses_type_1.HttpStatusesEnum.NotFound).send();
        return;
    }
    const videoIndex = db_1.videosDb.findIndex(v => v.id === Number(id));
    db_1.videosDb.splice(videoIndex, 1);
    res.status(httpStatuses_type_1.HttpStatusesEnum.NoContent).send();
});
