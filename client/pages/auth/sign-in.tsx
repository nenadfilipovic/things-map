import Header from '../../components/Header';
import Link from 'next/link';

const SignIn = () => (
  <div>
    <Header />
    <div className="container w-11/12 mx-auto mt-6 xl:w-1/4 lg:w-1/3 md:w-1/2">
      <p className="font-medium text-2xl">SIGN IN</p>
      <p className="text-sm text-light-secondary-text">
        Please provide your credentials
      </p>
      <div className="px-4 py-8 md:p-8 border border-border border-opacity-10 rounded-sm mt-4">
        <form className="flex flex-col">
          <label className="text-light-secondary-text">Email or username</label>
          <input
            className="text-main border-b outline-none placeholder-main"
            autoComplete="none"
          />
          <label className="mt-4 text-light-secondary-text">Password</label>
          <input
            className="text-main border-b outline-none placeholder-main"
            type="password"
          />
        </form>
        <div className="text-right">
          <Link href="/auth/forgot-password">
            <a className="text-sm mt-1 text-light-secondary-text">
              Forgot password?
            </a>
          </Link>
        </div>
      </div>
      <div className="text-center flex flex-col">
        <button className="bg-main w-48 mx-auto py-2 rounded-sm text-white mt-4">
          SIGN IN
        </button>
        <Link href="/auth/sign-up">
          <a className="text-sm mt-2 text-light-secondary-text">
            Dont have account? <span className="text-main">Sign up</span>
          </a>
        </Link>
      </div>
    </div>
  </div>
);

export default SignIn;
