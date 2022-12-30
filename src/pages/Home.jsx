import PostService from "../services/PostService";
import { useState } from "react";
import { useLoaderData, useNavigation } from 'react-router-dom';

const fetchAllPosts = async () => {
    return await PostService.getAll();
}

const Home = () => {
    const [posts, setPosts] = useState(useLoaderData());
    const navigation = useNavigation();

    if(navigation.state === 'loading') {
        return (
            <div className="loader">
                <p>Loading ...</p>
            </div>
        )
    }

    return (
        <div className="page page-home">
            <h1>Home</h1>
            <ul className="posts">
                {
                    posts.map((post, index) => {
                        return <li key={ index }>
                            <h2>{ post.title }</h2>
                            <p>{ post.body }</p>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Home;
export { fetchAllPosts };
