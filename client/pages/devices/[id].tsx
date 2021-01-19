import Header from '../../components/Header';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';
import { useDeviceQuery, useModifyDeviceMutation } from '../../types';
import { device } from '../../apollo/queries';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { devices } from '../../apollo/queries';
import { useEffect } from 'react';

const Device = ({ isAuth }: { isAuth: boolean }): JSX.Element => {
  const Map = dynamic(() => import('../../components/Map'), { ssr: false });
  const Chart = dynamic(() => import('../../components/Chart'), { ssr: false });
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (!isAuth) {
      router.push('/auth/sign-in');
    }
  }, [isAuth]);

  const { data, loading } = useDeviceQuery({
    variables: { id: router.query.id },
  });
  const [modifyDeviceMutation] = useModifyDeviceMutation();

  const onSubmit = (info) => {
    modifyDeviceMutation({
      variables: {
        id: router.query.id,
        name: info.name,
        description: info.description,
      },
      refetchQueries: [
        { query: device, variables: { id: router.query.id } },
        { query: devices },
      ],
    });
  };

  const spinner = (
    <div>
      <svg
        className="h-4 w-4"
        viewBox="0 0 26.349 26.35"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="13.792" cy="3.082" r="3.082" />
        <circle cx="13.792" cy="24.501" r="1.849" />
        <circle cx="6.219" cy="6.218" r="2.774" />
        <circle cx="21.365" cy="21.363" r="1.541" />
        <circle cx="3.082" cy="13.792" r="2.465" />
        <circle cx="24.501" cy="13.791" r="1.232" />
        <path d="M4.694 19.84c-.843.843-.843 2.207 0 3.05.842.843 2.208.843 3.05 0 .843-.843.843-2.207 0-3.05-.842-.844-2.207-.852-3.05 0z" />
        <circle cx="21.364" cy="6.218" r=".924" />
      </svg>
    </div>
  );

  return (
    <div>
      <Header />
      {loading && spinner}
      {data?.device ? (
        <div className="p-4 flex">
          <div className="w-6/12">
            <p className="text-xl">Details</p>
            <p className="text-sm">General device information</p>
            <div className="pl-8 mt-4 border-l-2 border-main">
              <div className="flex items-center mb-2 mr-2">
                <svg
                  className="mr-2 w-4 h-4"
                  viewBox="0 0 428.97 428.98"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M414.101 373.866l-106.246-56.188-4.907-15.332c-1.469-5.137-3.794-10.273-8.576-11.623-1.519-.428-3.441-3.201-3.689-5.137l-2.836-29.813c-.156-2.553.868-4.844 2.216-6.453 8.14-9.754 12.577-21.051 14.454-33.967.944-6.494 4.323-12.483 6.059-18.879l6.812-35.649c.711-4.681.573-8.289-4.659-10.103-1.443-.503-2.699-2.894-2.699-6.479l.069-67.264c-1.111-16.28-9.731-28.869-21.957-37.631-23.354-16.739-65.175-8.977-51.526-36.281.806-1.607.549-4.399-5.062-2.335-20.936 7.703-76.701 28.057-90.71 38.616-12.538 9.449-20.844 21.351-21.957 37.631l.069 67.264c0 2.96-1.255 5.976-2.7 6.479-5.233 1.813-5.37 5.422-4.659 10.103l6.814 35.649c1.732 6.396 5.113 12.386 6.058 18.879 1.875 12.916 6.315 24.213 14.453 33.967 1.347 1.609 2.372 3.9 2.216 6.453l-2.836 29.813c-.249 1.936-2.174 4.709-3.69 5.137-4.783 1.35-7.109 6.486-8.577 11.623l-4.909 15.332-106.25 56.188c-2.742 1.449-4.457 4.297-4.457 7.397v39.343c0 4.621 3.748 8.368 8.37 8.368h391.4c4.622 0 8.37-3.747 8.37-8.368v-39.343c-.002-3.1-1.717-5.948-4.458-7.397z" />
                </svg>
                <div>
                  <p className="text-sm">Owner</p>
                  <p className="text-main pl-2 border-b outline-none w-full">
                    {data?.device?.owner?.username}
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-2 mr-2">
                <svg
                  className="h-4 w-4 mr-2"
                  viewBox="0 0 426.67 426.67"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M362.667 42.667h-89.28C264.64 17.92 241.173 0 213.333 0s-51.307 17.92-60.053 42.667H64c-23.573 0-42.667 19.093-42.667 42.667V384c0 23.573 19.093 42.667 42.667 42.667h298.667c23.573 0 42.667-19.093 42.667-42.667V85.333c-.001-23.573-19.094-42.666-42.667-42.666zm-149.334 0c11.733 0 21.333 9.493 21.333 21.333 0 11.84-9.6 21.333-21.333 21.333S192 75.84 192 64c0-11.84 9.6-21.333 21.333-21.333zM256 341.333H106.667v-42.667H256v42.667zM320 256H106.667v-42.667H320V256zm0-85.333H106.667V128H320v42.667z" />
                </svg>
                <div>
                  <p className="text-sm">Total entries</p>
                  <p className="text-main pl-2 border-b outline-none w-full">
                    {data?.device?.metadata?.lastEntryId}
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-2 mr-2">
                <svg
                  className="h-4 w-4 mr-2"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m448 64h-21.332v-42.668c0-11.773-9.5586-21.332-21.336-21.332h-21.332c-11.777 0-21.332 9.5586-21.332 21.332v42.668h-213.34v-42.668c0-11.773-9.5547-21.332-21.332-21.332h-21.332c-11.777 0-21.336 9.5586-21.336 21.332v42.668h-21.332c-35.285 0-64 28.715-64 64v320c0 35.285 28.715 64 64 64h384c35.285 0 64-28.715 64-64v-320c0-35.285-28.715-64-64-64zm21.332 384c0 11.754-9.5781 21.332-21.332 21.332h-384c-11.754 0-21.332-9.5781-21.332-21.332v-233.81h426.66z" />
                </svg>
                <div>
                  <p className="text-sm">Creation date</p>
                  <p className="text-main pl-2 border-b outline-none w-full">
                    {data?.device?.createdDate}
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-2 mr-2">
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 330 330"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M328.417 208.293l-40-80c-2.541-5.082-7.735-8.292-13.417-8.292-5.682 0-10.875 3.21-13.416 8.292l-44.868 89.735L158.98 69.565c-2.181-5.609-7.503-9.371-13.519-9.557-6.006-.173-11.559 3.243-14.081 8.708L75.402 190.001H15c-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15h70c5.851 0 11.168-3.402 13.619-8.714l45.201-97.934 57.2 147.085c2.15 5.53 7.358 9.273 13.285 9.547.233.011.466.016.699.016 5.659 0 10.864-3.194 13.413-8.292L275 168.542l26.584 53.167c3.705 7.41 12.716 10.414 20.124 6.708 7.41-3.704 10.413-12.714 6.709-20.124z" />
                </svg>
                <div>
                  <p className="text-sm">Last activity</p>
                  <p className="text-main pl-2 border-b outline-none w-full">
                    {data?.device?.metadata?.lastWriteDate}
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-2 mr-2">
                <svg
                  className="h-4 w-4 mr-2"
                  viewBox="0 0 286.05 286.05"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m78.493 143.18h-15.661v-0.125c0-43.623 34.809-80.328 79.201-80.122 21.642 0.098 41.523 8.841 55.691 23.135l25.843-24.931c-20.864-21.043-49.693-34.049-81.534-34.049-63.629 0-115.21 51.955-115.3 116.08h-15.84c-9.708 0-13.677 6.49-8.823 14.437l33.799 33.504c6.704 6.704 10.736 6.91 17.646 0l33.799-33.504c4.854-7.939 0.876-14.42-8.823-14.42zm205.48-13.945-33.799-33.433c-6.892-6.892-11.156-6.481-17.637 0l-33.799 33.433c-4.854 7.929-0.894 14.419 8.814 14.419h15.635c-0.25 43.337-34.943 79.72-79.183 79.514-21.633-0.089-41.505-8.814-55.691-23.099l-25.843 24.896c20.873 21.007 49.702 33.996 81.534 33.996 63.432 0 114.87-51.579 115.28-115.3h15.867c9.716-9e-3 13.676-6.508 8.822-14.428z" />
                </svg>
                <div>
                  <p className="text-sm">Last update</p>
                  <p className="text-main pl-2 border-b outline-none w-full">
                    {data?.device?.modifyDate}
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-2 mr-2">
                <svg
                  className="h-4 w-4 mr-2"
                  viewBox="0 0 469.33 469.33"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M248.533 192c-17.6-49.707-64.853-85.333-120.533-85.333-70.72 0-128 57.28-128 128s57.28 128 128 128c55.68 0 102.933-35.627 120.533-85.333h92.8v85.333h85.333v-85.333h42.667V192h-220.8zM128 277.333c-23.573 0-42.667-19.093-42.667-42.667S104.427 192 128 192s42.667 19.093 42.667 42.667-19.094 42.666-42.667 42.666z" />
                </svg>
                <div>
                  <p className="text-sm">Write key</p>
                  <p className="text-main pl-2 border-b outline-none w-full">
                    {data?.device?.metadata?.writeKey}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xl mt-2">Location</p>
              <p className="text-sm">Device geographical location</p>
              <div className="mt-4">
                <Map
                  height="300px"
                  width="300px"
                  center={[data?.device?.latitude, data?.device?.longitude]}
                  zoom={13}
                  fit={false}
                  enablePopup={false}
                />
              </div>
            </div>
          </div>
          <div className="w-6/12">
            <div>
              <p className="text-xl">Information</p>
              <p className="text-sm">Review or update device information</p>
              <div className="border-l-2 border-border border-opacity-10 pl-8 mt-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex items-center mb-2">
                    <div className="flex flex-col">
                      <label className="text-sm">Name</label>
                      <input
                        className="text-main pl-2 border-b outline-none w-full"
                        defaultValue={data?.device?.name}
                        ref={register}
                        name="name"
                      />
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="flex flex-col">
                      <label className="text-sm">Description</label>
                      <textarea
                        className="text-main pl-2 border-b outline-none"
                        defaultValue={data?.device?.description}
                        ref={register}
                        name="description"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-main w-32 flex items-center justify-center py-2 rounded-sm text-white mt-4"
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xl">Readings</p>
              <p className="text-sm">Graphical report from device</p>
              <div className="bg-light-secondary-background max-w-max p-4 my-4 flex space-x-4">
                <div className="flex flex-col">
                  <label>Start date</label>
                  <select className="h-full">
                    <option>Today</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label>End date</label>
                  <select className="h-full">
                    <option>Today</option>
                  </select>
                </div>
                <button className="bg-main w-24 flex items-center justify-center py-2 rounded-sm text-white mt-4">
                  Apply
                </button>
              </div>
              <div>
                <Chart />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Device;

export async function getServerSideProps(context) {
  let isAuth = false;
  if (context.req.cookies.payload) {
    isAuth = true;
  }

  return {
    props: { isAuth },
  };
}
