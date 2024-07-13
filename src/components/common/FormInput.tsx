import React, { ChangeEventHandler } from "react";

type Props = {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  name: string;
  label: string;
};

const FormInput: React.FC<Props> = ({ handleChange, name, label }: Props) => {
  return (
    <div className="flex justify-center flex-col space-y-1">
      <label className="custom-input-label">{label}</label>

      <input
        type="text"
        name={name}
        onChange={handleChange}
        required
        className="custom-input w-full"
      />
    </div>
  );
};

export default FormInput;
