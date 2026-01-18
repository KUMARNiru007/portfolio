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
  },
  {
    id: '04',
    title: 'The OSI Model: A Clear and Simple Guide to Network Layers',
    readTime: '6 min read',
    externalUrl: 'https://web-jargons.hashnode.dev/the-osi-model-a-clear-and-simple-guide-to-network-layers'
  },
  {
    id: '05',
    title: "HTTP vs HTTPS | What's TLS handshake ? | SSL handshake",
    readTime: '7 min read',
    externalUrl: 'https://web-jargons.hashnode.dev/http-vs-https-whats-tls-handshake-ssl-handshake'
  },
  {
    id: '05',
    title: "CSS : The Personal Stylist for Your HTML Website",
    readTime: '11 min read',
    externalUrl: 'https://kumar-nirupam-webdev.hashnode.dev/css-the-personal-stylist-for-your-html-website'
  },
  {
    id: '06',
    title: "HTML: The Skeleton That Shapes Every Website!",
    readTime: '5 min read',
    externalUrl: 'https://kumar-nirupam-webdev.hashnode.dev/html-the-skeleton-that-shapes-every-website'
  },
]

export const getBlogById = (id: string): BlogPost | undefined => {
  return blogs.find(blog => blog.id === id)
}
