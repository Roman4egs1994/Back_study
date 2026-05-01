import express, {Express} from "express";
import {videosRoutes} from "./videos/routes/videos.routes";
import {testingRoutes} from "./testing/routes/testing.routes";

export const setupApp = (app: Express) => {
    app.use(express.json());
    app.use("/videos", videosRoutes);
    app.use("/testing", testingRoutes)

   return app;
};