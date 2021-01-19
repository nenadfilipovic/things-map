import Header from '../../components/Header';
import Link from 'next/link';
import { useDevicesQuery } from '../../types';
import { useState, useEffect } from 'react';
import Device from '../../components/Device';
import { useRouter } from 'next/router';

const Devices = ({ isAuth }: { isAuth: boolean }): JSX.Element => {
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const { data, loading } = useDevicesQuery({ ssr: false });
  const [deviceData, setDeviceData] = useState([]);
  const [deviceList, setDeviceList] = useState([]);
  const [input, setInput] = useState('');
  const [createdDate, setCreatedDate] = useState(1);
  const [orderBy, setOrderBy] = useState('name');
  const router = useRouter();

  useEffect(() => {
    const devices = data?.devices?.edges;

    if (!isAuth) {
      router.push('/auth/sign-in');
    }

    setDeviceData(devices);
    let filtered = devices
      ?.filter((device) => device.node.name.toLowerCase().includes(input))
      .filter((device) => {
        const d = new Date();
        d.setDate(d.getDate() - createdDate);

        return device.node.createdDate > d.toISOString();
      });

    const sortBy = (type: string) => {
      if (type === 'name') {
        return filtered?.sort((a, b) => a.node.name.localeCompare(b.node.name));
      } else if (type === 'date') {
        return filtered?.sort(
          (a, b) => b.node.createdDate - a.node.createdDate,
        );
      }
    };

    filtered = sortBy(orderBy);

    setDeviceList(filtered);
  }, [isAuth, data, input, createdDate, orderBy]);

  const options = [
    { value: 1, label: 'Yesterday' },
    { value: 30, label: 'Month' },
    { value: 365, label: 'Year' },
  ];
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
      <div className="p-4">
        <div className="flex">
          <Link href="/devices/new">
            <button className="bg-main w-24 flex items-center justify-center py-2 rounded-sm text-white mr-2">
              Create
              <svg
                className="h-4 w-4 text-white ml-2"
                viewBox="0 0 945.47 945.47"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m38.348 944.29 183.3-60.1c6.7-2.2 12.8-5.9 17.7-10.9l429.6-432.1-171.1-171.2-428.5 431c-5.6 5.7-9.6 12.8-11.6 20.601l-49.2 195c-4.399 17.5 12.601 33.399 29.801 27.699z" />
                <path d="M921.748 102.49l-86.601-86.6c-20.899-20.9-63.3-21.2-83.8-.8l-211.2 212.4 171.2 171.2 66.5-66.9 32.4 32.6c7.8 7.8 7.7 20.5 0 28.3l-52.5 52.4-42.5 42.399-177.9 177.4c-15.6 15.6-15.7 40.899-.1 56.6 7.8 7.8 18.1 11.7 28.3 11.7s20.4-3.9 28.3-11.7l272.9-272.3c39-38.9 39.1-102.3.2-141.3l-32.7-32.9 88.2-88.7c20.501-20.498 20.2-62.898-.699-83.799z" />
              </svg>
            </button>
          </Link>
          <button
            onClick={() => setFilterMenuOpen(!filterMenuOpen)}
            className="bg-border w-24 flex items-center justify-center py-2 rounded-sm text-white"
          >
            <svg
              className="w-4 h-4 text-white mr-2"
              viewBox="0 0 459 459"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M178.5 382.5h102v-51h-102v51zM0 76.5v51h459v-51H0zM76.5 255h306v-51h-306v51z" />
            </svg>
            Filter
          </button>
        </div>
        {filterMenuOpen && (
          <div className="bg-light-secondary-background max-w-max p-4 my-4 flex space-x-4">
            <div className="flex flex-col">
              <label>Search</label>
              <input
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                value={input}
                className="p-2 border-border border-opacity-10 border text-light-secondary-text"
                placeholder="Search..."
              />
            </div>
            <div className="flex flex-col">
              <label>Created since</label>
              <select
                value={createdDate}
                onChange={(e) => setCreatedDate(e.target.value)}
                className="h-full"
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label>Order</label>
              <select
                value={orderBy}
                onChange={(e) => setOrderBy(e.target.value)}
                className="h-full"
              >
                <option value="name">Name</option>
                <option value="date">Date</option>
              </select>
            </div>
          </div>
        )}
        <p className="text-xl">Devices</p>
        <p className="text-sm">All available devices</p>
        {deviceList && deviceList.length > 0 ? (
          <div className="flex space-x-1">
            {deviceList.map((edge) => (
              <Device key={edge?.node?.id} props={edge?.node} />
            ))}
          </div>
        ) : (
          <div className="p-5 text-main text-xl flex items-center justify-center">
            <svg
              className="h-10 w-10 mr-2"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m256 0c-141.5 0-256 114.51-256 256 0 141.5 114.51 256 256 256 141.5 0 256-114.51 256-256 0-141.5-114.51-256-256-256zm0 472c-119.39 0-216-96.615-216-216 0-119.39 96.615-216 216-216 119.39 0 216 96.615 216 216 0 119.39-96.615 216-216 216z" />
              <path d="m256 128.88c-11.046 0-20 8.954-20 20v128.79c0 11.046 8.954 20 20 20s20-8.954 20-20v-128.79c0-11.046-8.954-20-20-20z" />
              <circle cx="256" cy="349.16" r="27" />
            </svg>
            no devices
          </div>
        )}
      </div>
    </div>
  );
};

export default Devices;

export async function getServerSideProps(context) {
  let isAuth = false;
  if (context.req.cookies.payload) {
    isAuth = true;
  }

  return {
    props: { isAuth },
  };
}
