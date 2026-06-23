'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '../lib/auth';

export function GuestPage({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) router.replace('/dashboard');
  }, [loading, router, user]);

  if (loading) {
    return <section className="card narrow"><p>Checking your session...</p></section>;
  }

  if (user) {
    return <section className="card narrow"><p>Redirecting to your dashboard...</p></section>;
  }

  return <>{children}</>;
}
