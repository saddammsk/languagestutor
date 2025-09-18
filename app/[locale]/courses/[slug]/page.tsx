import { sanityClient } from '@/app/lib/sanity';
import { notFound } from 'next/navigation';
import { allCoursesQuery, getSingleCourseQuery } from '@/app/lib/queries';
import CoursesDetails from './CoursesDetails';

interface CoursePageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug, locale } = params;

  const { query, params: queryParams } = getSingleCourseQuery(slug, locale);
  const courseData = await sanityClient.fetch(query, queryParams);

  if (!courseData) {
    notFound();
  }

  const allCoursesQueryResult = allCoursesQuery(locale);
  const frequentlyCourses = await sanityClient.fetch(
    allCoursesQueryResult.query,
    allCoursesQueryResult.params
  );

  return (
    <CoursesDetails
      course={courseData}
      frequentlyCourses={frequentlyCourses}
      locale={locale}
    />
  );
}
