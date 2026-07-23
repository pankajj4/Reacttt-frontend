"use client"

import { Provider } from "react-redux"
import {store} from "./store"
import { Geist, Geist_Mono } from "next/font/google";
import 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function Providerr({children}:any){
    // return <Provider store={store}>
    //     {children}
    // </Provider>

    return  <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Provider store={store} >
          {children}
        </Provider>
      </body>
    </html>
}
