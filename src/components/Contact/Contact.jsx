import { VscAccount, VscCallOutgoing } from 'react-icons/vsc';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const Contact = ({ contact: { name, number, id }, setContact }) => {
  const dispatch = useDispatch();
  const handleClick = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        dispatch(deleteContact(id))
          .unwrap()
          .then(() => {
            toast.success('You have deleted the contact successfully!');
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
          })
          .catch(() => toast.error('You have not deleted the contact!'));
      }
    });
    // dispatch(deleteContact(id))
    //   .unwrap()
    //   .then(() => {
    //     toast.success('You have deleted the contact successfully!');
    //   })
    //   .catch(() => toast.error('You have not deleted the contact!'));
  };
  return (
    <>
      <div>
        <p>
          <VscAccount /> {name}
        </p>
        <p>
          <VscCallOutgoing /> {number}
        </p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => handleClick(id)}
      >
        Delete
      </button>
      <button
        onClick={() => {
          setContact({ name, number, id });
        }}
      >
        Edit
      </button>
    </>
  );
};

export default Contact;
