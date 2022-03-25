import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { supabase } from '../utils/supabaseClient';

const Callback = () => {
  const router = useRouter();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, sessionState) => {
        if (sessionState?.user) {
          router.push('/account');
        }
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return null;
};

export default Callback;