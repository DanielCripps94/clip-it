import NextAuth from "next-auth";
import { authOptions } from "~/auth-settings";

const handler = NextAuth(authOptions);

console.log("NextAuth route handler is being executed");

export { handler as GET, handler as POST };
