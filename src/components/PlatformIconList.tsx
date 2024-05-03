import {
  FaWindows,
  FaLinux,
  FaPlaystation,
  FaAndroid,
  FaXbox,
  FaApple,
} from "react-icons/fa";
import { Platform } from "../Hooks/useGames";
import { HStack, Icon} from "@chakra-ui/react";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
interface Props {
  platform: Platform[];
}

const PlatformIconList = ({ platform }: Props) => {
  const IconMap: {[key : string] : IconType} = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    linux: FaLinux,
    nintendo: SiNintendo,
    mac: FaApple,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platform.map((platform) => (
        <Icon as={IconMap[platform.slug]} color={'gray.500'}/>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
