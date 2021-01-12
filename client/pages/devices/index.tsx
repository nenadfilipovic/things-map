import Header from '../../components/Header';

const Devices = () => (
  <div>
    <Header />
    <div className="p-4">
      <div className="flex">
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
        <button className="bg-border w-24 flex items-center justify-center py-2 rounded-sm text-white">
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
      <div className="bg-light-secondary-background max-w-max p-4 my-4 flex space-x-4">
        <div className="flex flex-col">
          <label>Search</label>
          <input className="p-2 bg-border text-white" placeholder="Search..." />
        </div>
        <div className="flex flex-col">
          <label>Activity</label>
          <select className="h-full">
            <option>Today</option>
            <option>This month</option>
            <option>This year</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>Order</label>
          <select className="h-full">
            <option value="name">Name</option>
            <option value="date">Date</option>
          </select>
        </div>
      </div>
      <p className="text-xl">Devices</p>
      <p className="text-sm">All available devices</p>
      <div className="mt-4 w-2/12 bg-light-secondary-background p-4 rounded-sm">
        <div className="flex">
          <p className="text-main text-xl">Device name</p>
          <button className="ml-auto">
            <svg
              className="h-4 w-4"
              viewBox="0 0 515.56 515.56"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m496.68 212.21c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0m-193.33 0c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0m-193.33 0c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0" />
            </svg>
          </button>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-2"
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M27 0H3C1.35 0 0 1.351 0 3v24c0 1.648 1.35 3 3 3h24c1.65 0 3-1.352 3-3V3c0-1.649-1.35-3-3-3zM8.096 26.402H3.5v-4.088h4.596v4.088zm0-5.459H3.5v-4.086h4.596v4.086zM7.75 4.547c-.703 0-1.273-.569-1.273-1.273S7.047 2 7.75 2s1.273.569 1.273 1.273-.57 1.274-1.273 1.274zm6.479 21.855H9.634v-4.088h4.595v4.088zm0-5.459H9.634v-4.086h4.595v4.086zm0-5.455H9.634v-4.086h4.595v4.086zm-.502-12.215C13.727 2.569 14.297 2 15 2s1.273.569 1.273 1.273-.57 1.273-1.273 1.273-1.273-.568-1.273-1.273zm6.639 17.67H15.77v-4.086h4.597v4.086zm0-5.455H15.77v-4.086h4.597v4.086zm.611-12.215c0-.704.57-1.273 1.273-1.273s1.273.569 1.273 1.273-.57 1.273-1.273 1.273-1.273-.568-1.273-1.273zm5.523 17.67h-4.596v-4.086H26.5v4.086zm0-5.455h-4.596v-4.086H26.5v4.086z" />
            </svg>
            <div>
              <p className="text-sm">Device created</p>
              <p className="text-main text-sm">04/05/2020</p>
            </div>
          </div>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-2"
              enableBackground="new 0 0 500 500"
              version="1.1"
              viewBox="0 0 500 500"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m464.84 0h-429.69c-19.412 0-35.156 15.74-35.156 35.156v429.69c0 19.416 15.744 35.156 35.156 35.156h429.69c19.416 0 35.156-15.74 35.156-35.156v-429.69c0-19.416-15.74-35.156-35.156-35.156zm-342.7 397.62c-19.392 0-35.164-15.776-35.164-35.172 0-19.388 15.772-35.164 35.164-35.164s35.172 15.776 35.172 35.164c0 19.396-15.78 35.172-35.172 35.172zm0-105.47c-19.392 0-35.164-15.776-35.164-35.172 0-19.388 15.772-35.164 35.164-35.164s35.172 15.776 35.172 35.164c0 19.396-15.78 35.172-35.172 35.172zm0-105.47c-19.392 0-35.164-15.776-35.164-35.172 0-19.388 15.772-35.164 35.164-35.164s35.172 15.776 35.172 35.164c0 19.396-15.78 35.172-35.172 35.172zm297.18 188.31h-203.36c-6.472 0-11.72-5.248-11.72-11.72 0-6.476 5.248-11.72 11.72-11.72h203.36c6.472 0 11.72 5.244 11.72 11.72 0 6.472-5.248 11.72-11.72 11.72zm0-105.47h-203.36c-6.472 0-11.72-5.248-11.72-11.72 0-6.476 5.248-11.72 11.72-11.72h203.36c6.472 0 11.72 5.244 11.72 11.72 0 6.468-5.248 11.72-11.72 11.72zm0-105.47h-203.36c-6.472 0-11.72-5.248-11.72-11.72 0-6.476 5.248-11.72 11.72-11.72h203.36c6.472 0 11.72 5.244 11.72 11.72 0 6.468-5.248 11.72-11.72 11.72z" />
            </svg>
            <div>
              <p className="text-sm">Device description</p>
              <p className="text-main text-sm">
                Short description about device
              </p>
            </div>
          </div>
          <div className="pl-4 border-l-2 py-4 border-main">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                viewBox="0 0 330 330"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M328.417 208.293l-40-80c-2.541-5.082-7.735-8.292-13.417-8.292-5.682 0-10.875 3.21-13.416 8.292l-44.868 89.735L158.98 69.565c-2.181-5.609-7.503-9.371-13.519-9.557-6.006-.173-11.559 3.243-14.081 8.708L75.402 190.001H15c-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15h70c5.851 0 11.168-3.402 13.619-8.714l45.201-97.934 57.2 147.085c2.15 5.53 7.358 9.273 13.285 9.547.233.011.466.016.699.016 5.659 0 10.864-3.194 13.413-8.292L275 168.542l26.584 53.167c3.705 7.41 12.716 10.414 20.124 6.708 7.41-3.704 10.413-12.714 6.709-20.124z" />
              </svg>
              <div>
                <p className="text-sm">Last activity</p>
                <p className="text-main text-sm">04/05/2020</p>
              </div>
            </div>
          </div>
          <button className="bg-main w-full flex items-center justify-center py-2 rounded-sm text-white mt-4">
            DETAILS
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Devices;
