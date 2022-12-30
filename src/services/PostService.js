import axios from 'axios';

class PostService {
    API_URL = 'https://jsonplaceholder.typicode.com';

    async getAll() {
        try {
            const response = await axios.get(`${this.API_URL}/posts`);
            return response.data;
        } catch(error) {
            throw new Error(error);
        }
    }
}

export default new PostService;
