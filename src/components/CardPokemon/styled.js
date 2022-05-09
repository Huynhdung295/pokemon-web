import { Card, CardActionArea, Grid } from "@mui/material";
import { styled } from "@mui/system";

const WrapperCardPokemon = styled(Card)`
 
  box-shadow: 2px 2px 5px 1px rgb(50 50 50 / 50%);
  margin: 10px;
  min-width: 300px;
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
const PokemonNO = styled("div")`
  position: absolute;
  left: 10px;
  top: 10px;
  border-radius: 50%;
  width: 50px;
  height: 50px;

  background: #ff0000a6;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    color: white;
    font-size: 17px;
`;
const WrapperListCard = styled("div")`
  display: grid;
    grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));
`;
export { WrapperCardPokemon, ActionArea, PokemonAnimated, WrapperListCard, PokemonNO};
