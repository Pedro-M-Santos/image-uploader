import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

// function getNextPageParam(prevReqResult){

// }

export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    // TODO AXIOS REQUEST WITH PARAM
    ({ pageParam = 0 }) =>
      api.get('api/images', { params: { after: pageParam ?? null } }),
    // TODO GET AND RETURN NEXT PAGE PARAM
    {
      getNextPageParam: lastPage => lastPage.data.after,
    }
  );

  const formattedData = useMemo(() => {
    // TODO FORMAT AND FLAT DATA ARRAY
    const flattenData = data?.pages.map(page =>
      page?.data?.data.map(pic => pic)
    );
    return flattenData?.flat();
  }, [data]);

  // TODO RENDER LOADING SCREEN
  if (isLoading) return <Loading />;

  // TODO RENDER ERROR SCREEN
  if (isError) return <Error />;

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {/* TODO RENDER LOAD MORE BUTTON IF DATA HAS NEXT PAGE */}
        {hasNextPage && (
          <Button
            color="orange.500"
            textColor="white"
            onClick={() => fetchNextPage()}
          >
            {!isFetchingNextPage ? 'Carregar mais' : 'Carregando...'}
          </Button>
        )}
      </Box>
    </>
  );
}
