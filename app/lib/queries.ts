
export const allCoursesQuery = (locale: string) => ({
  query: `*[_type == "course" && (__i18n_lang == $locale || !defined(__i18n_lang))] | order(publishedAt asc){
    _id,
    title,
    featured,
    topCourse,
    description,
    mainImage,
    createdAt,
    publishedAt,
    purchasedCount,
    review,
    level,
    price,
    languages,
    duration,
    "slug": slug.current,
    courseCategory[]->{
      _id,
      title,
      "slug": slug.current
    },
    curriculum[]{
      title,
      description,
      previewlink,
      lectures[]{
        title,
        videoUrl,
        previewUrl,
        duration
      }
    },
    reviews[]->{
      user,
      rating,
      comment
    }
  }`,
  params: { locale }
});


export const getCourseReviewsQuery = (slug: string, locale: string, page: number = 1, pageSize: number = 3) => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return {
    query: `
      *[_type == "course" && slug.current == $slug && (__i18n_lang == $locale || !defined(__i18n_lang))][0]{
        "reviews": userReviews[$start...$end]->{
          user,
          "slug": slug.current,
          userAvatar,
          userCourse,
          location,
          rating,
          comment
        },
        "totalReviews": count(userReviews)
      }
    `,
    params: { slug, locale, start, end },
  };
};


export const featuredCoursesQuery = (locale: string) => ({
  query: `
    *[
      _type == "course" &&
      featured == true &&
      topCourse == true &&
      (__i18n_lang == $locale || !defined(__i18n_lang))
    ]{
      _id,
      title,
      featured,
      topCourse,
      description,
      mainImage,
      createdAt,
      publishedAt,
      purchasedCount,
      review,
      level,
      languages,
      duration,
      courseCategory[]->{
        _id,
        title,
        "slug": slug.current
      },
      "slug": slug.current,
      curriculum,
      reviews[]->{
        user,
        rating,
        comment
      }
    }
  `,
  params: { locale }
});

// Fallback query without internationalization
export const featuredCoursesQueryFallback = () => ({
  query: `
    *[
      _type == "course" &&
      featured == true &&
      topCourse == true
    ]{
      _id,
      title,
      featured,
      topCourse,
      description,
      mainImage,
      createdAt,
      publishedAt,
      purchasedCount,
      review,
      level,
      languages,
      duration,
      courseCategory[]->{
        _id,
        title,
        "slug": slug.current
      },
      "slug": slug.current,
      curriculum,
      reviews[]->{
        user,
        rating,
        comment
      }
    }
  `,
  params: {}
});


export const languagesCoursesQuery = (locale: string) => ({
  query: `
    *[
      _type == "course" &&
      featured == true &&
      defined(courseCategory[0]) &&
      (__i18n_lang == $locale || !defined(__i18n_lang))
    ]{
      _id,
      title,
      featured,
      description,
      mainImage,
      createdAt,
      publishedAt,
      purchasedCount,
      review,
      level,
      languages,
      duration,
      courseCategory[]->{
        _id,
        title,
        "slug": slug.current
      },
      "slug": slug.current,
      curriculum,
      reviews[]->{
        user,
        rating,
        comment
      }
    }
  `,
  params: { locale }
});

// Fallback query without internationalization
export const languagesCoursesQueryFallback = () => ({
  query: `
    *[
      _type == "course" &&
      featured == true &&
      defined(courseCategory[0])
    ]{
      _id,
      title,
      featured,
      description,
      mainImage,
      createdAt,
      publishedAt,
      purchasedCount,
      review,
      level,
      languages,
      duration,
      courseCategory[]->{
        _id,
        title,
        "slug": slug.current
      },
      "slug": slug.current,
      curriculum,
      reviews[]->{
        user,
        rating,
        comment
      }
    }
  `,
  params: {}
});


