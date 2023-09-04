import { useState } from "react";
// import { useMutation, useQuery } from "@apollo/client";
import { GET_COACHES } from "../queries/coachQueries";
// import { GET_PROJECTS } from "../queries/projectQueries";
import { toast } from "react-toastify";
import { useQuery } from "@apollo/client";

// interface Project {
//   id: string;
//   name: string;
//   description: string;
//   status: string;
//   coachId: string;
// }

interface Coach {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
}

const AddProjectModal = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [coachId, setCoachId] = useState<string>("");
  //set status as new because 'enum'
  const [status, setStatus] = useState<string>("new");

  //Get Coaches for select
  const { loading, error, data } = useQuery(GET_COACHES);

  //close modal once submitted
  const [isModalOpen, setIsModalOpen] = useState(false);
  //make sure submit only once all fields filled
  const [isFormReady, setIsFormReady] = useState(false);

  //   const [addCoachMutation] = useMutation<{ addCoach: Project }>(ADD_COACH);

  //handle form input and make sure all are filled
  const isFormValid = () => {
    return (
      name.trim() !== "" && description.trim() !== "" && status.trim() !== ""
    );
  };

  //handle cancel button: clean all fields + toast
  const handleCancel = () => {
    //display notification
    toast.warn("Form reset.", {
      position: "top-center",
      autoClose: 2000, // You can adjust the duration as needed
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    //reset form fields
    setName("");
    setDescription("");
    setStatus("");
  };

  if (loading) return null; //we don't want any animation while fetching coaches
  if (error) return <p>Oups... </p>;

  return (
    <>
      {!loading && !error && (
        <>
          <div>
            <label
              htmlFor="my_modal_6"
              className="btn btn-secondary"
              onClick={() => setIsModalOpen(true)}
            >
              New Project
            </label>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            {isModalOpen && (
              <div className="modal">
                <div className="modal-box">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="">Name</label>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input w-full max-w-xs"
                        id="name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          setIsFormReady(isFormValid());
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="">Description</label>
                      <textarea
                        placeholder="Type here"
                        className="input w-full max-w-xs"
                        id="description"
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                          setIsFormReady(isFormValid());
                        }}
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <p>Status</p>
                      <select
                        className="select select-ghost w-full max-w-xs"
                        id="status"
                        value={status}
                        onChange={(e) => {
                          setStatus(e.target.value);
                          setIsFormReady(isFormValid());
                        }}
                      >
                        <option disabled selected></option>
                        <option value="Not Started">Not Started</option>
                        <option value="BackLog">BackLog</option>
                        <option value="SpringLog">SpringLog</option>
                        <option value="Progress">In Progress</option>
                        <option value="Under Review">Under Review</option>
                        <option value="Waiting Validation">
                          Waiting Validation
                        </option>
                        <option value="Completed">Completed</option>
                        <option value="Discarded">Discarded</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="">Coach</label>
                      <select
                        id="coachId"
                        value={coachId}
                        onChange={(e) => {
                          setCoachId(e.target.value);
                          setIsFormReady(isFormValid());
                        }}
                      >
                        <option value="">Select</option>
                        {data.coaches.map((coach: Coach) => (
                          <option key={coach.id} value={coach.id}>
                            {coach.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      className="btn"
                      type="submit"
                      disabled={!isFormReady}
                    >
                      Submit
                    </button>
                  </form>
                  <label
                    htmlFor="my_modal_6"
                    className="btn"
                    onClick={handleCancel}
                  >
                    Cancel
                  </label>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default AddProjectModal;
