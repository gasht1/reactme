import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onclose: () => void;
}
const MyAlert = ({ children, onclose }: Props) => {
  return (
    <div>
      <div>{children}</div>;<div onClick={onclose}> close</div>
    </div>
  );
};

export default MyAlert;
