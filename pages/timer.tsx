import React from "react";
import Head from "next/head";

import MainLayout from "../layouts/mainLayout";

import Header from "../components/header";
import Timer from "../components/timer";

const TimerPage = () => (
  <MainLayout>
    <Head>
      <title>Timer</title>
    </Head>
    <Header>Timer</Header>
    <Timer></Timer>
  </MainLayout>
);

export default TimerPage;
