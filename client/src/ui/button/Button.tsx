import "./Button.css";
// import clsx from "clsx";

interface ButtonProps {
  label: string;
  isSubmitType?: true;
  onClick?: () =>void
//   variant: "primary" | "secondary";
}

export const Button = ({ label, isSubmitType, onClick }: ButtonProps) => {
  return <button type={isSubmitType ? "submit" : "button"}
    onClick={onClick ? onClick : () => console.log("aucun effet sur ce bouton:" + label)}>
    {label}
  </button>;
};
