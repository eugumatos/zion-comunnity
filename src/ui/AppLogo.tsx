import { Montserrat } from "next/font/google"
import { Icon } from '@/ui/Icon';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '600', '700'],
});

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