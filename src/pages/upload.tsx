import MainLayout from "@/components/MainLayout";
import { UploadVideo } from "@/modules/UploadVideo";
import { NextPageWithLayout } from "@/utils/types";
import Head from "next/head";
import { ReactElement } from "react";

const Upload: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>tik tik</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <UploadVideo />
      </main>
    </>
  );
};

Upload.getLayout = function (page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Upload;
