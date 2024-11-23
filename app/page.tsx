import { gql } from '@apollo/client'
import { getClient } from './_components/client';

export default async function Page() {
  const result = await getClient().query({ query: gql`query Query { allFilms { films { title } } }` });
  return <>{JSON.stringify(result.data)}</>
}
