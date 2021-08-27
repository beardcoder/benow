import { ISnippet } from '@/@types/snippet'
import octokit from './octokit'

export default function getSnippets(): Promise<ISnippet[]> {
  return octokit()
    .gists.listForUser({
      username: 'beardcoder',
    })
    .then(({ data }: any) =>
      data
        .filter((item: any) => item.public)
        .map((item: any) => {
          return {
            id: item.id,
            url: item.html_url,
            description: item.description,
          }
        })
    )
    .catch(() => [])
}