export const spotlightQuery = (locale: string) => ({
  query: `
    *[_type == "spotlight" && (__i18n_lang == $locale || !defined(__i18n_lang))]{
      _id,
      user,
      userCourse,
      userAvatar,
      location,
      poster,
      videoUrl
    }
  `,
  params: { locale }
});


export const reviewsQuery = (locale: string) => ({
  query: `
    *[_type == "review" && (__i18n_lang == $locale || !defined(__i18n_lang))]{
      _id,
      user,
      userCourse,
      userAvatar,
      location,
      rating,
      comment,
      createdAt,
      courseRefs[]->{
        _id,
        title,
        price,
        review,
        slug
      }
    }
  `,
  params: { locale }
});


export const allBlogQuery = (locale: string) => ({
  query: `
    *[_type == "blog" && (__i18n_lang == $locale || !defined(__i18n_lang))] | order(publishedAt asc){
      _id,
      title,
      featured,
      topBlog,
      description,
      mainImage,
      createdAt,
      publishedAt,
      duration,
      "slug": slug.current,
      blogCategory[]->{
        _id,
        title,
        "slug": slug.current
      },
      writer->{
        _id,
        name,
        "slug": slug.current,
        position,
        image,
        twitter,
        facebook,
        instagram,
        youtube,
        linkedIn,
        dribbble,
        bio
      }
    }
  `,
  params: { locale }
});

// Fallback query without internationalization
export const allBlogQueryFallback = () => ({
  query: `
    *[_type == "blog"] | order(publishedAt asc){
      _id,
      title,
      featured,
      topBlog,
      description,
      mainImage,
      createdAt,
      publishedAt,
      duration,
      "slug": slug.current,
      blogCategory[]->{
        _id,
        title,
        "slug": slug.current
      },
      writer->{
        _id,
        name,
        "slug": slug.current,
        position,
        image,
        twitter,
        facebook,
        instagram,
        youtube,
        linkedIn,
        dribbble,
        bio
      }
    }
  `,
  params: {}
});

export const getSingleBlogQuery = (slug: string, locale: string) => ({
  query: `
    *[_type == "blog" && slug.current == $slug && (__i18n_lang == $locale || !defined(__i18n_lang))][0]{
      _id,
      title,
      featured,
      description,
      body,
      mainImage,
      createdAt,
      publishedAt,
      duration,
      writer->{
        _id,
        name,
        "slug": slug.current,
        position,
        image,
        twitter,
        facebook,
        instagram,
        youtube,
        linkedIn,
        dribbble,
        bio
      },
      video {
        url,
        poster {
          alt,
          "image": asset->url
        }
      },
      blogCategory[]->{
        _id,
        title,
        "slug": slug.current
      }
    }
  `,
  params: { slug, locale }
});

export const getSingleCourseQuery = (slug: string, locale: string) => ({
  query: `
    *[_type == "course" && slug.current == $slug && (__i18n_lang == $locale || !defined(__i18n_lang))][0]{
      _id,
      title,
      featured,
      description,
      body,
      mainImage,
      createdAt,
      publishedAt,
      certificate,
      purchasedCount,
      review,
      level,
      price,
      languages,
      duration,
      WhatYouLearn,
      "slug": slug.current,
      courseCategory[]->{
        _id,
        title,
        "slug": slug.current
      },
      instructor->{
        _id,
        name,
        "slug": slug.current,
        position,
        image,
        twitter,
        facebook,
        instagram,
        youtube,
        linkedIn,
        dribbble,
        bio
      },
      testimonialsReviews[],
      video {
        url,
        poster { alt, "image": asset->url }
      },
      curriculum[]{
        title,
        description,
        previewlink,
        lectures[]{
          title,
          videoUrl,
          previewUrl,
          duration
        }
      },
      packages[]{
        name,
        description,
        price,
        inclusion,
        access
      },
      userReviews[]->{
        user,
        "slug": slug.current,
        userAvatar,
        userCourse,
        location,
        rating,
        comment
      }
    }
  `,
  params: { slug, locale }
});

