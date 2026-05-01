"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpStatusesEnum = void 0;
var HttpStatusesEnum;
(function (HttpStatusesEnum) {
    HttpStatusesEnum[HttpStatusesEnum["Content"] = 200] = "Content";
    HttpStatusesEnum[HttpStatusesEnum["NoContent"] = 404] = "NoContent";
    HttpStatusesEnum[HttpStatusesEnum["NotFound"] = 404] = "NotFound";
    HttpStatusesEnum[HttpStatusesEnum["BadRequest"] = 400] = "BadRequest";
    HttpStatusesEnum[HttpStatusesEnum["Unauthorized"] = 401] = "Unauthorized";
    HttpStatusesEnum[HttpStatusesEnum["Forbidden"] = 403] = "Forbidden";
    HttpStatusesEnum[HttpStatusesEnum["InternalServerError"] = 500] = "InternalServerError";
})(HttpStatusesEnum || (exports.HttpStatusesEnum = HttpStatusesEnum = {}));
