export default function Label({ labelName, ariaInvalid }: { labelName: string; ariaInvalid?: boolean }) {
  return (
    <label aria-invalid={ariaInvalid} className="shrink-0 text-[20px] leading-[28px] text-black aria-[invalid=true]:text-[#B54949] aria-[invalid=true]:placeholder:text-[#B54949]/50">
      {labelName}
    </label>
  );
}
