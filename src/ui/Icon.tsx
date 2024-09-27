import { Cam } from '@/assets/icons/Cam';
import { Eye } from '@/assets/icons/Eye';
import { EyeOff } from '@/assets/icons/EyeOff';
import { Zion } from '@/assets/icons/Zion';
import { Image } from "@/assets/icons/Image";

type IconProps = {
  name: IconNames;
  size: number;
};

export type IconNames = keyof typeof icons;

const icons = {
  cam: <Cam />,
  eye: <Eye />,
  ['eye-off']: <EyeOff />,
  image: <Image />,
  zion: <Zion />,
} as const;

export const Icon = ({ name, size }: IconProps) => {
  const IconComponent = icons[name];

  return (
    <IconComponent.type {...IconComponent.props} width={size} height={size} />
  );
}
