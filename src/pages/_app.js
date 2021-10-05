import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <main className="py-[50px] px-[20px]">
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
