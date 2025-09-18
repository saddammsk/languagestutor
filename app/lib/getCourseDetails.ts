import { getSingleCourseQuery } from './queries';
import { sanityClient } from './sanity';

export async function getCourse(slug: string, locale: string) {
  try {
    const { query, params } = getSingleCourseQuery(slug, locale);
    const course = await sanityClient.fetch(query, params);
    return course;
  } catch (error) {
    console.error('Detailed error:', error);
    throw new Error(`Failed to fetch course`);
  }
}