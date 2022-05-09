import React from "react";
import {
  ActionArea,
  WrapperCardPokemon,
  PokemonAnimated,
  PokemonNO,
} from "./styled";
import ProptyTypes from "prop-types";
import { LazyCard } from "components/Loading/styled";

const CardPokemon = ({ children, isLoading, urlIconMini, no }) => {
  const skeleton = <LazyCard variant="rectangular" height={150} />;
  const skeletonIcon = (
    <LazyCard icon="true" variant="circular" height={50} width={50} />
  );
  const skeletonNO = <LazyCard no="true" variant="circular" height={50} width={50} />;
  const card = (
    <WrapperCardPokemon>
      {isLoading ? (
        <>
          {skeleton}
          {skeletonNO}
          {skeletonIcon}
        </>
      ) : (
        <>
          <ActionArea children={children} />
          <PokemonNO>{no}</PokemonNO>
          <PokemonAnimated src={urlIconMini} alt="" />
        </>
      )}
    </WrapperCardPokemon>
  );
  return card;
};  
export { CardPokemon };
CardPokemon.propTypes = {
  children: ProptyTypes.node,
  isLoading: ProptyTypes.bool,
  urlIconMini: ProptyTypes.string,
  no: ProptyTypes.number,
};
CardPokemon.defaultProps = {
  children: <LazyCard variant="rectangular" />, 
  isLoading: true,
  urlIconMini: "",
  no: 0,
};
