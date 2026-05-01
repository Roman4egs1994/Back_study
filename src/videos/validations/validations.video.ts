import {ValidationError} from "../types/videos.type";

export type CreateVideoDto = {
    title: string;
    author: string;
    availableResolutions?: string[];
    canBeDownloaded?: boolean;
    minAgeRestriction?: number | null;
}

export const VideoInputDtoValidation = (data: CreateVideoDto): ValidationError[] => {
    const errors: ValidationError[] = [];

    if (!data.title || typeof data.title !== 'string' || data.title.trim().length > 40) {
        errors.push({
            field: 'title',
            message: 'Title is required and must be less than 40 characters'
        });
    }
   //
    if (!data.author || typeof data.author !== 'string' || data.author.trim().length > 20) {
        errors.push({
            field: 'author',
            message: 'Author is required and must be less than 20 characters'
        });
    }

    if (data.availableResolutions && Array.isArray(data.availableResolutions)) {
        const validResolutions = ['P144', 'P240', 'P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160'];
        const invalidResolutions = data.availableResolutions.filter(res => !validResolutions.includes(res));

        if (invalidResolutions.length > 0) {
            errors.push({
                field: 'availableResolutions',
                message: `Invalid resolutions: ${invalidResolutions.join(', ')}`
            });
        }
    }

    if (data.canBeDownloaded !== undefined && typeof data.canBeDownloaded !== 'boolean') {
        errors.push({
            field: 'canBeDownloaded',
            message: 'canBeDownloaded must be a boolean'
        });
    }

    if (data.minAgeRestriction !== undefined && data.minAgeRestriction !== null) {
        if (data.minAgeRestriction < 1 || data.minAgeRestriction > 18) {
            errors.push({
                field: 'minAgeRestriction',
                message: 'minAgeRestriction must be a number between 1 and 18'
            });
        }
    }

    return errors;
};