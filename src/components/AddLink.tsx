import React from "react";
import { Button } from "./Button";

type Props = {};

export const AddLink = (props: Props) => {
  return (
    <div className="mt-10">
      <Button type="button" variant="outline" fullWidth={true}>
        + Add new link
      </Button>
    </div>
  );
};
