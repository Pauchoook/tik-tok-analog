import React, { FC } from "react";
import Head from "next/head";
import axios from "axios";
import { IVideo } from "@/utils/types";
import { Videos } from "@/modules/Videos";
import MainLayout from "@/components/MainLayout";

interface HomeProps {
  videos: IVideo[];
}

const Home: FC<HomeProps> = ({ videos }) => {
  return (
    <>
      <Head>
        <title>tik tik</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainLayout>
          <Videos videos={videos} />
        </MainLayout>
      </main>
    </>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get<IVideo[]>(`${process.env.NEXT_PUBLIC_CLIENT_URL}/api/post`);

  return {
    props: {
      videos: data,
    },
  };
};

export default Home;
