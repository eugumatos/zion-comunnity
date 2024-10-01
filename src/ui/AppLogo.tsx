import { Icon } from "@/ui/Icon";
import { montserrat } from "@/assets/fonts/fonts";

export const AppLogo = () => {
  return (
    <div className='flex items-center justify-center leading-7 gap-2.5'>
      <Icon name="zion" size={55} />
      <div className='flex flex-col'>
        <span className={`${montserrat.className} font-light text-2xl bg-clip-text text-transparent bg-linear-morning-glory`}>Comunidade</span>
        <span className={`${montserrat.className} font-bold text-32 bg-clip-text text-transparent bg-linear-morning-glory`}>Zion Global</span>
      </div>
    </div>
  )
}