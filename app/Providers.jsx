'use client'; // This is crucial!

import { SessionProvider } from 'next-auth/react';

export default function Providers({ children, session }) {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}