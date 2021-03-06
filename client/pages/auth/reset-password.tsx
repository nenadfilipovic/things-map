import Header from '../../components/Header';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useResetPasswordMutation } from '../../types';

const ResetPassword = (): JSX.Element => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [resetPasswordMutation, { data }] = useResetPasswordMutation();
  const onSubmit = (info) => {
    resetPasswordMutation({ variables: { ...info } });
    router.push('sign-in');
  };
  return (
    <div>
      <Header />
      <div className="container w-11/12 mx-auto mt-6 xl:w-1/4 lg:w-1/3 md:w-1/2">
        <p className="font-medium text-2xl">RESET PASSWORD</p>
        <p className="text-sm text-light-secondary-text">
          Please provide your reset password token
        </p>
        {data?.resetPassword?.errors?.map((error) => (
          <p className="text-red-700" key={error?.message}>
            {error?.message}
          </p>
        ))}
        <div className="px-4 py-8 md:p-8 border border-border border-opacity-10 rounded-sm mt-4">
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <label className="text-light-secondary-text">
              Reset password token
            </label>
            <input
              className="text-main border-b outline-none placeholder-main"
              autoComplete="none"
              ref={register({ required: true })}
              name="resetPasswordToken"
            />
            <div className="text-center flex flex-col">
              <button
                type="submit"
                className="bg-main w-48 mx-auto py-2 rounded-sm text-white mt-4"
              >
                RESET
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

export default ResetPassword;
