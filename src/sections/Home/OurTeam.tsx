import React from "react";
import Image from "next/image";
import { JoinUs } from "@/components/JoinUs";
const OurTeam = () => {
  return (
    <section className="py-24 px-1">
      <h2 className="orange-gradient mb-12  bg-clip-text text-center text-5xl font-bold text-transparent">
        Our Team
      </h2>

      <div className="m-auto flex w-[1400px] max-w-full items-center justify-between px-4">
        <div className="w-max text-center">
          <div className="w-max rounded-full bg-[#86FFFB]">
            <Image
              src={"/Mask group.svg"}
              alt=""
              width={195}
              height={195}
              className=""
            />
          </div>
          <p className="mt-5 mb-2 font-bold">Martín Agudo</p>
          <p className="font-medium">Designation</p>
        </div>

        <div className="w-max text-center">
          <div className="w-max rounded-full bg-[#86FFFB]">
            <Image
              src={"/Mask group (1).svg"}
              alt=""
              width={195}
              height={195}
            />
          </div>
          <p className="mt-5 mb-2 font-bold">Mario Fueyo</p>
          <p className="font-medium">Designation</p>
        </div>

        <div className="w-max text-center">
          <div className="w-max rounded-full bg-[#86FFFB]">
            <Image
              src={"/Mask group (2).svg"}
              alt=""
              width={195}
              height={195}
            />
          </div>
          <p className="mt-5 mb-2 font-bold">Gonzalo Ladreda</p>
          <p className="font-medium">Designation</p>
        </div>

        <div className="w-max text-center">
          <div className="w-max rounded-full bg-[#86FFFB]">
            <Image src={"/Mask group.svg"} alt="" width={195} height={195} />
          </div>
          <p className="mt-5 mb-2 font-bold">Ana Montalbán</p>
          <p className="font-medium">Designation</p>
        </div>
      </div>
      <JoinUs />
    </section>
  );
};

export default OurTeam;
