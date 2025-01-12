import { FormEvent, useState } from "react";
import { number, string, z } from "zod";
const Schema = z.object({
  name: string().min(3),
  age: number().min(18),
});
type FormData = z.infer<typeof Schema>;

const Form = () => {
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className=" flex flex-col px-2 mt-2">
        <label> Name</label>
        <input
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          value={person.name}
          className=""
          type="text"
          placeholder=" enter your first Name"
        />
        <input className="" type="text" placeholder="   enter your Last Name" />
        <label> Name</label>
        <input className="" type="number" placeholder=" enter your age" />
        <button> submit</button>
      </div>
    </form>
  );
};

export default Form;
