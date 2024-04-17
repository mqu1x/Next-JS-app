import Link from 'next/link';

export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <h1>About us</h1>
            <ul>
                <li>
                    <Link href='/about/contacts'>Contacts</Link>
                </li>

                <li>
                    <Link href='/about/team'>Team</Link>
                </li>
            </ul>
            {children}
            {/* children - это конкретная страница: дочерняя либо соседнаяя */}
        </div>
    );
}
