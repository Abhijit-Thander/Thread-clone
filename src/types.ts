export type User = {
    id: string;
    username: string;
    image: string;
    name: string;
    bio: string;
}

export type Post = {
    id: string;
    createdAt: string;
    content: string;
    user: User;
    user_id: string;
    parent_id: string | null;
    parent: Post | null;
    replies: Post[];
    likes: string;
  
    

}
