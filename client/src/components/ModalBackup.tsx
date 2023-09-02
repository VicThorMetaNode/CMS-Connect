import { useState } from "react";
// import { useMutation } from '@apollo/client';
// import { ADD_COACH } from "../mutations/coachMutations";
// import { GET_COACHES } from "../queries/coachQueries";

const AddCoachModal = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
      role: { value: string };
      email: { value: string };
      phone: { value: string };
    };

    const { name, role, email, phone } = target;

    console.log(name.value, role.value, email.value, phone.value);
  };

  return (
    <div>
      <label htmlFor="my_modal_6" className="btn">
        Add Coach
      </label>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Type here"
                className="input w-full max-w-xs"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Role</label>
              <input
                type="text"
                placeholder="Type here"
                className="input w-full max-w-xs"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Type here"
                className="input w-full max-w-xs"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Phone</label>
              <input
                type="text"
                placeholder="Type here"
                className="input w-full max-w-xs"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
          <label htmlFor="my_modal_6" className="btn">
            Close!
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddCoachModal;
