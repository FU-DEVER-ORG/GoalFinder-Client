import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { checkToken } from '@/utils/checkToken';

import AuthLayout from '@/components/core/layouts/AuthLayout';
import { constants } from '@/settings';

export default async function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = getCookie(constants.ACCESS_TOKEN, { cookies });
  console.log(token);
  console.log(token);

  const isAuth = await checkToken(token);

  if (isAuth) {
    redirect('/');
  }

  return <AuthLayout>{children}</AuthLayout>;
}
