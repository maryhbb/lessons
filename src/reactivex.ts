interface IdTitlePair {
    id: number;
    title: string;
}

interface Release {
    id: number;
    title: string;
    boxart: string;
    uri: string;
    rating: number[];
    bookmark: Bookmark[];
}

interface Bookmark {
    id: number;
    time: number;
}

export function projectArrays(): IdTitlePair[] {
    const newReleases: Release[] = [
        {
            id: 70111470,
            title: 'Die Hard',
            boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
            uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
            rating: [4.0],
            bookmark: [],
        },
        {
            id: 654356453,
            title: 'Bad Boys',
            boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
            uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
            rating: [5.0],
            bookmark: [{ id: 432534, time: 65876586 }],
        },
        {
            id: 65432445,
            title: 'The Chamber',
            boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
            uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
            rating: [4.0],
            bookmark: [],
        },
        {
            id: 675465,
            title: 'Fracture',
            boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
            uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
            rating: [5.0],
            bookmark: [{ id: 432534, time: 65876586 }],
        },
    ];

    const videoAndTitlePairs: IdTitlePair[] = [];

    newReleases.forEach(function (release) {
        videoAndTitlePairs.push({ id: release.id, title: release.title });
    });

    return videoAndTitlePairs;
}
