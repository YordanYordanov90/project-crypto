import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div className="max-w-[1140px] border-2 mt-20 shadow-xl rounded-lg w-full flex flex-col  mx-auto">
      <div className="flex flex-col justify-between items-center my-12 py-4 rounded-div">
        <div>
          <h1 className="text-2xl mb-5 font-bold">Account</h1>
          <div>
            <p>Welcome, {}</p>
          </div>
        </div>
        <div>
          <Button className="border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl">
            Sign Out
          </Button>
        </div>
      </div>
      <div className="flex justfiy-center  my-12 mx-auto py-8 rounded-div">
        <div className="w-full mx-auto flex  ">
          <h1 className="text-2xl  tex-center font-bold py-4">Watch List</h1>
        </div>
      </div>
    </div>
  );
};
export default page;
