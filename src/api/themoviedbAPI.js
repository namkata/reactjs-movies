import axiosInstance from "./axiosInstance";

export const Category = {
    movie: "movie",
    tv: "tv",
}

export const MovieType={
    nowPlaying: "now_playing",
    popular: "popular",
    topRated: "top_rated",
    upcoming: "upcoming",
}
export const TVType={
    popular: "popular",
    topRated: "top_rated",
    onTheAir: "on_the_air",
}

const TheMovieDbAPI = {
    getMovies: (type, params) => {
        const movieURL= 'movie/'+MovieType[type];
        return axiosInstance.get(movieURL, {params: params});
    },
    getTVList: (type, params) => {
        const tvURL= 'tv/'+TVType[type];
        return axiosInstance.get(tvURL, {params: params});
    },
    getVideos: (type, id) =>{
        const videoURL= Category[type]+'/'+id+'/videos';
        return axiosInstance.get(videoURL);
    },
    searchCategory: (type, params)=>{
        const searchURL= Category[type]+'/search';
        return axiosInstance.get(searchURL, {params: params});
    },
    getSearchDetails: (type, id, params)=>{
        const searchURL= Category[type]+'/'+id;
        return axiosInstance.get(searchURL);
    },
    getCredits: (type, id)=>{
        const creditsURL= Category[type]+'/'+id+'/credits';
        return axiosInstance.get(creditsURL);
    },
    getSimilar: (type, id)=>{
        const similarURL= Category[type]+'/'+id+'/similar';
        return axiosInstance.get(similarURL);
    },
}
export default TheMovieDbAPI;