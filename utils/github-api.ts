import fetch from 'isomorphic-unfetch';

const auth = process.env.GITHUB_AUTH;
const username = process.env.GITHUB_USERNAME;
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
    return await fetch(`https://api.github.com/users/${username}/gists`, {
        headers: {
            Authorization: `token ${auth}`,
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}
