import { SignUpForm } from "@/components/madeup/signup";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <SignUpForm />
    </div>
  );
};

export default page;
