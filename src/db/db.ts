import {VideosArray, AvailableResolutionsE} from "../videos/types/videos.type";


export const videosDb: VideosArray = [
    {
        id: 1,
        title:"title1",
        author: "author1",
        canBeDownloaded: true,
        minAgeRestriction: null,
        createdAt: "2026-05-01T09:58:39.390Z",
        publicationDate: "2026-05-01T09:58:39.390Z",
        availableResolutions: [AvailableResolutionsE.P144]
    },
    {
        id: 2,
        title:"title2",
        author: "author2",
        canBeDownloaded: false,
        minAgeRestriction: 18,
        createdAt: "2026-05-01T10:15:22.123Z",
        publicationDate: "2026-05-01T10:15:22.123Z",
        availableResolutions: [AvailableResolutionsE.P360, AvailableResolutionsE.P720]
    },
    {
        id: 3,
        title:"title3",
        author: "author3",
        canBeDownloaded: true,
        minAgeRestriction: null,
        createdAt: "2026-05-01T11:30:45.789Z",
        publicationDate: "2026-05-01T11:30:45.789Z",
        availableResolutions: [AvailableResolutionsE.P1080, AvailableResolutionsE.P1440, AvailableResolutionsE.P2160]
    },
    {
        id: 4,
        title:"title4",
        author: "author4",
        canBeDownloaded: true,
        minAgeRestriction: 12,
        createdAt: "2026-05-01T12:45:10.456Z",
        publicationDate: "2026-05-01T12:45:10.456Z",
        availableResolutions: [AvailableResolutionsE.P240, AvailableResolutionsE.P480, AvailableResolutionsE.P720]
    }
]