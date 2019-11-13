// @ts-ignore
const auth = process.env.GITHUB_TOKEN;
const username = process.env.GITHUB_USERNAME;

export function repos($axios) {
    return $axios
        .$get(`https://api.github.com/users/${username}/repos`, {
            headers: {
                Authorization: `token ${auth}`,
                'Content-Type': 'application/json',
            },
        })
        .then(data => {
            // Only get non forked repos
            const resReduce = data.filter(item => {
                return !item.fork;
            });

            return resReduce.map(item => {
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
export function snippets($axios) {
    return $axios
        .$get(`https://api.github.com/users/${username}/gists`, {
            headers: {
                Authorization: `token ${auth}`,
                'Content-Type': 'application/json',
            },
        })
        .then(data =>
            data.map(item => {
                return {
                    id: item.id,
                    description: item.description,
                    html_url: item.html_url,
                };
            })
        );
}
