import { GET_CHARACTER_DETAILS } from '@/src/graphql/charatecterDetails'
import { query } from '@/src/lib/apolloClient'

export default async function Character({
  params
}: {
  params: { id: string }
}) {
  const data = await query({
    query: GET_CHARACTER_DETAILS,
    variables: { id: decodeURIComponent(params.id) }
  })

  return <>{JSON.stringify(data)}</>
}
