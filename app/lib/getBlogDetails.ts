import { getSingleBlogQuery } from './queries';
import { sanityClient } from './sanity';

export async function getBlogDetails(slug: string, locale: string) {
  const { query, params } = getSingleBlogQuery(slug, locale);
  const blog = await sanityClient.fetch(query, params);
  return blog;
}
