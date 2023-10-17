import { useEffect } from 'react';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/') {
      router.push('src/components/dashboard/HomePage');
    }
  });

  return null;
}
