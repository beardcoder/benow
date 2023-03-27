import { octokitClient } from '@/utils/octokit'
import { IRepo } from '@@/@types/repo'

export async function getRepos(): Promise<IRepo[]> {
  try {
    const { data } = await octokitClient().repos.listForUser({
      username: 'beardcoder',
    })
    return data
      .filter((item) => !item.fork)
      .filter((item_1) => !item_1.private)
      .map((item_2) => {
        return {
          id: item_2.id,
          url: item_2.html_url,
          name: item_2.name,
          description: item_2.description,
        }
      })
  } catch {
    return []
  }
}
