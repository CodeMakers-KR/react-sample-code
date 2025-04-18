export default function Alert({ ref, children }) {
  const onClickCloseButton = () => {
    ref.current.close();
  };

  return (
    <dialog className="modal" ref={ref}>
      <div className="modal-body">
        <section className="modal-close-button" onClick={onClickCloseButton}>
          X
        </section>
        {children}
      </div>
    </dialog>
  );
}
