
import React from 'react';
import { ActionArea, WrapperCardPokemon, PokemonAnimated } from './styled';
import ProptyTypes from 'prop-types';
import { LazyCard } from 'components/Loading/styled';

const CardPokemon = ({ children, isLoading, urlIconMini }) => {
    const skeleton = <LazyCard variant="rectangular" height={150} />;
    const skeletonIcon = <LazyCard icon="true" variant="circular" height={50} width={50} />;
    const card = (
        <WrapperCardPokemon>
            {isLoading ? skeleton : <ActionArea children={children} />}
            {isLoading ? skeletonIcon : <PokemonAnimated src={urlIconMini} alt='' />}
        </WrapperCardPokemon>
    )
    return (
        card
    )
}
export {
    CardPokemon
}
CardPokemon.propTypes = {
    children: ProptyTypes.node,
    isLoading: ProptyTypes.bool
}
CardPokemon.defaultProps = {
    children: <LazyCard variant="rectangular" />,
    isLoading: true,
}