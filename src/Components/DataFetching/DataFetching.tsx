import { useEffect, useState } from 'react'

function DataFetching() {
    const [posts, setPosts] = useState<{ id: string, title: string }[]>([])
    useEffect(() => {
        fetch("https://jsonplaceholder.org/posts")
            .then(response => {
                return response.json();
            })
            .then(data => {
                setPosts(data ?? []);
            })
            .catch(err => {

                console.log(err);
            })

    }, [])
    return (
        <>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
    )
}


export default DataFetching