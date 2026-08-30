import { getAllPosts } from '../lib/blogUtils';

export const blogCategories = [
  { id: 'noclegi', title: 'Noclegi' },
  { id: 'weekend', title: 'Weekend w Zakopanem' },
  { id: 'szlaki', title: 'Szlaki Górskie' },
  { id: 'atrakcje', title: 'Atrakcje' },
];

export const blogPosts = getAllPosts();
