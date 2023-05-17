import { GoogleOAuthProvider } from "@react-oauth/google";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import MainLayout from "@/components/MainLayout";

export default function App({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState<boolean>(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <Component {...pageProps} />
  );
}
