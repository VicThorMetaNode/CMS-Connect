import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COACH } from "../mutations/coachMutations";
import { GET_COACHES } from "../queries/coachQueries";

interface Coach {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
}

const AddCoachModal = () => {
  const [name, setName] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [addCoachMutation] = useMutation<{ addCoach: Coach }>(ADD_COACH);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Call the mutation with the input data
      const { data } = await addCoachMutation({
        variables: { name, role, email, phone },
        update: (cache, { data }) => {
          if (data && data.addCoach) {
            // Read the existing cache data
            const existingData = cache.readQuery<{ coaches: Coach[] }>({
              query: GET_COACHES,
            });

            // Update the cache with the new coach data
            cache.writeQuery({
              query: GET_COACHES,
              data: {
                coaches: [...(existingData?.coaches || []), data.addCoach],
              },
            });
          }
        },
      });

      // Check if the mutation was successful and handle accordingly
      if (data && data.addCoach) {
        // Reset the form fields
        setName("");
        setRole("");
        setEmail("");
        setPhone("");

        // Close the modal or show a success message
        // Close the modal
        setIsModalOpen(false);
      }
    } catch (error) {
      // Handle errors here, e.g., display an error message
      console.error("Error adding coach:", error);
    }
  };

  return (
    <div>
      <label
        htmlFor="my_modal_6"
        className="btn"
        onClick={() => setIsModalOpen(true)}
      >
        Add Coach
      </label>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      {isModalOpen && (
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
      )}
    </div>
  );
};

export default AddCoachModal;
