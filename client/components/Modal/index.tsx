const Modal = ({
  closeModal,
  children,
}: {
  closeModal: () => void;
  children: JSX.Element;
}): JSX.Element => (
  <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
    <div
      onClick={() => closeModal()}
      className="absolute w-full h-full bg-black opacity-25 top-0 left-0 cursor-pointer"
    ></div>
    <div className="absolute w-max h-max p-8 bg-white rounded-sm shadow-lg flex items-center justify-center">
      {children}
    </div>
  </div>
);

export default Modal;
