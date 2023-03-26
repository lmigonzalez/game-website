import classNames from "classnames";
import { FC } from "react";

const Medal: FC<{ pos: number }> = ({ pos }) => {
  return (
    <div className="flex h-[45px] w-[44px] flex-row items-center justify-center">
      <div className="full flex h-full w-full items-center justify-center rounded-full bg-[#c49e08] p-1">
        <div className=" flex h-full w-full items-center justify-center rounded-full border-4 border-[#eec935]">
          <strong className={classNames("text-xl", { "text-lg": pos === 1 })}>
            {pos}
          </strong>
        </div>
      </div>
    </div>
  );
};
export default Medal;
