const apiConfig = {
    baseURL: process.env.API_THEMOVIEDB_URL||"https://api.themoviedb.org/3/",
    apiKey: process.env.API_THEMOVIEDB_KEY||"ab76205028de33c7bb39eeba11dbe771",
    originalImageURL: (imgPath)=> process.env.ORIGINAL_IMAGE_URL+imgPath||`https://image.tmdb.org/t/p/original/${imgPath}`,
    imageW500Size: (imgPath) => process.env.W500_IMAGE_URL+imgPath||`https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;