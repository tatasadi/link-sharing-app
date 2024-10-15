import { auth } from '@/auth'

const protectedRoutes = ['/', '/links', '/profile', '/preview']

export default auth(req => {
	if (!req.auth && protectedRoutes.includes(req.nextUrl.pathname)) {
		const newUrl = new URL('/login', req.nextUrl.origin)
		return Response.redirect(newUrl)
	}
})

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
