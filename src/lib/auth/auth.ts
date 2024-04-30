import { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
    session : {
        strategy: 'jwt'
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    callbacks:{
        async signIn({account, profile}){
            if(!profile?.email){
                throw new Error('No profile')
            }
            console.log(account)
            console.log(profile)

            return true;
        }
    }
}