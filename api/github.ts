// @ts-ignore
import { GithubItem } from '~/types';

const auth = 'af546dac1c7586e645262865beea708d6290c12f';
const username = 'beardcoder';

export function repos($axios: any) {
    return $axios.$get(`https://api.github.com/users/${username}/repos`, {
        headers: {
            Authorization: `token ${auth}`,
            'Content-Type': 'application/json',
        },
    })
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
};

// @ts-ignore
export function snippets($axios) {
    return $axios
        .$get(`https://api.github.com/users/${username}/gists`, {
            headers: {
                Authorization: `token ${auth}`,
                'Content-Type': 'application/json',
            },
        })
        .then((data: any[]) =>
            data.map((item: GithubItem) => {
                return {
                    id: item.id,
                    description: item.description,
                    html_url: item.html_url,
                };
            }),
        );
}
