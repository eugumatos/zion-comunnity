import { Icon } from "@/ui/Icon";
import { montserrat } from "@/assets/fonts/fonts";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export const AppLogo = () => {
  const isSmallScreen = useMediaQuery('(max-width: 640px)');

  const iconSize = isSmallScreen ? 50 : 55;

  return (
    <div className='flex items-center justify-center leading-7 gap-2.5'>
      <Icon name="zion" size={iconSize} />
      <div className='flex flex-col'>
        <span className={`${montserrat.className} font-light text-xl sm:text-2xl bg-clip-text text-transparent bg-linear-morning-glory`}>Comunidade</span>
        <span className={`${montserrat.className} font-bold text-2xl sm:text-3xl bg-clip-text text-transparent bg-linear-morning-glory`}>Zion Global</span>
      </div>
    </div>
  )
}
