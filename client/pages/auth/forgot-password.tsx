import Header from '../../components/Header';
import Link from 'next/link';
import { useForgotPasswordMutation } from '../../types';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

const ForgotPassword = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [forgotPasswordMutation, { data }] = useForgotPasswordMutation();
  const onSubmit = (info) => {
    forgotPasswordMutation({ variables: { ...info } });
    router.push('reset-password');
  };
  return (
    <div>
      <Header />
      <div className="container w-11/12 mx-auto mt-6 xl:w-1/4 lg:w-1/3 md:w-1/2">
        <p className="font-medium text-2xl">FORGOT PASSWORD</p>
        <p className="text-sm text-light-secondary-text">
          Enter your email address to reset password
        </p>
        <p>{data?.forgotPassword?.message}</p>
        <div className="px-4 py-8 md:p-8 border border-border border-opacity-10 rounded-sm mt-4">
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <label className="text-light-secondary-text">Email address</label>
            <input
              className="text-main border-b outline-none placeholder-main"
              autoComplete="none"
              name="email"
              ref={register({ required: true })}
            />
            <div className="text-center flex flex-col">
              <button
                type="submit"
                className="bg-main w-48 mx-auto py-2 rounded-sm text-white mt-4"
              >
                SUBMIT
              </button>
              <Link href="/auth/sign-in">
                <a className="text-sm mt-2 text-light-secondary-text">
                  Back to <span className="text-main">Sign in</span>
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
