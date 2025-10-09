import "./Button.css";
// import clsx from "clsx";

interface ButtonProps {
    label: string;
//   variant: "primary" | "secondary";
}

export const Button = ({label}: ButtonProps) => {
  return <button>{label}</button>;
};
