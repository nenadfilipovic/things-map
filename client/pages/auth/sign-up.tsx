import Header from '../../components/Header';
import Link from 'next/link';
import { useSignUpMutation } from '../../types';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

const SignUp = (): JSX.Element => {
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm();
  const [signUpMutation, { data, loading, error }] = useSignUpMutation();

  const onSubmit = (info) => {
    signUpMutation({ variables: { ...info } });
    if (data?.signUp?.errors?.length < 1) {
      redirect(info);
    }
  };

  function redirect(info) {
    router.push({
      pathname: 'verify-email',
      query: { email: info.email },
    });
  }

  return (
    <div>
      <Header />
      <div className="container w-11/12 mx-auto mt-6 xl:w-1/4 lg:w-1/3 md:w-1/2">
        <p className="font-medium text-2xl">SIGN UP</p>
        <p className="text-sm text-light-secondary-text">
          All fields are required
        </p>
        <p>{data?.signUp?.message}</p>
        {data?.signUp?.errors?.map((error) => (
          <p className="text-red-700" key={error?.message}>
            {error?.message}
          </p>
        ))}
        <div className="px-4 py-8 md:p-8 border border-border border-opacity-10 rounded-sm mt-4">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <label className="text-light-secondary-text">First name</label>
            <input
              name="firstName"
              className="text-main border-b outline-none placeholder-main"
              autoComplete="none"
              ref={register({ required: true })}
            />
            <label className="mt-4 text-light-secondary-text">Last name</label>
            <input
              name="lastName"
              className="text-main border-b outline-none placeholder-main"
              ref={register({ required: true })}
            />
            <label className="mt-4 text-light-secondary-text">Username</label>
            <input
              name="username"
              className="text-main border-b outline-none placeholder-main"
              ref={register({ required: true })}
            />
            <label className="mt-4 text-light-secondary-text">
              Email address
            </label>
            <input
              name="email"
              className="text-main border-b outline-none placeholder-main"
              ref={register({ required: true })}
            />
            <label className="mt-4 text-light-secondary-text">Password</label>
            <input
              name="password"
              className="text-main border-b outline-none placeholder-main"
              type="password"
              ref={register({ required: true })}
            />
            <div className="text-center flex flex-col">
              <button
                type="submit"
                className="bg-main w-48 mx-auto py-2 rounded-sm text-white mt-4"
              >
                SIGN UP
              </button>
              <Link href="/auth/sign-in">
                <a className="text-sm mt-2 text-light-secondary-text">
                  Have an account? <span className="text-main">Sign in</span>
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
