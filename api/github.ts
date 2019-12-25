import { GithubItem } from '@/types';
import fetch from 'isomorphic-unfetch';

export function reposFetch(): Promise<GithubItem[] | any> {
    return fetch(
        `https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos`,
        {
            headers: {
                Authorization: `token ${process.env.GITHUB_TOKEN}`,
                'Content-Type': 'application/json'
            }
        }
    )
        .then(res => res.json())
        .then((data: any[]) => {
            // Only get non forked repos
            const resReduce = data.filter((item: GithubItem | any) => {
                return !item.fork;
            });
            return resReduce.map((item: GithubItem) => {
                return {
                    id: item.id,
                    description: item.description,
                    full_name: item.full_name,
                    html_url: item.html_url
                };
            });
        });
}

// @ts-ignore
export function snippetsFetch(): Promise<GithubItem[]> {
    return fetch(
        `https://api.github.com/users/${process.env.GITHUB_USERNAME}/gists`,
        {
            headers: {
                Authorization: `token ${process.env.GITHUB_TOKEN}`,
                'Content-Type': 'application/json'
            }
        }
    )
        .then(res => res.json())
        .then((data: any[]) =>
            data.map((item: GithubItem) => {
                return {
                    id: item.id,
                    description: item.description,
                    html_url: item.html_url
                };
            })
        );
}
