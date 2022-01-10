

export class YoutubeVideoEntry {
    constructor(title, description, englishUrl, spanishUrl) {
        this.title = title;
        this.description = description;
        this.englishUrl = englishUrl;
        this.spanishUrl = spanishUrl;
    }
}


export const youtubeVideos = [
    new YoutubeVideoEntry("New Hire Onboarding Video",
        "Marathon holds electrical safety as a top priority for all employees" +
        " and their livelihood. This video will be showing you the core safety" +
        " standards of which Marathon expects all of its employees to conduct on" +
        " every job site.",
        "https://www.youtube.com/watch?v=Qj5PkIrmHoQ",
        "https://www.youtube-nocookie.com/embed/cxaDNRfRj2Y"),
];

export function getVideosByName(name) {
    return youtubeVideos.filter(video => video.title.toLowerCase().includes(name.toLowerCase()));
}