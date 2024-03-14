import { Link } from '@remix-run/react';

export default function Index() {
    return (
        <div id="index-page">
            <p>
                This is a demo for Remix.
                <br />
                Check out{' '}
                <a
                    href="https://remix.run"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    the docs at remix.run
                </a>
                .
            </p>
            <p>
                <Link to="/card/42">Link to card page</Link>
            </p>
        </div>
    );
}
