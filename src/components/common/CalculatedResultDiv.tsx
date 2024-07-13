import React from "react";

type Props = {
  title: string;
  value: string;
};

const CalculatedResultDiv: React.FC<Props> = ({ title, value }: Props) => {
  return (
    <div className="flex items-center xs:justify-center sm:justify-between xs:space-x-0 sm:space-x-7  xs:space-y-1 sm:space-y-0 xs:flex-col sm:flex-row ">
      <label className="text-gray-600 xs:text-xs md:text-sm font-semibold ml-1">
        {title}:
      </label>
      <p className="text-gray-600 xs:text-xs md:text-sm font-semibold">
        {value}
      </p>
    </div>
  );
};

export default CalculatedResultDiv;
