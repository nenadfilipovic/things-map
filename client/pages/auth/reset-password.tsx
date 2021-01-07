import Header from '../../components/Header';

const ResetPassword = () => (
  <div>
    <Header />
    <div className="container w-11/12 mx-auto mt-6 xl:w-1/4 lg:w-1/3 md:w-1/2">
      <p className="font-medium text-2xl">RESET PASSWORD</p>
      <p className="text-sm text-light-secondary-text">
        Please provide your reset password token
      </p>
      <div className="px-4 py-8 md:p-8 border border-border border-opacity-10 rounded-sm mt-4">
        <form className="flex flex-col">
          <label className="text-light-secondary-text">
            Reset password token
          </label>
          <input
            className="text-main border-b outline-none placeholder-main"
            autoComplete="none"
          />
        </form>
      </div>
      <div className="text-center">
        <button className="bg-main w-48 mx-auto py-2 rounded-sm text-white mt-4">
          RESET
        </button>
        <p className="text-sm mt-2 text-light-secondary-text">
          Back to <span className="text-main">Sign in</span>
        </p>
      </div>
    </div>
  </div>
);

export default ResetPassword;
