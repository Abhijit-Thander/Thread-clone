export interface Author {
  name: string;
  username: string;
  avatar: string;
}

export interface Post {
  id: string;
  content: string;
  image?: string;
  author: Author;
  replies: number;
  reposts: number;
  likes: number;
  createdAt: string;
} 