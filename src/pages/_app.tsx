import { GoogleOAuthProvider } from "@react-oauth/google";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { AppPropsWithLayout } from "../utils/types";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [isSSR, setIsSSR] = useState<boolean>(true);
  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID + ""}
    >
      {getLayout(<Component {...pageProps} />)}
    </GoogleOAuthProvider>
  );
}
