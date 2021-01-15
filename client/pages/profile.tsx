import Header from '../components/Header';
import { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import {
  useUpdateEmailMutation,
  useUpdatePasswordMutation,
  useDeleteUserMutation,
  useMeQuery,
  useModifyUserMutation,
} from '../types';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

const Profile = (): JSX.Element => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    createdDate: '',
    modifyDate: '',
    country: '',
    bio: '',
    website: '',
    metadata: { lastSignInDate: '' },
  });
  const { data: meQueryData, loading } = useMeQuery();
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [actionMenu, setActionMenu] = useState(false);
  const [modalOpenPassword, setModalOpenPassword] = useState(false);
  const [modalOpenDelete, setModalOpenDelete] = useState(false);
  const [modalOpenEmail, setModalOpenEmail] = useState(false);
  const [updateEmailMutation] = useUpdateEmailMutation();
  const onSubmitEmail = (info) => {
    updateEmailMutation({ variables: { ...info } });
    router.push('verify-update-email');
  };
  const [updatePasswordMutation, { data }] = useUpdatePasswordMutation();
  const onSubmitPassword = (info) => {
    updatePasswordMutation({ variables: { ...info } });
  };
  const [deleteUserMutation] = useDeleteUserMutation();
  const onSubmitDelete = (info) => {
    deleteUserMutation({ variables: { ...info } });
  };
  const [
    modifyUserMutation,
    { data: modifyUserData },
  ] = useModifyUserMutation();

  const onSubmitUpdate = (info) => {
    modifyUserMutation({ variables: { ...info } });
  };

  useEffect(() => {
    if (meQueryData) {
      setUserData({
        ...meQueryData.me,
      });
    }
  }, [meQueryData]);

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
      <div className="p-4">
        <button
          onClick={() => setActionMenu(!actionMenu)}
          className="mb-2 px-2 py-1 bg-border text-white rounded-sm"
        >
          Actions
        </button>
        {loading && spinner}
        {actionMenu && (
          <div className="p-4 bg-light-secondary-background w-max flex flex-col absolute space-y-2">
            <button onClick={() => setModalOpenPassword(!modalOpenPassword)}>
              Update password
            </button>
            <button onClick={() => setModalOpenEmail(!modalOpenEmail)}>
              Update email
            </button>
            <button onClick={() => setModalOpenDelete(!modalOpenDelete)}>
              Delete account
            </button>
          </div>
        )}
        <p className="text-xl">Details</p>
        <p className="text-sm">General user information</p>
        <p>{data?.updatePassword?.message}</p>
        <div className="mt-8 pl-8 border-l-2 border-main flex flex-col flex-wrap h-44 w-3/12">
          <div className="flex items-center mb-2">
            <svg
              className="w-4 h-4 mr-3"
              viewBox="0 0 428.97 428.98"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M414.101 373.866l-106.246-56.188-4.907-15.332c-1.469-5.137-3.794-10.273-8.576-11.623-1.519-.428-3.441-3.201-3.689-5.137l-2.836-29.813c-.156-2.553.868-4.844 2.216-6.453 8.14-9.754 12.577-21.051 14.454-33.967.944-6.494 4.323-12.483 6.059-18.879l6.812-35.649c.711-4.681.573-8.289-4.659-10.103-1.443-.503-2.699-2.894-2.699-6.479l.069-67.264c-1.111-16.28-9.731-28.869-21.957-37.631-23.354-16.739-65.175-8.977-51.526-36.281.806-1.607.549-4.399-5.062-2.335-20.936 7.703-76.701 28.057-90.71 38.616-12.538 9.449-20.844 21.351-21.957 37.631l.069 67.264c0 2.96-1.255 5.976-2.7 6.479-5.233 1.813-5.37 5.422-4.659 10.103l6.814 35.649c1.732 6.396 5.113 12.386 6.058 18.879 1.875 12.916 6.315 24.213 14.453 33.967 1.347 1.609 2.372 3.9 2.216 6.453l-2.836 29.813c-.249 1.936-2.174 4.709-3.69 5.137-4.783 1.35-7.109 6.486-8.577 11.623l-4.909 15.332-106.25 56.188c-2.742 1.449-4.457 4.297-4.457 7.397v39.343c0 4.621 3.748 8.368 8.37 8.368h391.4c4.622 0 8.37-3.747 8.37-8.368v-39.343c-.002-3.1-1.717-5.948-4.458-7.397z" />
            </svg>
            <div>
              <p>Username</p>
              <p className="text-main">{userData.username}</p>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <svg
              className="w-4 h-4 mr-3"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M511.959 185.212L512 15.045l-67.587 67.587-7.574-7.574C388.507 26.726 324.245.108 255.893.108 114.792.107 0 114.901 0 256s114.792 255.893 255.893 255.893S511.785 397.099 511.785 256h-49.528c0 113.79-92.575 206.365-206.365 206.365S49.528 369.79 49.528 256 142.103 49.635 255.893 49.635c55.124 0 106.947 21.465 145.925 60.443l7.574 7.574-67.58 67.58 170.147-.02z" />
              <path d="M255.893 256v-90.801h-49.528v140.329h140.328V256z" />
            </svg>
            <div>
              <p>Last login</p>
              <p className="text-main">{userData.metadata.lastSignInDate}</p>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <svg
              className="w-4 h-4 mr-3"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m448 64h-21.332v-42.668c0-11.773-9.5586-21.332-21.336-21.332h-21.332c-11.777 0-21.332 9.5586-21.332 21.332v42.668h-213.34v-42.668c0-11.773-9.5547-21.332-21.332-21.332h-21.332c-11.777 0-21.336 9.5586-21.336 21.332v42.668h-21.332c-35.285 0-64 28.715-64 64v320c0 35.285 28.715 64 64 64h384c35.285 0 64-28.715 64-64v-320c0-35.285-28.715-64-64-64zm21.332 384c0 11.754-9.5781 21.332-21.332 21.332h-384c-11.754 0-21.332-9.5781-21.332-21.332v-233.81h426.66z" />
            </svg>
            <div>
              <p>Register date</p>
              <p className="text-main">{userData.createdDate}</p>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <svg
              className="w-4 h-4 mr-3"
              viewBox="0 0 286.05 286.05"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m78.493 143.18h-15.661v-0.125c0-43.623 34.809-80.328 79.201-80.122 21.642 0.098 41.523 8.841 55.691 23.135l25.843-24.931c-20.864-21.043-49.693-34.049-81.534-34.049-63.629 0-115.21 51.955-115.3 116.08h-15.84c-9.708 0-13.677 6.49-8.823 14.437l33.799 33.504c6.704 6.704 10.736 6.91 17.646 0l33.799-33.504c4.854-7.939 0.876-14.42-8.823-14.42zm205.48-13.945-33.799-33.433c-6.892-6.892-11.156-6.481-17.637 0l-33.799 33.433c-4.854 7.929-0.894 14.419 8.814 14.419h15.635c-0.25 43.337-34.943 79.72-79.183 79.514-21.633-0.089-41.505-8.814-55.691-23.099l-25.843 24.896c20.873 21.007 49.702 33.996 81.534 33.996 63.432 0 114.87-51.579 115.28-115.3h15.867c9.716-9e-3 13.676-6.508 8.822-14.428z" />
            </svg>
            <div>
              <p>Last update</p>
              <p className="text-main">{userData.modifyDate}</p>
            </div>
          </div>
        </div>
        <p className="text-xl mt-8">Information</p>
        <p className="text-sm">Review or update profile information</p>
        <div className="mt-8 pl-8 py-4 border-l-2 border-border border-opacity-70">
          <form
            className="w-9/12 flex flex-col flex-wrap h-44"
            onSubmit={handleSubmit(onSubmitUpdate)}
          >
            <div className="pr-6 mt-2">
              <label>First name</label>
              <input
                className="text-main pl-2 border-b outline-none w-full"
                autoComplete="none"
                defaultValue={userData.firstName}
                ref={register}
                name="firstName"
              />
            </div>
            <div className="pr-6 mt-2">
              <label>Last name</label>
              <input
                className="text-main pl-2 border-b outline-none w-full"
                autoComplete="none"
                defaultValue={userData.lastName}
                ref={register}
                name="lastName"
              />
            </div>
            <div className="pr-6 mt-2">
              <label>Username</label>
              <input
                className="text-main pl-2 border-b outline-none w-full"
                autoComplete="none"
                defaultValue={userData.username}
                ref={register}
                name="username"
              />
            </div>
            <div className="pr-6 mt-2">
              <label>Country</label>
              <input
                className="text-main pl-2 border-b outline-none w-full"
                autoComplete="none"
                defaultValue={userData.country}
                ref={register}
                name="country"
              />
            </div>

            <div className="pr-6 mt-2">
              <label>Bio</label>
              <input
                className="text-main pl-2 border-b outline-none w-full"
                autoComplete="none"
                defaultValue={userData.bio}
                ref={register}
                name="bio"
              />
            </div>
            <div className="pr-6 mt-2">
              <label>Website</label>
              <input
                className="text-main pl-2 border-b outline-none w-full"
                autoComplete="none"
                defaultValue={userData.website}
                ref={register}
                name="website"
              />
            </div>
            <button
              type="submit"
              className="bg-main w-32 flex items-center justify-center py-2 rounded-sm text-white mt-4"
            >
              <svg
                className="w-4 h-4 mr-2 text-white"
                viewBox="0 0 28.265 28.265"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.133 28.265c-7.061 0-12.805-5.75-12.805-12.809 0-7.06 5.744-12.807 12.805-12.807.469 0 .943.027 1.414.08V.659c0-.266.164-.508.406-.611.252-.098.531-.043.723.148l4.537 4.547c.258.258.258.67 0 .932l-4.535 4.557c-.193.188-.473.246-.725.143-.242-.104-.406-.344-.406-.609V7.47c-.469-.086-.941-.125-1.414-.125-4.473 0-8.113 3.639-8.113 8.111 0 4.471 3.641 8.113 8.113 8.113s8.111-3.643 8.111-8.113c0-.363.295-.66.662-.66h3.369c.365 0 .662.297.662.66 0 7.059-5.748 12.809-12.804 12.809z" />
              </svg>
              Update
            </button>
          </form>
        </div>
      </div>
      {modalOpenPassword && (
        <Modal closeModal={() => setModalOpenPassword(false)}>
          <div>
            <form
              className="flex flex-col"
              onSubmit={handleSubmit(onSubmitPassword)}
            >
              <label>Current password</label>
              <input
                className="border-border border-opacity-10 border-b"
                name="currentPassword"
                ref={register({ required: true })}
              />
              <label>New password</label>
              <input
                className="border-border border-opacity-10 border-b"
                name="newPassword"
                ref={register({ required: true })}
              />
              <button
                type="submit"
                className="place-self-center mt-4 px-2 bg-main w-32 rounded-sm ml-2 text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </Modal>
      )}
      {modalOpenEmail && (
        <Modal closeModal={() => setModalOpenEmail(false)}>
          <div>
            <form className="space-x-2" onSubmit={handleSubmit(onSubmitEmail)}>
              <label>New email</label>
              <input
                className="border-border border-opacity-10 border-b"
                name="email"
                ref={register({ required: true })}
              />
              <button
                type="submit"
                className="px-2 bg-main w-32 rounded-sm ml-2 text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </Modal>
      )}
      {modalOpenDelete && (
        <Modal closeModal={() => setModalOpenDelete(false)}>
          <div>
            <p>Enter your current password</p>
            <form onSubmit={handleSubmit(onSubmitDelete)}>
              <input
                className="border-border border-opacity-10 border-b"
                name="password"
                ref={register({ required: true })}
              />
              <button
                type="submit"
                className="px-2 bg-main w-32 rounded-sm ml-2 text-white"
              >
                YES
              </button>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Profile;
