import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8"/>

					<link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png"/>
					<link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png"/>
					<link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png"/>
					<link rel="manifest" href="/site.webmanifest"/>
					<link rel="mask-icon" href="/images/favicons/safari-pinned-tab.svg" color="#000000"/>
					<meta name="msapplication-TileColor" content="#6965ff"/>
					<meta name="theme-color" content="#000000"/>

					<link rel="dns-prefetch" href="//fonts.googleapis.com"/>
					<link rel="preconnect" href="https://fonts.googleapis.com"/>
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
					<link
						href="https://fonts.googleapis.com/css2?family=Manrope:wght@700&family=Prompt:wght@400;600;700;900&display=swap"
						rel="stylesheet"/>
				</Head>
				<body>
				<Main/>
				<NextScript/>
				</body>
			</Html>
		)
	}
}

export default AppDocument
