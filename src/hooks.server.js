import { redirect } from '@sveltejs/kit';

export async function handle({ event, resolve }) {
    const id = event.cookies.get('id'); // Get the ID cookie
    const isDashboardRoute = event.url.pathname.startsWith('/dashboard');
    console.log(isDashboardRoute)
    // If trying to access a protected route and there's no ID cookie, redirect to login
    if (isDashboardRoute && !id) {
        throw redirect(303, '/auth/login');
    }

    return resolve(event); // Proceed as normal
}
