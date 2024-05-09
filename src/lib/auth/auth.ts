import { constants } from "@/settings";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import { cookies } from "next/headers";

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
            console.log(account);
            // await console.log(account?.access_token);
            console.log(profile)
            const accessTokenDemo = account?.access_token as string;
            // console.log(accessTokenDemo);
            cookies().set(constants.ACCESS_TOKEN, accessTokenDemo)     
            return true;
        }
    }
}