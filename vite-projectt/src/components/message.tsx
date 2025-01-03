function Message() {
  const name = "gashaw";
  if (name) {
    return (
      <div className="p-2 underline bg-red-700">
        <h1 className=" line-through"> hello {name}</h1>
      </div>
    );
  } else return <h1>hello world</h1>;
}
export default Message;
