import { IRepo } from '@/@types/repo'
import octokit from './octokit'

export default function getRepos(): Promise<IRepo[]> {
  return octokit()
    .repos.listForUser({
      username: 'beardcoder',
    })
    .then(({ data }) =>
      data
        .filter((item) => !item.fork)
        .map((item) => {
          return {
            id: item.id,
            url: item.html_url,
            name: item.name,
            description: item.description,
          }
        })
    )
    .catch(() => [])
}
