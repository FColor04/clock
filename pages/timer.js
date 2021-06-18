import React from "react";
import Head from "next/head";

import MainLayout from "../layouts/mainLayout";

import Header from "../components/header";

const TimerPage = () => (
  <MainLayout>
    <Head>
      <title>Timer</title>
    </Head>
    <Header>Timer</Header>
    <div></div>
  </MainLayout>
);

export default TimerPage;
