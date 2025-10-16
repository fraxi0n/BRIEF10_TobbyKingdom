import "./Button.css";
// import clsx from "clsx";

interface ButtonProps {
  classProps?: string
  label: string;
  isSubmitType?: true;
  onClick?: () =>void
//   variant: "primary" | "secondary";
}

export const Button = ({ label, isSubmitType, onClick = () => console.log("aucun effet sur ce bouton:" + label) , classProps = ""}: ButtonProps) => {
  return <button className={"btn"+classProps}  type={isSubmitType ? "submit" : "button"}
    onClick={onClick}>
    {label}
  </button>;
};
