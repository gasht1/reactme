import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const MyAlert = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default MyAlert;
