import fetch from 'isomorphic-unfetch';
import { GithubItem } from '@/types';

// @ts-ignore
const auth = process.env.GITHUB_TOKEN;
const username = process.env.GITHUB_USERNAME;

export function reposFetch(): Promise<GithubItem[]> {
    return fetch(`https://api.github.com/users/${username}/repos`, {
        headers: {
            Authorization: `token ${auth}`,
            'Content-Type': 'application/json',
        },
    })
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
                    html_url: item.html_url,
                };
            });
        });
}

// @ts-ignore
export function snippetsFetch(): Promise<GithubItem[]> {
    return fetch(`https://api.github.com/users/${username}/gists`, {
        headers: {
            Authorization: `token ${auth}`,
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then((data: any[]) =>
            data.map((item: GithubItem) => {
                return {
                    id: item.id,
                    description: item.description,
                    html_url: item.html_url,
                };
            })
        );
}
