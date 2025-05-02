// import { UseFormRegister, FieldValues } from "react-hook-form";
import { BookingFormData } from "@/app/booking/page";

type InputProps = {
  register?: any; // eslint-disable-line
  registerName: keyof BookingFormData;
  type?: string;
  placeholder?: string;
  ariaInvalid?: boolean;
};

export default function Input({ register, registerName, type, placeholder, ariaInvalid }: InputProps) {
  return (
    <input
      {...register?.(registerName)}
      aria-invalid={ariaInvalid}
      type={type}
      placeholder={placeholder}
      className={
        "w-full border-b border-[#8E8E8E] pb-[15px] pl-4 text-[20px] leading-7 text-[#111111] placeholder:text-[#111111]/50 focus:border-[#111111] focus:outline-none aria-[invalid=true]:border-[#B54949] aria-[invalid=true]:text-[#B54949] aria-[invalid=true]:placeholder:text-[#B54949]/50"
      }
    />
  );
}
