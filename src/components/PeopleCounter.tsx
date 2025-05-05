type PeopleCounterProps = {
  numOfPeople: number;
  setNumOfPeople: (numOfPeople: number) => void;
};

export default function PeopleCounter({ numOfPeople, setNumOfPeople }: PeopleCounterProps) {
  return (
    <div className={"z-10 flex w-full items-center justify-between border-b border-[#8E8E8E] px-[32.63px] pb-[15px]"}>
      <img src={"/images/icons/icon-minus.svg"} alt={"Minus Icon"} className={"cursor-pointer"} onClick={() => setNumOfPeople(numOfPeople - 1)} />
      <div>
        <label className={"shrink-0 text-[20px] leading-[28px] font-bold text-black"}>{numOfPeople} people</label>
      </div>
      <img src={"/images/icons/icon-plus.svg"} alt={"Plus Icon"} className={"cursor-pointer"} onClick={() => setNumOfPeople(numOfPeople + 1)} />
    </div>
  );
}
