import React from "react";
import Head from "next/head";

import MainLayout from "../layouts/mainLayout";

import Clock from "../components/clock";
import Header from "../components/header";

const ClockPage = () => (
  <MainLayout>
    <Head>
      <title>Clock</title>
    </Head>
    <Header>Clock</Header>
    <Clock></Clock>
  </MainLayout>
);

export default ClockPage;
