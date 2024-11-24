"use client";
import { useActionState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { actionFunc } from "@/utils/types";

const initialState = {
  message: "",
};

const FormContainer = ({
  action,
  children,
}: {
  action: actionFunc;
  children: React.ReactNode;
}) => {
  const { toast } = useToast();
  const [state, formAction] = useActionState(action, initialState);
  console.log("Fuck Tus", state);
  useEffect(() => {
    if (state.message) {
      toast({
        description: state.message,
      });
    }
  }, [state.message,toast]);
  return <form action={formAction}>{children}</form>;
};
export default FormContainer;
