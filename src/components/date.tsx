import { useFormContext } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerInputProps {
  label: string;
  name: string;
  selected: Date | null;
  minDate: Date | null;
  handler: (date: Date) => void;
  helper: string;
}


function DatePickerInput({
  label,
  name,
  selected,
  minDate,
  handler,
  helper
}: DatePickerInputProps): JSX.Element {

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message?.toString();

  return (
    <div className="w-full flex flex-col">
      {label && <label className="text-left mb-1.5 font-semibold text-primary text-sm">{label}</label>}
      <DatePicker
        {...register(name, { required: "Birthdate required" })}
        selected={selected}
        onChange={handler}
        dateFormat="MM-dd-yyyy"
        placeholderText="Select a date"
        isClearable
        minDate={minDate}
        popperClassName="custom-calendar-popup"
        className={`
        bg-white border border-input w-full
          text-primary py-2.5 px-4 rounded-md
          shadow-sm transition-all text-sm
          duration-200 -full focus-visible:outline-none focus-visible:ring-2 
          ${error ? "focus-visible:ring-red-600" : "focus-visible:ring-ring"} focus-visible:ring-offset-2 focus:outline-none focus:ring
          ${error ? "border-red-500" : ""}
        `}
      />
      {!error && (
        <span className="text-sm text-secondary mt-2">{helper}</span>
      )}
      {error && (
        <span className="text-sm text-red-600 mt-2">{error}</span>
      )}
    </div>
  );
}

export default DatePickerInput;
