import { LoaderFunction, MetaFunction, json } from '@remix-run/node';

export const loader: LoaderFunction = () => {
    return json(null, { status: 404 });
};

export const meta: MetaFunction = () => {
    return [{ title: 'Oops!' }];
};

export default function NotFound() {
    return <h2>Oops! 404 Not Found</h2>;
}
