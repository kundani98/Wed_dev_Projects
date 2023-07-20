import axios from "axios"

class MovieDataService {

    getAll(page = 0) {
        return axios.get(`https://moviesreview-back-end.onrender.com/movies?page=${page}`)        
    }

    get(id) {
        return axios.get(`https://moviesreview-back-end.onrender.com/movies/id/${id}`)        
    }

    find(query, by = "title", page = 0) {
        return axios.get (`https://moviesreview-back-end.onrender.com/api/v1/movies?${by}=${query}&page=${page}`)
    }

    createReview(data) {
        return axios.post("https://moviesreview-back-end.onrender.com/api/v1/movies/review", data)
    }

    updateReview(data) {
        return axios.put("https://moviesreview-back-end.onrender.com/api/v1/movies/review", data)
    }

    deleteReview(id, userId) {
        return axios.delete (
            "https://moviesreview-back-end.onrender.com/api/v1/movies/review",
            {data:{review_id: id, user_id: userId}}
        )
    }

    getRatings() {
        return axios.get("http://localhost:5000/api/v1/movies/ratings")
    }
}

export default new MovieDataService()