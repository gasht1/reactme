import { FormEvent } from "react";

const Form = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Submited");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className=" flex flex-col px-2 mt-2">
        <label> Name</label>
        <input className="" type="text" placeholder=" enter your first Name" />
        <input className="" type="text" placeholder="   enter your Last Name" />
        <label> Name</label>
        <input className="" type="number" placeholder=" enter your age" />
        <button> submit</button>
      </div>
    </form>
  );
};

export default Form;
