import fm from 'front-matter';

export type BlogPostFrontmatter = {
  title: string;
  description: string;
  date: string;
  slug: string;
  category?: string;
  image?: string;
};

export type BlogPost = BlogPostFrontmatter & {
  id: string;
  excerpt: string;
  content: string;
  metaTitle?: string;
  metaDescription?: string;
};

// Eagerly load all markdown files as raw strings
const markdownModules = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

export function getAllPosts(): BlogPost[] {
  const posts: BlogPost[] = Object.entries(markdownModules).map(([path, rawContent]) => {
    // rawContent is the string content of the markdown file
    const parsed = fm<BlogPostFrontmatter>(rawContent as string);
    const attributes = parsed.attributes;
    
    // Zapewniamy domyślne wartości jeśli ich brakuje
    return {
      id: attributes.slug || path,
      slug: attributes.slug,
      title: attributes.title,
      description: attributes.description,
      date: attributes.date,
      category: attributes.category || 'inne',
      image: attributes.image || '/images/placeholders/landscape.svg',
      excerpt: attributes.description, // description używamy jako excerpt
      content: parsed.body,
      metaTitle: attributes.title,
      metaDescription: attributes.description,
    };
  });

  // Sortuj od najnowszego
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find(post => post.slug === slug);
}
