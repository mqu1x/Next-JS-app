import { Metadata } from 'next';

const getData = async (id: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60,
        },
    });
    return res.json();
};

type Props = {
    params: {
        id: string;
    };
};

export const generateMetadata = async ({ params: { id } }: Props): Promise<Metadata> => {
    const post = await getData(id);
    return {
        title: post.title,
    };
};

const Post = async ({ params: { id } }: Props) => {
    const post = await getData(id);
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    );
};

export default Post;
