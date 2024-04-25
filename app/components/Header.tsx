import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <Link href='/'>Home</Link>
            <Link href='/posts'>Posts</Link>
            <Link href='/about'>About</Link>
            <Link href='/logout'>Logout</Link>
        </header>
    );
};

export { Header };
