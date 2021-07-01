import React from 'react';
import Head from 'next/head';

import MainLayout from '../layouts/mainLayout';

import Header from '../components/header';

const AlarmPage = () => (
  <MainLayout>
    <Head>
      <title>Alarm</title>
    </Head>
    <Header>Alarms</Header>
    <div />
  </MainLayout>
);

export default AlarmPage;
