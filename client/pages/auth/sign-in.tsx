import Header from '../../components/Header';
import Link from 'next/link';
import { useSignInByEmailMutation } from '../../types';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const SignIn = ({ isAuth }: { isAuth: boolean }): JSX.Element => {
  const [signInByEmailMutation, { data }] = useSignInByEmailMutation();
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  useEffect(() => {
    if (isAuth) {
      router.push('/');
    }
  }, [isAuth]);

  const onSubmit = (info) => {
    signInByEmailMutation({ variables: { ...info } })
      .then(() => {
        router.push('/');
        return;
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Header />
      <div className="container w-11/12 mx-auto mt-6 xl:w-1/4 lg:w-1/3 md:w-1/2">
        <p className="font-medium text-2xl">SIGN IN</p>
        <p className="text-sm text-light-secondary-text">
          Please provide your credentials
        </p>
        <p>{data?.signInByEmail?.message}</p>
        {data?.signInByEmail?.errors?.map((error) => (
          <p className="text-red-700" key={error?.message}>
            {error?.message}
          </p>
        ))}
        <div className="px-4 py-8 md:p-8 border border-border border-opacity-10 rounded-sm mt-4">
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <label className="text-light-secondary-text">Email</label>
            <input
              className="text-main border-b outline-none placeholder-main"
              autoComplete="none"
              ref={register({ required: true })}
              name="email"
            />
            <label className="mt-4 text-light-secondary-text">Password</label>
            <input
              className="text-main border-b outline-none placeholder-main"
              type="password"
              ref={register({ required: true })}
              name="password"
            />
            <div className="text-right">
              <Link href="/auth/forgot-password">
                <a className="text-sm mt-1 text-light-secondary-text">
                  Forgot password?
                </a>
              </Link>
            </div>
            <div className="text-center flex flex-col">
              <button
                type="submit"
                className="bg-main w-48 mx-auto py-2 rounded-sm text-white mt-4"
              >
                SIGN IN
              </button>
              <Link href="/auth/sign-up">
                <a className="text-sm mt-2 text-light-secondary-text">
                  Dont have account? <span className="text-main">Sign up</span>
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

export async function getServerSideProps(context) {
  let isAuth = false;
  if (context.req.cookies.payload) {
    isAuth = true;
  }

  return {
    props: { isAuth },
  };
}
