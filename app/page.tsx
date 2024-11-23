import { gql } from '@apollo/client'
import { getClient } from './_components/client';

export default async function Page() {
  const result = await getClient().query({ query: gql`query Query { allFilms { films { title } } }` });
  return <>{JSON.stringify(result.data)}</>
}

// The `fetch` function is working as expected.
//
// export default async function Page() {
//   const result = await fetch("https://swapi-graphql.netlify.app/.netlify/functions/index", {
//     method: "POST",
//     headers: { "Content-Type": "application/json", },
//     body: JSON.stringify({ query: `query Query { allFilms { films { title } } }` }),
//     cache: "no-store",
//   })
//   return <>{JSON.stringify(await result.json())}</>
// }
