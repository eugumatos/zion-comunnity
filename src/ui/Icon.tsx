import { Cam } from '@/assets/icons/Cam';
import { Eye } from '@/assets/icons/Eye';
import { EyeOff } from '@/assets/icons/EyeOff';
import { Zion } from '@/assets/icons/Zion';
import { Image } from "@/assets/icons/Image";
import { Comment } from '@/assets/icons/Comment';
import { Heart } from '@/assets/icons/Heart';
import { Emoji } from '@/assets/icons/Emoji';
import { Gallery } from '@/assets/icons/Gallery';
import { Send } from '@/assets/icons/Send';

type IconProps = {
  color?: string;
  name: IconNames;
  size: number;
};

export type IconNames = keyof typeof icons;

const icons = {
  cam: <Cam />,
  eye: <Eye />,
  ['eye-off']: <EyeOff />,
  image: <Image />,
  send: <Send />,
  heart: <Heart />,
  emoji: <Emoji />,
  gallery: <Gallery />,
  comment: <Comment />,
  zion: <Zion />,
} as const;

export const Icon = ({ name, size, color }: IconProps) => {
  const IconComponent = icons[name];

  return (
    <IconComponent.type {...IconComponent.props} width={size} height={size} color={color} />
  );
}
