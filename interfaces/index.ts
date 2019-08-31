// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type GithubItem = {
    id: string;
    full_name?: string;
    description: string;
    html_url: string;
};

export type Article = {
    id: number;
    slug: string;
    headline: string;
    datePublished: string;
    created_on?: string;
    author: string;
    description: string;
    image?: string;
};
