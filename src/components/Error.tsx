const VARIANTS = {
  base: "absolute text-[10px] hidden font-medium tracking-[-0.13px] text-[#B54949] aria-[invalid=true]:block",
  smallPadding: "pt-2.5 pl-4",
  largePadding: "pt-8",
};

type ErrorProps = {
  ariaInvalid: boolean;
  variant: keyof typeof VARIANTS;
  errorMessage?: string;
};

export default function Error({ ariaInvalid, errorMessage, variant }: ErrorProps) {
  return (
    <p aria-invalid={ariaInvalid} className={`${VARIANTS.base} ${VARIANTS[variant]}`}>
      {errorMessage}
    </p>
  );
}
