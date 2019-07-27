import fetch from 'isomorphic-unfetch';

const auth = 'af546dac1c7586e645262865beea708d6290c12f';
const username = 'beardcoder';
export async function findAllRepos() {
    return await fetch(`https://api.github.com/users/${username}/repos`, {
        headers: {
            Authorization: `token ${auth}`,
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}

/** Calls a mock API which returns the above array to simulate "get all". */
export async function findAllGists() {
    return await fetch(
        `https://api.github.com/users/${username}/gists`,
        {
            headers: {
                Authorization: `token ${auth}`,
                'Content-Type': 'application/json',
            },
        },
    ).then((res) => res.json());
}
