import React, { ReactElement } from "react";
import Head from "next/head";
import axios from "axios";
import { IParams, IQuery, IVideo, NextPageWithLayout } from "@/utils/types";
import { Videos } from "@/modules/Videos";
import MainLayout from "@/components/MainLayout";

interface HomeProps {
  videos: IVideo[];
}

const Home: NextPageWithLayout<HomeProps> = ({ videos }) => {
  return (
    <>
      <Head>
        <title>tik tik</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Videos videos={videos} />
      </main>
    </>
  );
};

Home.getLayout = function (page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = async ({ query: { topic } }: IQuery) => {
  let videos: IVideo[] = [];

  if (topic) {
    const { data } = await axios.get<IVideo[]>(`${process.env.NEXT_PUBLIC_CLIENT_URL}/api/discover/${topic}`);
    videos = data;
  } else {
    const { data } = await axios.get<IVideo[]>(`${process.env.NEXT_PUBLIC_CLIENT_URL}/api/post`);
    videos = data;
  }

  return {
    props: {
      videos,
    },
  };
};

export default Home;
