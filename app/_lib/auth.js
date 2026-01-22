import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authConfig = {
	providers: [
		GoogleProvider({
			clientId: process.env.AUTH_GOOGLE_ID,
			clientSecret: process.env.AUTH_GOOGLE_SECRET,
		}),
	],
	callbacks : {
		authorized(auth, request) {
			// This is to fast convert any type to bool
			return !!auth?.user
		};
	}
};

export const { handlers, auth } = NextAuth(authConfig);
