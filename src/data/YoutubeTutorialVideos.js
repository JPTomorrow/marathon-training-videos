

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
        "https://www.youtube.com/watch?v=Qj5PkIrmHoQ"),
    
    new YoutubeVideoEntry("Crystalline Silica Exposure Training",
        "Crystalline Silica exposure is a common problem in the workplace that this training video will address.",
        "https://www.youtube.com/watch?v=L1YE4lr-7Vw",
        "https://www.youtube.com/watch?v=L1YE4lr-7Vw"),
    
    new YoutubeVideoEntry("Electrical Contact Release",
        "This video explores the methods of rescueing someone who has come into contact with electricity.",
        "https://www.youtube.com/watch?v=GyT3eAsweIo",
        "https://www.youtube.com/watch?v=GyT3eAsweIo"),
    
    new YoutubeVideoEntry("Employee Safety in Confined Spaces",
        "Learn how to avoid tragic injury and death when working in confined spaces.",
        "https://www.youtube.com/watch?v=mCm5NR7Jobk",
        "https://www.youtube.com/watch?v=mCm5NR7Jobk"),
    
    new YoutubeVideoEntry("Fire Extinguisher Basic Training",
        "Explains how to avoid panic, and deal with a workplace fire, depending on the state of the fire.",
        "https://www.youtube.com/watch?v=2ccfAeNXnq4",
        "https://www.youtube.com/watch?v=2ccfAeNXnq4"),
    
    new YoutubeVideoEntry("HAZCOM 2021",
        "Information on various workplace hazard knowledge.",
        "https://www.youtube.com/watch?v=9TjmPQDNvkg",
        "https://www.youtube.com/watch?v=9TjmPQDNvkg"),
    
    new YoutubeVideoEntry("Hearing Conservation",
        "How to protect your hearing while on the job site, and explains the measures that the company takes to protect your hearing.",
        "https://www.youtube.com/watch?v=COrhN1SqzoU",
        "https://www.youtube.com/watch?v=COrhN1SqzoU"),
    
    new YoutubeVideoEntry("Ladder Safety - Safety Time",
        "An entertaining training video for ladder safety provided by Safety Time.",
        "https://www.youtube.com/watch?v=7eG0kbwjQxM",
        "https://www.youtube.com/watch?v=7eG0kbwjQxM"),
];

export function getVideosByName(name) {
    return youtubeVideos.filter(video => video.title.toLowerCase().includes(name.toLowerCase()));
}