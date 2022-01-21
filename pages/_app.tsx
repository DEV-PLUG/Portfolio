// import next.js things
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';

// import styles
import '../styles/globals.css';

// import menu & footer
import Footer from '../elements/footer';
import Menu from '../elements/menu';

// final return object
export default function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    let image, title;

    if(router.pathname === '/') {
        image = 'main';
        title = 'DEV PLUG';
    }
    else if(router.pathname === '/info') {
        image = 'info';
        title = 'DEV PLUG | 소개';
    }
    else if(router.pathname === '/contact') {
        image = 'contact';
        title = 'DEV PLUG | 연락';
    }
    else if(router.pathname === '/license') {
        title = 'DEV PLUG | 라이센스';
        image = 'license';
    }
    else {
        image = '404';
        title = 'DEV PLUG | 페이지를 찾을 수 없음';
    }

    return <>
        <Head>
            <title>{title}</title>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>

            <meta name="twitter:url" content="https://devplug.netlify.app" />
            <meta name="twitter:type" content="website" />
            <meta name="twitter:title" content="DEV PLUG" />
            <meta name="twitter:description" content="학생 개발자 PLUG에요!" />
            <meta name="twitter:image" content="https://repository-images.githubusercontent.com/450323911/44da9596-b21a-4b7c-8e94-c4e29934a931" />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <Component {...pageProps} />
        <Footer image={image} />
    </>
}