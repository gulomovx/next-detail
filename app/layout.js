"use client";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Persistor } from "redux-persist";
import ReduxProvider from "../redux/provider";
import { persistStore } from "redux-persist";
import Providers from "@/components/Providers";
import AppBar from "@/components/AppBar";
const inter = Nunito_Sans({ subsets: ["latin"] });
let persistor = persistStore(store);

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <AppBar/> */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
