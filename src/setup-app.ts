import express, {Express} from "express";
import {videosRoutes} from "./videos/routes/videos.routes";
import {testingRoutes} from "./testing/routes/testing.routes";

export const setupApp = (app: Express) => {
    app.use(express.json());
    app.use("/hometask_01/api/videos", videosRoutes);
    app.use("/hometask_01/api/testing", testingRoutes)

   return app;
};