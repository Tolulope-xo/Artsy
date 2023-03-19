import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Layout from '../components/layout';
import store from '.././redux/store'
import '../styles/globals.css';
<link href="https://fonts.cdnfonts.com/css/clash-display" rel="stylesheet"></link>
function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<div>
			<Provider store={store}>
				<Layout>
					<Component key={router.pathname} {...pageProps} />
				</Layout>
			</Provider>
		</div>
	);
}

export default MyApp;
