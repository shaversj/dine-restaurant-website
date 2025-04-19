const VARIANTS = {
  base: "absolute text-[10px] hidden font-medium tracking-[-0.13px] text-[#B54949] aria-[invalid=true]:block",
  normal: "pt-2.5 pl-4",
  date: "pt-8",
};

type ErrorProps = {
  ariaInvalid: boolean;
  errorMessage?: string;
  variant?: keyof typeof VARIANTS;
};

export default function Error({ ariaInvalid, errorMessage, variant }: ErrorProps) {
  return (
    <p aria-invalid={ariaInvalid} className={`${VARIANTS.base} ${VARIANTS[variant || "normal"]}`}>
      {errorMessage}
    </p>
  );
}
