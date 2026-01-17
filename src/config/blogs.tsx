import {type BlogPost } from '../types/blog'

export const blogs: BlogPost[] = [
  {
    id: '01',
    title: 'Web Jargons for Dummies',
    readTime: '7 min read',
    externalUrl: 'https://web-jargons.hashnode.dev/web-jargons-for-dummies'
  },
  {
    id: '02',
    title: 'Is your Internet Connection Coming from The Digital cloud or Beneath the Ocean',
    readTime: '6 min read',
    externalUrl: 'https://web-jargons.hashnode.dev/is-your-internet-connection-coming-from-the-digital-cloud-or-beneath-the-ocean'
  },
  {
    id: '03',
    title: 'Battle of Array Methods in JavaScript : Ash vs Alain - the Kalos League Final',
    readTime: '6 min read',
    externalUrl: 'https://kumar-nirupam-webdev.hashnode.dev/battle-of-array-methods-in-javascript-ash-vs-alain-the-kalos-league-final'
  }
]

export const getBlogById = (id: string): BlogPost | undefined => {
  return blogs.find(blog => blog.id === id)
}
