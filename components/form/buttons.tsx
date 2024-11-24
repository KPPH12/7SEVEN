"use client";

import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { Loader} from "lucide-react";

type SubmitProps = {
  className?: string;
  size?: btnSize;
  text?: string;
};
type btnSize = "default" | "lg" | "sm";

export const SubmitButton = ({ className, size, text }: SubmitProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      className={`${className}capitalize `}
      size={size}
      type="submit"
    >
      {pending 
      ? <Loader className="animate-spin" /> 
      : <p>{text}</p>}
    </Button>
  );
};
