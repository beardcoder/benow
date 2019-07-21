import Octokit from '@octokit/rest';

/** Calls a mock API which returns the above array to simulate "get all". */
export async function findAllRepos() {
    const clientWithAuth = new Octokit({
        auth: 'af546dac1c7586e645262865beea708d6290c12f',
    });

    return await clientWithAuth.repos
        .listForUser({
            username: 'beardcoder',
        })
        .then((res) => res.data);
}

/** Calls a mock API which returns the above array to simulate "get all". */
export async function findAllGists() {
    const clientWithAuth = new Octokit({
        auth: 'af546dac1c7586e645262865beea708d6290c12f',
    });

    return clientWithAuth.gists
        .listPublicForUser({
            username: 'beardcoder',
        })
        .then((res) => res.data);
}
