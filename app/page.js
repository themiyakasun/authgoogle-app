'use client';

import { getProviders, signIn, signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const Home = () => {
  const session = useSession({
    required: true,
  });
  return (
    <div className='p-8'>
      <div>{session?.data?.user?.email}</div>
      <button onClick={() => signIn()}>Sign in</button>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default Home;
