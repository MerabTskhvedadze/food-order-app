import ReactDom from "react-dom";
import classes from "./Modal.module.css";

function BackDrop(props) {
  return <div className={classes.backdrop} />;
}

function ModalOerlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.cnotent}>{props.children}</div>
    </div>
  );
}

const portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <>
      {ReactDom.createPortal(<BackDrop />, portalElement)}
      {ReactDom.createPortal(
        <ModalOerlay>{props.children}</ModalOerlay>,
        portalElement
      )}
    </>
  );
}

export default Modal;
