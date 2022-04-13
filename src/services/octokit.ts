import { Octokit } from '@octokit/rest'

export default function oktokit() {
  return new Octokit({
    auth: process.env.GITHUB_ACCESS_TOKEN,
    userAgent: 'creativeworkspace',
  })
}
