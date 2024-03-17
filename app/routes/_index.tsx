import { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
    return [{ title: 'Index Page' }];
};

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
        </div>
    );
}
