import React from "react";
import { Input, Checkbox } from "@nextui-org/react";
import { MdRefresh } from "react-icons/md";
import {HiTrash} from "react-icons/hi"

const Box = () => {
  return (
    <>
      <div className="inbox-box">
        <div className="top-box">
          <Checkbox defaultSelected={false} size="lg"></Checkbox>

          <MdRefresh />
          <HiTrash/>

          <Input
            underlined
            type="search"
            placeholder="Search emails..."
            css={{ width: "800px" }}
            className="search"
          />
        </div>
      </div>
    </>
  );
};

export default Box;
