import React from 'react';
import Head from 'next/head';

import MainLayout from '../layouts/mainLayout';

import Header from '../components/header';
import Stopwatch from '../components/stopwatch';

const StopwatchPage = () => (
  <MainLayout>
    <Head>
      <title>Stopwatch</title>
    </Head>
    <Header>Stopwatch</Header>
    <Stopwatch />
  </MainLayout>
);

export default StopwatchPage;
