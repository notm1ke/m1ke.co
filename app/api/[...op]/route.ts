import { createNextRouteHandler } from '@openpanel/nextjs/server';
 
export const POST = createNextRouteHandler({
	apiUrl: process.env.NEXT_PUBLIC_OPENPANEL_API_URL
});