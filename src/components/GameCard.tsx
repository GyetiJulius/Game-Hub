import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../Hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading>{game.name}</Heading>
        <PlatformIconList platform={game.parent_platforms.map(p=>p.platform)}/>
      </CardBody>
    </Card>
  );
};

export default GameCard;
