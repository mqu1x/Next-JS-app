import Link from 'next/link';

const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60,
        },
    });
    if (!res.ok) throw new Error('Что-то пошло не так');

    return res.json();
};

const Posts = async () => {
    const posts = await getData();
    return (
        <>
            <h1>Posts page</h1>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Posts;
