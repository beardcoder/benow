export interface IPost {
    data: {
        author: string;
        date: string;
        description: string;
        image: string;
        thumbnail: string;
        title: string;
        slug: string;
    };
    content: string;
}
