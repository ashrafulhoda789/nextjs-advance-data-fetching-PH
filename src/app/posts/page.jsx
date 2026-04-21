
// way-2
// const getPosts = async() =>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     return res.json();
// }


// way-3
// const getPosts = async () => {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//         return res.json();
//     }
//     catch(err){
//         throw new Error('Failed to fetch posts');
//     }
// }

// way-4
const getPosts = async() =>{
    
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    if(!res.ok){
        throw new Error('Failed to fetch data');
    }
    return res.json();
}


const PostsPage = async () => {
    // way-1
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const posts = await res.json();

    const posts = await getPosts();

    return (
        <div>
            <h2>Posts: {posts.length}</h2>
        </div>
    );
};

export default PostsPage;