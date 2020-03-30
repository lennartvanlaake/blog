
import Link from 'next/link';
import Layout from '../comps/Layout'
export default function Index() {

    return (
        <div>
            <Layout>
                <Link href="/about" title="About Page">
                    <a>About Page</a>
                </Link>
                <p>Hello Next.js</p>
            </Layout>
        </div>
    );
}
