type IAtor = {
    id: number;
    name: string;
    username: string;
    avatar: string;
}

export type IPost = {
    id: number
    cover: string,
    title: string,
    body: string
    slug: string
    createdAt: Date
    updatedAt: Date
    author: IAtor
}