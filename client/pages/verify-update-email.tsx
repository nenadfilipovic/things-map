import Header from '../components/Header';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useVerifyUpdateEmailMutation } from '../types';

const VerifyUpdateEmail = (): JSX.Element => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [verifyUpdateEmailMutation] = useVerifyUpdateEmailMutation();
  const onSubmit = (info) => {
    verifyUpdateEmailMutation({ variables: { ...info } });
    router.push('/auth/sign-in');
  };
  return (
    <div>
      <Header />
      <div className="container w-11/12 mx-auto mt-6 xl:w-1/4 lg:w-1/3 md:w-1/2">
        <p className="font-medium text-2xl">VERIFY UPDATE EMAIL</p>
        <p className="text-sm text-light-secondary-text">
          Please provide your verify update email token
        </p>
        <div className="px-4 py-8 md:p-8 border border-border border-opacity-10 rounded-sm mt-4">
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <label className="text-light-secondary-text">
              Verify update email token
            </label>
            <input
              className="text-main border-b outline-none placeholder-main"
              autoComplete="none"
              ref={register({ required: true })}
              name="verifyUpdateEmailToken"
            />
            <div className="text-center space-x-2">
              <button
                type="submit"
                className="bg-main w-48 mx-auto py-2 rounded-sm text-white mt-4"
              >
                VERIFY
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyUpdateEmail;
