import Swal from "sweetalert2";

const Modal = (props) => {
    Swal.fire({
        icon: props.icon,
        title: props.title,
        text: props.text,
    }).then(() => {
        props.onClear();
    });
}

export default Modal;