import { useSignOutMutation } from '../../types';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from '../Logo';

const Sidebar = ({ open, setOpen }: { open: boolean; setOpen: boolean }) => {
  const [signOutMutation] = useSignOutMutation();

  const router = useRouter();
  return (
    <div>
      <div
        onClick={() => {
          setOpen();
        }}
        style={{ zIndex: 2000 }}
        className={`absolute inset-0 bg-black opacity-50 ${
          open ? 'block' : 'hidden'
        }`}
      ></div>
      <div className="relative" style={{ zIndex: 2000 }}>
        <aside
          className={`p-4 transform top-0 md:hidden left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-0 ${
            open ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <Logo />
          <ul className="flex flex-col mt-4">
            <li>
              <Link href="/">
                <a className="flex items-center text-lg">
                  <svg
                    className="h-3 w-3 mr-1"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m503.87 231.43-236.8-226.98c-6.1836-5.9336-15.957-5.9336-22.141 0l-237.04 227.22c-5.0156 5.0156-7.8945 11.926-7.8945 18.988 0 14.699 11.969 26.668 26.668 26.668h37.332v202.66c0 17.664 14.336 32 32 32h90.668c8.832 0 16-7.168 16-16v-138.66c0-2.9258 2.3867-5.3359 5.332-5.3359h96c2.9219 0 5.332 2.4102 5.332 5.3359v138.66c0 8.832 7.168 16 16 16h90.668c17.664 0 32-14.336 32-32v-202.66h37.332c14.699 0 26.668-11.969 26.668-26.668 0-7.0625-2.8789-13.973-8.1289-19.223z" />
                  </svg>
                  Home
                </a>
              </Link>
            </li>

            <li>
              <Link href="/profile">
                <a className="flex items-center text-lg">
                  <svg
                    className="h-3 w-3 mr-1"
                    viewBox="0 0 428.97 428.98"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M414.101 373.866l-106.246-56.188-4.907-15.332c-1.469-5.137-3.794-10.273-8.576-11.623-1.519-.428-3.441-3.201-3.689-5.137l-2.836-29.813c-.156-2.553.868-4.844 2.216-6.453 8.14-9.754 12.577-21.051 14.454-33.967.944-6.494 4.323-12.483 6.059-18.879l6.812-35.649c.711-4.681.573-8.289-4.659-10.103-1.443-.503-2.699-2.894-2.699-6.479l.069-67.264c-1.111-16.28-9.731-28.869-21.957-37.631-23.354-16.739-65.175-8.977-51.526-36.281.806-1.607.549-4.399-5.062-2.335-20.936 7.703-76.701 28.057-90.71 38.616-12.538 9.449-20.844 21.351-21.957 37.631l.069 67.264c0 2.96-1.255 5.976-2.7 6.479-5.233 1.813-5.37 5.422-4.659 10.103l6.814 35.649c1.732 6.396 5.113 12.386 6.058 18.879 1.875 12.916 6.315 24.213 14.453 33.967 1.347 1.609 2.372 3.9 2.216 6.453l-2.836 29.813c-.249 1.936-2.174 4.709-3.69 5.137-4.783 1.35-7.109 6.486-8.577 11.623l-4.909 15.332-106.25 56.188c-2.742 1.449-4.457 4.297-4.457 7.397v39.343c0 4.621 3.748 8.368 8.37 8.368h391.4c4.622 0 8.37-3.747 8.37-8.368v-39.343c-.002-3.1-1.717-5.948-4.458-7.397z" />
                  </svg>
                  Profile
                </a>
              </Link>
            </li>
            <li>
              <Link href="/devices">
                <a className="flex items-center text-lg">
                  <svg
                    className="h-3 w-3 mr-1"
                    viewBox="0 0 384 384"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M336 48h-80V0h-32v48h-64V0h-32v48H48v80H0v32h48v64H0v32h48v80h80v48h32v-48h64v48h32v-48h80v-80h48v-32h-48v-64h48v-32h-48zm-32 176v80H80V80h224zm0 0" />
                    <path d="m129.37 208 86.629-86.629 22.629 22.629-86.629 86.625zm40 40 62.625-62.625 22.629 22.629-62.629 62.625z" />
                  </svg>
                  Devices
                </a>
              </Link>
            </li>
            <li>
              <button
                className="flex items-center text-lg"
                onClick={() => {
                  signOutMutation()
                    .then(() => {
                      router.push('/auth/sign-in');
                      return;
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                <svg
                  className="h-3 w-3 mr-1"
                  viewBox="0 0 30.143 30.143"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.034 2.357v3.824c3.482 1.798 5.869 5.427 5.869 9.619 0 5.98-4.848 10.83-10.828 10.83-5.982 0-10.832-4.85-10.832-10.83 0-3.844 2.012-7.215 5.029-9.136V2.689C4.245 4.918.731 9.945.731 15.801c0 7.921 6.42 14.342 14.34 14.342 7.924 0 14.342-6.421 14.342-14.342-.001-6.177-3.912-11.422-9.379-13.444z" />
                  <path d="M14.795 17.652c1.576 0 1.736-.931 1.736-2.076V2.08c0-1.148-.16-2.08-1.736-2.08-1.57 0-1.732.932-1.732 2.08v13.496c-.001 1.146.162 2.076 1.732 2.076z" />
                </svg>
                Logout
              </button>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
