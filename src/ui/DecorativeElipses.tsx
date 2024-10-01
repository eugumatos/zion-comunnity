import { useMediaQuery } from "@/hooks/useMediaQuery";

export const DecorativeElipses = () => {
  const isLargeThan1280 = useMediaQuery('(min-width: 1280px)')

  return isLargeThan1280 ? (
    <>
      <div className={`w-[65%] h-[100%] fixed -z-10 rounded-full top-[-40%] left-[-8%] bg-linear-esmerald`}></div>
      <div className={`w-[65%] h-[100%] fixed -z-10 rounded-full top-[-40%] right-[-10%] bg-linear-esmerald`}></div>
    </>
  ) : (
    <div className="w-full h-[50%] absolute -z-10 top-0 bg-linear-esmerald-lg"></div>
  );
};

