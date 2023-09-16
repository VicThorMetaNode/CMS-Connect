import { useState } from "react";
import { GET_COACHES } from "../queries/coachQueries";
import { ADD_PROJECT } from "../mutations/projectMutations";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";

interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
  coachId: string;
}

interface Coach {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
}

type StatusKey = keyof typeof STATUS_MAP;

const STATUS_MAP = {
  new: "Not Started",
  backLog: "BackLog",
  springLog: "SpringLog",
  progress: "In Progress",
  review: "Under Review",
  validation: "Waiting Validation",
  discarded: "Discarded",
  completed: "Completed",
};

// Utility function to get the key by its value:
const getKeyByValue = (object: Record<string, string>, value: string) => {
  return Object.keys(object).find((key) => object[key] === value);
};

const AddProjectModal = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [coachId, setCoachId] = useState<string>("");
  //set status as new because 'enum'
  const [status, setStatus] = useState<StatusKey>("new");

  //Get Project Queries
  const [addProjectMutation] = useMutation<{ addProject: Project }>(
    ADD_PROJECT
  );

  //Get Coaches for select
  const { loading, error, data } = useQuery(GET_COACHES);

  //close modal once submitted
  const [isModalOpen, setIsModalOpen] = useState(false);
  //make sure submit only once all fields filled
  const [isFormReady, setIsFormReady] = useState(false);

  //handle form input and make sure all are filled
  const isFormValid = () => {
    return (
      name.trim() !== "" &&
      description.trim() !== "" &&
      status.trim() !== "" &&
      coachId.trim() !== ""
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
    setStatus("new");
    setCoachId("");
  };

  if (loading) return null; //we don't want any animation while fetching coaches
  if (error) return <p>Oups... </p>;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Call the mutation with the input data
      const { data } = await addProjectMutation({
        variables: { name, description, status, coachId },
        update: (cache, { data }) => {
          if (data && data.addProject) {
            // Read the existing cache data
            const existingData = cache.readQuery<{ projects: Project[] }>({
              query: GET_PROJECTS,
            });

            // Update the cache with the new coach data
            cache.writeQuery({
              query: GET_PROJECTS,
              data: {
                projects: [...(existingData?.projects || []), data.addProject],
              },
            });
          }
        },
      });

      // Check if the mutation was successful and handle accordingly
      if (data && data.addProject) {
        // Reset the form fields
        setName("");
        setDescription("");
        setStatus("new");
        setCoachId("");

        // Close the modal or show a success message
        // Close the modal
        setIsModalOpen(false);
        // Display a success notification
        toast.success("Project added successfully!", {
          position: "top-right", // Adjust the position as needed
          autoClose: 3000, // Duration in milliseconds
          hideProgressBar: false, // Show progress bar
          closeOnClick: true, // Close the notification when clicked
          pauseOnHover: true, // Pause the timer when hovered
          draggable: true, // Allow dragging the notification
        });
      }
    } catch (error) {
      // Handle errors here, e.g., display an error message
      console.error("Error adding project:", error);

      // Display an error notification
      toast.error("Error adding project. Please try again later.", {
        position: "top-right", // Adjust the position as needed
        autoClose: 5000, // Duration in milliseconds
        hideProgressBar: false, // Show progress bar
        closeOnClick: true, // Close the notification when clicked
        pauseOnHover: true, // Pause the timer when hovered
        draggable: true, // Allow dragging the notification
      });
    }
  };

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
                  <form onSubmit={onSubmit}>
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
                        value={STATUS_MAP[status]} // Use the mapping here
                        onChange={(e) => {
                          const selectedStatus = getKeyByValue(
                            STATUS_MAP,
                            e.target.value
                          );
                          setStatus((selectedStatus as StatusKey) || "new"); // set default value if not found
                          setIsFormReady(isFormValid());
                        }}
                      >
                        {Object.entries(STATUS_MAP).map(([key, value]) => (
                          <option key={key} value={value}>
                            {value}
                          </option>
                        ))}
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
