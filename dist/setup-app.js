"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupApp = void 0;
const express_1 = __importDefault(require("express"));
const videos_routes_1 = require("./videos/routes/videos.routes");
const testing_routes_1 = require("./testing/routes/testing.routes");
const setupApp = (app) => {
    app.use(express_1.default.json());
    app.use("/hometask_01/api/videos", videos_routes_1.videosRoutes);
    app.use("/hometask_01/api/testing", testing_routes_1.testingRoutes);
    return app;
};
exports.setupApp = setupApp;
