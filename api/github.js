const auth = 'af546dac1c7586e645262865beea708d6290c12f';
const username = 'beardcoder';
export function fetchRepos($axios) {
    return $axios.$get(`https://api.github.com/users/${username}/repos`, {
        headers: {
            Authorization: `token ${auth}`,
            'Content-Type': 'application/json',
        },
    });
}

/** Calls a mock API which returns the above array to simulate "get all". */
export function fetchGists($axios) {
    return $axios.$get(`https://api.github.com/users/${username}/gists`, {
        headers: {
            Authorization: `token ${auth}`,
            'Content-Type': 'application/json',
        },
    });
}
