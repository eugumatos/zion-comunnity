import Image from 'next/image';

type AvatarProps = {
  name?: string;
}

const avatarPath = {
  ['GustavoMatos']: '/img/Avatar2.svg',
  ['VictorCaetano']: '/img/Avatar.svg'
} as any

export const Avatar = ({ name = 'Gustavo Matos' }: AvatarProps) => {
  const formattedName = name.replace(/ +/g, '');

  return (
    <div className="flex items-center gap-2">
      <Image
        src={avatarPath[formattedName]}
        alt="User Avatar"
        width={40}
        height={40}
        className="rounded-full object-cover"
        quality={100}
      />
    </div>
  );
}

