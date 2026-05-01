"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videosDb = void 0;
const videos_type_1 = require("../videos/types/videos.type");
exports.videosDb = [
    {
        id: 1,
        title: "title1",
        author: "author1",
        canBeDownloaded: true,
        minAgeRestriction: null,
        createdAt: "2026-05-01T09:58:39.390Z",
        publicationDate: "2026-05-01T09:58:39.390Z",
        availableResolutions: [videos_type_1.AvailableResolutionsE.P144]
    },
    {
        id: 2,
        title: "title2",
        author: "author2",
        canBeDownloaded: false,
        minAgeRestriction: 18,
        createdAt: "2026-05-01T10:15:22.123Z",
        publicationDate: "2026-05-01T10:15:22.123Z",
        availableResolutions: [videos_type_1.AvailableResolutionsE.P360, videos_type_1.AvailableResolutionsE.P720]
    },
    {
        id: 3,
        title: "title3",
        author: "author3",
        canBeDownloaded: true,
        minAgeRestriction: null,
        createdAt: "2026-05-01T11:30:45.789Z",
        publicationDate: "2026-05-01T11:30:45.789Z",
        availableResolutions: [videos_type_1.AvailableResolutionsE.P1080, videos_type_1.AvailableResolutionsE.P1440, videos_type_1.AvailableResolutionsE.P2160]
    },
    {
        id: 4,
        title: "title4",
        author: "author4",
        canBeDownloaded: true,
        minAgeRestriction: 12,
        createdAt: "2026-05-01T12:45:10.456Z",
        publicationDate: "2026-05-01T12:45:10.456Z",
        availableResolutions: [videos_type_1.AvailableResolutionsE.P240, videos_type_1.AvailableResolutionsE.P480, videos_type_1.AvailableResolutionsE.P720]
    }
];
