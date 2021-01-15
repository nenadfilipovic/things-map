import Header from '../../components/Header';
import {
  useVerifyEmailMutation,
  useResendVerifyEmailMutation,
} from '../../types';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

const VerifyEmail = (): JSX.Element => {
  const router = useRouter();
  const [
    resendVerifyEmailMutation,
    { data: resendData },
  ] = useResendVerifyEmailMutation();
  const { register, handleSubmit } = useForm();
  const [verifyEmailMutation, { data }] = useVerifyEmailMutation();
  const onSubmit = (info) => {
    verifyEmailMutation({ variables: { ...info } });
    if (data?.verifyEmail?.errors?.length < 1) {
      redirect();
    }
  };

  function redirect() {
    router.push('sign-in');
  }
  return (
    <div>
      <Header />
      <div className="container w-11/12 mx-auto mt-6 xl:w-1/4 lg:w-1/3 md:w-1/2">
        <p className="font-medium text-2xl">VERIFY EMAIL</p>
        <p className="text-sm text-light-secondary-text">
          Please provide your verify email token
        </p>
        <p>{data?.verifyEmail?.message}</p>
        {data?.verifyEmail?.errors?.map((error) => (
          <p className="text-red-700" key={error?.message}>
            {error?.message}
          </p>
        ))}
        {resendData?.resendVerifyEmail?.errors?.map((error) => (
          <p className="text-red-700" key={error?.message}>
            {error?.message}
          </p>
        ))}
        <div className="px-4 py-8 md:p-8 border border-border border-opacity-10 rounded-sm mt-4">
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <label className="text-light-secondary-text">
              Verify email token
            </label>
            <input
              className="text-main border-b outline-none placeholder-main"
              autoComplete="none"
              ref={register({ required: true })}
              name="verifyEmailToken"
            />
            <div className="text-center space-x-2">
              <button
                type="submit"
                className="bg-main w-48 mx-auto py-2 rounded-sm text-white mt-4"
              >
                VERIFY
              </button>
              <button
                onClick={() =>
                  resendVerifyEmailMutation({
                    variables: { email: router.query.email as string },
                  })
                }
                className="bg-border w-48 mx-auto py-2 rounded-sm text-white mt-4"
              >
                RESEND TOKEN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
