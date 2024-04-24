import SignIn from '@/components/modules/SignIn/Main';

function Page() {
  // const router = useRouter();
  // const handleSignIn = async () => {
  //   try {
  //     const data = {
  //       username: 'ledinhdangkhoa10a9@gmail.com',
  //       password: 'Admin123@',
  //       rememberMe: true,
  //     };
  //     // await signIn(data);
  //     const res: any = await postRequest(
  //       'https://fudeverwebapi.io.vn/api/Auth/sign-in',
  //       {
  //         data,
  //       },
  //     );
  //     console.log(res?.body?.accessToken);

  //     setCookie('next_token', res?.body?.accessToken);
  //     router.push('/');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <SignIn/>
  );
}

export default Page;
