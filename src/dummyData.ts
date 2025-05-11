import { User, Post } from './types';

export const dummyUsers: User[] = [
  {
    id: '1',
    username: 'Mr. Avi',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'Mr. Avi',
    bio: 'Software developer and tech enthusiast'
  },
  {
    id: '2',
    username: 'janedoe',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    name: 'Jane Doe',
    bio: 'Digital artist and creative thinker'
  },
  {
    id: '3',
    username: 'alexsmith',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    name: 'Alex Smith',
    bio: 'Travel photographer capturing moments'
  },
  {
    id: '4',
    username: 'Akshat Chudi Prasad',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    name: 'Akshat Chudi Prasad',
    bio: 'Food blogger and recipe developer'
  },
  {
    id: '5',
    username: 'mikebrown',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    name: 'Mike Brown',
    bio: 'Fitness trainer and health coach'
  },
  {
    id: '6',
    username: 'emilywilson',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    name: 'Emily Wilson',
    bio: 'Book lover and aspiring writer'
  }


];

export const dummyPosts: Post[] = [
  {
    id: '1',
    createdAt: '2025-05-3T10:00:00Z',
    // image: 'https://randomuser.me/api/portraits/men/1.jpg',
    content: 'Just launched my new app! Check it out and let me know what you think. #coding #tech',
    user: dummyUsers[0],
    user_id: '1',
    parent_id: null,
    parent: null,
    replies: [],
    likes: '1.5k'
  },
  {
    id: '2',
    createdAt: '2025-03-15T10:30:00Z',
    content: 'That looks amazing! What tech stack did you use?',
    user: dummyUsers[1],
    user_id: '2',
    parent_id: '1',
    parent: null,
    likes: '1.5k',
    replies: []
  },
  {
    id: '3',
    createdAt: '2024-03-15T11:00:00Z',
    content: 'I used React Native with TypeScript and Firebase for the backend. Really happy with how it turned out!',
    user: dummyUsers[2],
    user_id: '1',
    parent_id: '2',
    parent: null,
    replies: [],
    likes: '1.5k'
  },
  {
    id: '4',
    createdAt: '2024-03-15T12:00:00Z',
    content: 'Just finished my latest digital art piece. What do you think? 🎨',
    user: dummyUsers[3],
    user_id: '2',
    parent_id: null,
    parent: null,
    replies: [],
    likes: '1.5k'
  },
  {
    id: '5',
    createdAt: '2024-03-15T12:30:00Z',
    content: 'Beautiful work! The colors are stunning.',
    user: dummyUsers[4],
    user_id: '3',
    parent_id: '4',
    parent: null,
    replies: [],
    likes: '1.5k'
  },
  {
    id: '6',
    createdAt: '2024-03-15T13:00:00Z',
    content: 'Just got back from an amazing trip to Japan! Here are some of my favorite shots.',
    user: dummyUsers[5],
    user_id: '3',
    parent_id: null,
    parent: null,
    replies: [],
    likes: '1.5k'
  },
  {
    id: '7',
    createdAt: '2024-03-15T14:00:00Z',
    content: 'Tried a new recipe today - homemade ramen! Turned out better than expected.',
    user: dummyUsers[3],
    user_id: '4',
    parent_id: null,
    parent: null,
    replies: [],
    likes: '1.5k'
  },
  {
    id: '8',
    createdAt: '2024-03-15T14:30:00Z',
    content: 'Recipe please! That looks delicious.',
    user: dummyUsers[4],
    user_id: '5',
    parent_id: '7',
    parent: null,
    replies: [],
    likes: '1.5k'
  },
  {
    id: '9',
    createdAt: '2024-03-15T15:00:00Z',
    content: 'Just hit a new personal best at the gym! 💪',
    user: dummyUsers[1],
    user_id: '5',
    parent_id: null,
    parent: null,
    replies: [],
    likes: '1.5k'
  },
  {
    id: '10',
    createdAt: '2024-03-15T15:30:00Z',
    content: 'Currently reading "The Silent Patient". Anyone else read it?',
    user: dummyUsers[2],
    user_id: '6',
    parent_id: null,
    parent: null,
    replies: [],
    likes: '1.5k'
  },
  {
    id: '11',
    createdAt: '2024-03-15T16:00:00Z',
    content: 'Yes! It was such a mind-blowing ending!',
    user: dummyUsers[0],
    user_id: '1',
    parent_id: '10',
    parent: null,
    replies: [],
    likes: '1.5k'
  },
  {
    id: '12',
    createdAt: '2024-03-15T16:30:00Z',
    content: 'Working on a new fitness program. Who wants to join me?',
    user: dummyUsers[4],
    user_id: '5',
    parent_id: null,
    parent: null,
    replies: [],
    likes: '1.5k'
  },
  {
    id: '13',
    createdAt: '2024-03-15T17:00:00Z',
    content: 'I\'m in! What\'s the plan?',
    user: dummyUsers[1],
    user_id: '2',
    parent_id: '12',
    parent: null,
    replies: [],
    likes: '1.5k'
  },
  {
    id: '14',
    createdAt: '2024-03-15T17:30:00Z',
    content: 'Just finished my latest painting. The process was so therapeutic.',
    user: dummyUsers[5],
    user_id: '2',
    parent_id: null,
    parent: null,
    replies: [],
    likes: '1.5k'
  },
  {
    id: '15',
    createdAt: '2024-03-15T18:00:00Z',
    content: 'That\'s beautiful! Do you sell your artwork?',
    user: dummyUsers[3],
    user_id: '4',
    parent_id: '14',
    parent: null,
    replies: [],
    likes: '1.5k'
  },
  {
    id: '16',
    createdAt: '2024-03-15T18:30:00Z',
    content: 'Yes, I do! You can check out my portfolio at janedoe.art',
    user: dummyUsers[2],
    user_id: '2',
    parent_id: '15',
    parent: null,
    replies: [],
    likes: '1.5k'
  }
];
