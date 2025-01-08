interface Props {
  children: string;
  onclik: () => void;
}
const Button = ({ children, onclik }: Props) => {
  return (
    <div>
      <button onClick={onclik}> {children} </button>
    </div>
  );
};

export default Button;
