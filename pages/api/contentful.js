import { createClient } from 'contentful';

// Set Contentful Keys
const client = createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
});

// Get Contents for Top Page
export async function fetchEntriesTop() {
  const entries = await client.getEntries({
    content_type: process.env.CTF_BLOG_POST_TYPE_ID,
    limit: 5,
    order: '-fields.publishDate',
  });
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
}

// Get Contents for Post Page
export async function fetchEntriesPost(limit, skip, query) {
  const entries = await client.getEntries({
    content_type: process.env.CTF_BLOG_POST_TYPE_ID,
    limit,
    skip,
    order: '-fields.publishDate',
    query: query,
  });
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
}

// Get Contents for Post Detail Page
export async function getAllPostsWithSlug() {
  const entries = await client.getEntries({
    content_type: process.env.CTF_BLOG_POST_TYPE_ID,
    select: 'fields.slug',
  });
  return entries;
}

export async function getPost(slug) {
  const entry = await client.getEntries({
    content_type: process.env.CTF_BLOG_POST_TYPE_ID,
    limit: 1,
    'fields.slug': slug,
  });

  return entry;
}
