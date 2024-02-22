import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../entities/Platform";
import { FaWindows, FaPlaystation, FaAndroid, FaXbox, FaLinux, FaApple } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiAtari, SiNintendo, SiSega } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons/lib";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    android: FaAndroid,
    xbox: FaXbox,
    linux: FaLinux,
    mac: FaApple,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
    sega: SiSega,
    "commodore-amiga": IoCheckmarkDoneSharp,
    atari: SiAtari,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" key={platform.id} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
