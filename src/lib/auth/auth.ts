import { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

import webStorageClient from "@/utils/webStorageClient";

import { constants } from "@/settings";

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
            await console.log(account);
            await console.log(profile)

            // webStorageClient.setToken(account?.access_token!, 
            //     {expires: new Date(Date.now() + 15*60*1000)}
            //   );
            // webStorageClient.set(
            //     constants.USER_INFO,
            //     {
            //         name: profile?.name,
            //         email: profile?.email,
            //         image: profile?.image,
            //     },
            //     {expires: new Date(Date.now() + 20*60*1000)}
            //   );
            return true;
        }
    }
}