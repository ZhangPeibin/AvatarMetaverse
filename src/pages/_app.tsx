import { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import '../styles/global.css';
import { appWithTranslation } from 'next-i18next';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(MyApp);
