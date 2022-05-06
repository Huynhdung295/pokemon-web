import { CardPokemon } from 'components/CardPokemon/Card';
import { WrapperListCard } from 'components/CardPokemon/styled';

import { useInfiniteScroll } from 'hooks';
import React, { useEffect, useState } from 'react';

function Landing() {
  const [items, setItems] = useState(Array.from(Array(10).keys(), n => n + 1));
  const [loading, setLoading] = useState(true);
  const fetchMoreListItems = () => {
    setTimeout(() => {
      setItems(prevState => ([...prevState, ...Array.from(Array(10).keys(), n => n + prevState.length + 1)]))
      setIsFetching(false);
    }, 2000)
  }
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  return (
    <>
      <WrapperListCard>
        {items.map(val => {
          return <CardPokemon isLoading={loading} urlIconMini={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${val}.gif`} key={val}>Pokemon {val}</CardPokemon>
        })}

      </WrapperListCard>
      {isFetching && 'Fetching more list items...'}
    </>
  )
}

export default Landing