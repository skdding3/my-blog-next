import "../styles/globals.css";
import type { AppProps } from "next/app";
import "dayjs/locale/ko";
import dayjs from "dayjs";

dayjs.locale("ko");

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
