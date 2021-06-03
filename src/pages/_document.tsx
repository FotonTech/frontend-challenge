import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link rel="preload" href="fonts/SFProText/SF-Pro-Text-Regular.otf" as="font" crossOrigin="" />
                    <link rel="preload" href="fonts/SFProText/SF-Pro-Text-Bold.otf" as="font" crossOrigin="" />
                    <link rel="preload" href="fonts/SFProDisplay/SF-Pro-Display-Regular.otf" as="font" crossOrigin="" />
                    <link rel="preload" href="fonts/SFProDisplay/SF-Pro-Display-Semibold.otf" as="font" crossOrigin="" />
                    <link rel="preload" href="fonts/SFProDisplay/SF-Pro-Display-Bold.otf" as="font" crossOrigin="" />
                    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}