import React from "react";

type Props = {
  title: string;
  value: number;
};

const CalculatedResultDiv: React.FC<Props> = ({ title, value }: Props) => {
  return (
    <div className="flex items-center justify-between space-x-7">
      <label className="text-gray-700 xs:text-xs md:text-base font-semibold ml-1">
        {title}:
      </label>
      <p className="text-gray-700 xs:text-xs md:text-base font-semibold">
        {value.toFixed(2)}
      </p>
    </div>
  );
};

export default CalculatedResultDiv;
