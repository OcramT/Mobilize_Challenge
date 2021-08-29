import App from 'next/app';
import '../styles/main.css';

function MobilizeApp({ Component, pageProps }) {
    return < Component {...pageProps} />
}

export default MobilizeApp;