import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <main className="my-[50px] mx-[20px]">
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
