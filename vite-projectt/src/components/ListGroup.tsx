interface Props {
  items: { name: string }[];
  heading: string;
}
const ListGroup = ({ items, heading }: Props) => {
  return (
    <div className=" px-4  flex-col gap-4">
      <h1>{heading}</h1>
      {items.map((item, index) => (
        <div key={index} className="">
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default ListGroup;
