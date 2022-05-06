import { Card, CardActionArea, Grid } from "@mui/material";
import { styled } from "@mui/system";

const WrapperCardPokemon = styled(Card)`
  margin: 10px;
  /* max-width: 300px;
  min-width: 200px; */
  width: 300px;
  position: relative;
  & > button {
    height: 150px;
  }
`;
const ActionArea = styled(CardActionArea)``;
const PokemonAnimated = styled("img")`
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 50px;
  height: 50px;
`;
const WrapperListCard = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;
export { WrapperCardPokemon, ActionArea, PokemonAnimated, WrapperListCard };
