"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingRoutes = void 0;
const express_1 = require("express");
const db_1 = require("../../db/db");
const httpStatuses_type_1 = require("../../core/types/httpStatuses.type");
exports.testingRoutes = (0, express_1.Router)();
exports.testingRoutes.delete("/all-data", (req, res) => {
    db_1.videosDb.length = 0;
    res.status(httpStatuses_type_1.HttpStatusesEnum.NoContent).send();
});
