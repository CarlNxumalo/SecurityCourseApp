import { redirect } from '@sveltejs/kit';

export async function GET({ cookies }) {
    // Delete the 'ID' cookie by setting an empty value and making it expire immediately
    cookies.delete('id', { path: '/' });

    // Redirect to the homepage or login page after logout
    throw redirect(303, '/');
}
