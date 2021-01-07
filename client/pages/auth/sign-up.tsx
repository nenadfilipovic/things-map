import Header from '../../components/Header';

const SignUp = () => (
  <div>
    <Header />
    <div className="container w-11/12 mx-auto mt-6 xl:w-1/4 lg:w-1/3 md:w-1/2">
      <p className="font-medium text-2xl">SIGN UP</p>
      <p className="text-sm text-light-secondary-text">
        All fields are required
      </p>
      <div className="px-4 py-8 md:p-8 border border-border border-opacity-10 rounded-sm mt-4">
        <form className="flex flex-col">
          <label className="text-light-secondary-text">First name</label>
          <input
            className="text-main border-b outline-none placeholder-main"
            autoComplete="none"
          />
          <label className="mt-4 text-light-secondary-text">Last name</label>
          <input
            className="text-main border-b outline-none placeholder-main"
            type="password"
          />
          <label className="mt-4 text-light-secondary-text">Username</label>
          <input
            className="text-main border-b outline-none placeholder-main"
            type="password"
          />
          <label className="mt-4 text-light-secondary-text">
            Email address
          </label>
          <input
            className="text-main border-b outline-none placeholder-main"
            type="password"
          />
          <label className="mt-4 text-light-secondary-text">Password</label>
          <input
            className="text-main border-b outline-none placeholder-main"
            type="password"
          />
        </form>
      </div>
      <div className="text-center">
        <button className="bg-main w-48 mx-auto py-2 rounded-sm text-white mt-4">
          SIGN UP
        </button>
        <p className="text-sm mt-2 text-light-secondary-text">
          Have an account? <span className="text-main">Sign in</span>
        </p>
      </div>
    </div>
  </div>
);

export default SignUp;
