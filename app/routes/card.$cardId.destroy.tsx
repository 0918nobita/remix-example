import { type ActionFunction, redirect } from '@remix-run/node';

export const action: ActionFunction = ({ params }) => {
    console.log('Action called');

    return redirect('/');
};
