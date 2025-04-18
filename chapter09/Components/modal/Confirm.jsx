export default function Confirm({
  ref,
  children,
  okHandler = () => {},
  cancelHandler,
}) {
  const onClickCloseButton = () => {
    ref.current.close();
  };

  return (
    <dialog className="modal" ref={ref}>
      <div className="modal-body">
        {children}
        <section>
          <button type="button" className="confirm-ok" onClick={okHandler}>
            OK
          </button>
          <button
            type="button"
            className="confirm-cancel"
            onClick={cancelHandler ?? onClickCloseButton}
          >
            Cancel
          </button>
        </section>
      </div>
    </dialog>
  );
}
