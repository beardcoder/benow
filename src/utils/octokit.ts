import { Octokit } from '@octokit/rest'

/**
 * It returns a new instance of the Octokit class, which is a wrapper for the GitHub API
 * @returns A new instance of Octokit with the authentication token and user agent set.
 */
export function octokitClient() {
  return new Octokit({
    auth: process.env.GH_ACCESS_TOKEN ?? process.env.GITHUB_ACCESS_TOKEN,
    userAgent: 'letsbenow',
  })
}
