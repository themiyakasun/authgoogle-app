'use client';

import { collection, query } from 'firebase/firestore';
import { getProviders, signIn, signOut, useSession } from 'next-auth/react';
import { db } from '@firebase.config';
import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';

const Home = () => {
  const session = useSession({
    required: true,
  });
  const [users, loading, error] = useCollection(query(collection(db, 'users')));
  return (
    <div className='p-8'>
      <div>{users?.docs[0].data().email}</div>
      <button onClick={() => signIn()}>Sign in</button>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default Home;
