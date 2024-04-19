import { checkToken } from '@/utils/checkToken';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = getCookie('next_token', { cookies });
  console.log(token);
  console.log(token);

  const isAuth = await checkToken(token);

  if (isAuth) {
    redirect('/');
  }

  return <div>{children}</div>;
}
