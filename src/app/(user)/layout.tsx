import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { checkToken } from '@/utils/checkToken';

import MainLayout from '@/components/core/layouts/MainLayout';

export default async function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = getCookie('next_token', { cookies });
  console.log(token);

  const isAuth = await checkToken(token);

  // if (!isAuth) {
  //   redirect('sign-in');
  // }

  return <MainLayout>{children}</MainLayout>;
}
