import Header from '../../components/Header';

const New = (): JSX.Element => (
  <div>
    <Header />
    <div className="container w-11/12 mx-auto mt-6 xl:w-1/4 lg:w-1/3 md:w-1/2">
      <p className="font-medium text-2xl">NEW DEVICE</p>
      <p className="text-sm text-light-secondary-text">
        Please fill out fields
      </p>
      <div className="px-4 py-8 md:p-8 border border-border border-opacity-10 rounded-sm mt-4">
        <form className="flex flex-col">
          <label className="text-light-secondary-text">Name</label>
          <input
            className="text-main border-b outline-none placeholder-main"
            autoComplete="none"
          />
          <label className="mt-4 text-light-secondary-text">Description</label>
          <input className="text-main border-b outline-none placeholder-main" />
          <label className="mt-4 text-light-secondary-text">Latitude</label>
          <input className="text-main border-b outline-none placeholder-main" />
          <label className="mt-4 text-light-secondary-text">Longitude</label>
          <input className="text-main border-b outline-none placeholder-main" />
          <label className="mt-4 text-light-secondary-text">Field 1</label>
          <input className="text-main border-b outline-none placeholder-main" />
        </form>
      </div>
      <div className="text-center">
        <button className="bg-main w-48 mx-auto py-2 rounded-sm text-white mt-4">
          CREATE
        </button>
      </div>
    </div>
  </div>
);
export default New;
