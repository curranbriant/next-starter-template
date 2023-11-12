import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import '../styles/globals.css';
export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Starter</title>
            </Head >
            <div className={"appContainer"}>
                <main className={"mainContent"}>
                    <Component {...pageProps} />
                </main>
            </div>
        </>
    );
}



