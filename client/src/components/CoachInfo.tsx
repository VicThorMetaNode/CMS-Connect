// Define a type for the coach prop
interface Coach {
  name: string;
  role: string;
  email: string;
  phone: string;
}

// Define the props for the CoachInfo component
interface CoachInfoProps {
  coach: Coach;
}

const CoachInfo: React.FC<CoachInfoProps> = ({ coach }) => {
  return (
    <>
      <section className="pt-5 ">
        <div className="bg-slate-600 flex flex-col items-center text-alt-white rounded-xl py-5 ">
          <p> {coach.name} </p>
          <p> {coach.role} </p>
          <p> {coach.email} </p>
          <p> {coach.phone} </p>
        </div>
      </section>
    </>
  );
};

export default CoachInfo;
