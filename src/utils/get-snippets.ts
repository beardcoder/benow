import { ISnippet } from '@/@types/snippet'
import { octokitClient } from './octokit'

/**
 * It returns a promise that resolves to an array of objects that have an id, url, and description
 * @returns An array of objects with the following properties:
 *   id: string
 *   url: string
 *   description: string
 */
export async function getSnippets(): Promise<ISnippet[]> {
  try {
    const { data } = await octokitClient().gists.listForUser({
      username: 'beardcoder',
    })
    return data
      .filter((item: any) => item.public)
      .map((item_1: any) => {
        return {
          id: item_1.id,
          url: item_1.html_url,
          description: item_1.description,
        }
      })
  } catch {
    return []
  }
}
