import { MetaFunction } from '@remix-run/node';
import { Form, json, useLoaderData } from '@remix-run/react';

export const loader = () => {
    console.log('Loader called');

    return json({
        front: '爱好',
        back: '趣味',
    });
};

export const meta: MetaFunction<typeof loader> = ({ data, params }) => {
    return [{ title: `Card (ID: ${params.cardId})` }];
};

export default function Card() {
    const card = useLoaderData<typeof loader>();

    return (
        <div id="card">
            <p>
                {card.front}: {card.back}
            </p>
            <Form action="destroy" method="post">
                <button type="submit">Delete</button>
            </Form>
        </div>
    );
}
