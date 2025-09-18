import Image from "next/image";
import Link from "next/link";
import { PrimaryLinkGradient } from "../../../components/common/PrimaryLinkGradient";
import NewsLetterSection from "../../../components/NewsLetterSection";
import { urlFor } from "../../../lib/sanityImage";
import RichText from "../../../components/common/RichText";
import { formattedDate } from "../../../lib/fornatDate";
import HomeBlogSwiper from "../../../components/HomeBlogSwiper";
import { getSingleBlogQuery, allBlogQuery } from "../../../lib/queries"; // Added getTopBlogsQuery
import { sanityClient } from "../../../lib/sanity";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

function getLocalizedText(field: any, fallback: string, locale: string) {
  if (!field) return fallback;
  return field[locale] || fallback;
}

interface PageProps {
  params: {
    locale: "en" | "ar";
    slug: string;
  };
}


export default async function BlogDetails({ params }: PageProps) {
  const awaitedParams = await params;
  const { slug, locale } = awaitedParams;
  
  const { query, params: queryParams } = getSingleBlogQuery(slug, locale);
  const blog = await sanityClient.fetch(query, queryParams);


  function getLocalizedBody(body: any, locale: string) {
  if (!body) return [];
  
  if (body[locale]) {
    return body[locale];
  }
  
  if (body.en) {
    return body.en;
  }
  
  if (body.ar) {
    return body.ar;
  }
  
  if (Array.isArray(body)) {
    return body;
  }
  
  return [];
}


  if (!blog) {
    notFound();
  }

  const topBlogsQuery = allBlogQuery(locale);
  const topBlogs = await sanityClient.fetch(topBlogsQuery.query, topBlogsQuery.params);
  const t = await getTranslations({ locale });


  return (
    <main className="bg-neutral1">
      <section className="py-14 lg bg-black1 bg-cover bg-center bg-no-repeat">
        <div className="w-full max-w-[1340px] px-5 mx-auto">
          <div className="w-full grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-6 justify-between">
            <div className="w-full">
              <ul className="flex items-center gap-2 mb-5">
                <li>
                  <Link
                    href="/blog"
                    className="text-primary flex items-center gap-2 text-sm font-medium"
                  >
                    <svg
                      className="rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={17}
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M6 3.5L11 8.5L6 13.5"
                        stroke="#3A3A41"
                        strokeWidth="1.5"
                      />
                    </svg>
                    {getLocalizedText(blog?.blogCategory?.[0]?.title, "Untitled Blog", locale)} {/* Fixed: accessing first category */}
                  </Link>
                </li>
              </ul>
              <div className="w-full">
                <h1 className="lg:text-56 text-32 font-semibold text-neutral1 md:mb-6">
                  {getLocalizedText(blog?.title, 'Untitled Blog', locale)}
                </h1>
                <ul className="md:flex items-center flex-wrap md:gap-6 gap-2 hidden">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={21}
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 6.16667C2 5.79848 2.29848 5.5 2.66667 5.5H17.3333C17.7015 5.5 18 5.79848 18 6.16667C18 6.53486 17.7015 6.83333 17.3333 6.83333H2.66667C2.29848 6.83333 2 6.53486 2 6.16667ZM2 10.8333C2 10.4651 2.29848 10.1667 2.66667 10.1667H17.3333C17.7015 10.1667 18 10.4651 18 10.8333C18 11.2015 17.7015 11.5 17.3333 11.5H2.66667C2.29848 11.5 2 11.2015 2 10.8333ZM2 15.5C2 15.1318 2.29848 14.8333 2.66667 14.8333H17.3333C17.7015 14.8333 18 15.1318 18 15.5C18 15.8682 17.7015 16.1667 17.3333 16.1667H2.66667C2.29848 16.1667 2 15.8682 2 15.5Z"
                        fill="#7F8090"
                      />
                    </svg>
                    <p className="text-sm text-gray5">
                      {getLocalizedText(
                        blog?.blogCategory?.[0]?.title,
                        'Uncategorized'
                        , locale
                      )}
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.00002 13.6C11.0928 13.6 13.6 11.0928 13.6 8.00002C13.6 4.90723 11.0928 2.40002 8.00002 2.40002C4.90723 2.40002 2.40002 4.90723 2.40002 8.00002C2.40002 11.0928 4.90723 13.6 8.00002 13.6ZM9.00002 5.20002C9.00002 4.64774 8.55231 4.20002 8.00002 4.20002C7.44774 4.20002 7.00002 4.64774 7.00002 5.20002V8.00002C7.00002 8.26524 7.10538 8.51959 7.29292 8.70713L9.27282 10.687C9.66334 11.0776 10.2965 11.0776 10.687 10.687C11.0776 10.2965 11.0776 9.66334 10.687 9.27282L9.00002 7.58581V5.20002Z"
                        fill="#7F8090"
                      />
                    </svg>
                    <p className="text-sm text-gray5">{blog?.duration}</p>
                  </li>

                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={21}
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.875 16.625C3.875 16.1418 4.26675 15.75 4.75 15.75H15.25C15.7333 15.75 16.125 16.1418 16.125 16.625C16.125 17.1082 15.7333 17.5 15.25 17.5H4.75C4.26675 17.5 3.875 17.1082 3.875 16.625ZM6.75628 7.61872C6.41457 7.27701 6.41457 6.72299 6.75628 6.38128L9.38128 3.75628C9.54538 3.59219 9.76794 3.5 10 3.5C10.2321 3.5 10.4546 3.59219 10.6187 3.75628L13.2437 6.38128C13.5854 6.72299 13.5854 7.27701 13.2437 7.61872C12.902 7.96043 12.348 7.96043 12.0063 7.61872L10.875 6.48744L10.875 13.125C10.875 13.6082 10.4832 14 10 14C9.51675 14 9.125 13.6082 9.125 13.125L9.125 6.48744L7.99372 7.61872C7.65201 7.96043 7.09799 7.96043 6.75628 7.61872Z"
                        fill="#7F8090"
                      />
                    </svg>
                    <p className="text-sm text-gray5">
                      {formattedDate(blog?.createdAt)}
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full flex items-center justify-center">
              {blog?.mainImage && (
                <Image
                  src={urlFor(blog?.mainImage).width(600).url()}
                  width={600}
                  height={290}
                  alt="img"
                  className="w-full h-auto object-cover"
                />
              )}
            </div>
            <ul className="flex items-center flex-wrap md:gap-6 gap-2 md:hidden">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={21}
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 6.16667C2 5.79848 2.29848 5.5 2.66667 5.5H17.3333C17.7015 5.5 18 5.79848 18 6.16667C18 6.53486 17.7015 6.83333 17.3333 6.83333H2.66667C2.29848 6.83333 2 6.53486 2 6.16667ZM2 10.8333C2 10.4651 2.29848 10.1667 2.66667 10.1667H17.3333C17.7015 10.1667 18 10.4651 18 10.8333C18 11.2015 17.7015 11.5 17.3333 11.5H2.66667C2.29848 11.5 2 11.2015 2 10.8333ZM2 15.5C2 15.1318 2.29848 14.8333 2.66667 14.8333H17.3333C17.7015 14.8333 18 15.1318 18 15.5C18 15.8682 17.7015 16.1667 17.3333 16.1667H2.66667C2.29848 16.1667 2 15.8682 2 15.5Z"
                    fill="#7F8090"
                  />
                </svg>
                <p className="text-sm text-gray5">
                  {getLocalizedText(
                    blog?.blogCategory?.[0]?.title,
                    'Uncategorized'
                    , locale
                  )}
                </p>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.00002 13.6C11.0928 13.6 13.6 11.0928 13.6 8.00002C13.6 4.90723 11.0928 2.40002 8.00002 2.40002C4.90723 2.40002 2.40002 4.90723 2.40002 8.00002C2.40002 11.0928 4.90723 13.6 8.00002 13.6ZM9.00002 5.20002C9.00002 4.64774 8.55231 4.20002 8.00002 4.20002C7.44774 4.20002 7.00002 4.64774 7.00002 5.20002V8.00002C7.00002 8.26524 7.10538 8.51959 7.29292 8.70713L9.27282 10.687C9.66334 11.0776 10.2965 11.0776 10.687 10.687C11.0776 10.2965 11.0776 9.66334 10.687 9.27282L9.00002 7.58581V5.20002Z"
                    fill="#7F8090"
                  />
                </svg>
                <p className="text-sm text-gray5">{blog?.duration}</p>
              </li>

              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={21}
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.875 16.625C3.875 16.1418 4.26675 15.75 4.75 15.75H15.25C15.7333 15.75 16.125 16.1418 16.125 16.625C16.125 17.1082 15.7333 17.5 15.25 17.5H4.75C4.26675 17.5 3.875 17.1082 3.875 16.625ZM6.75628 7.61872C6.41457 7.27701 6.41457 6.72299 6.75628 6.38128L9.38128 3.75628C9.54538 3.59219 9.76794 3.5 10 3.5C10.2321 3.5 10.4546 3.59219 10.6187 3.75628L13.2437 6.38128C13.5854 6.72299 13.5854 7.27701 13.2437 7.61872C12.902 7.96043 12.348 7.96043 12.0063 7.61872L10.875 6.48744L10.875 13.125C10.875 13.6082 10.4832 14 10 14C9.51675 14 9.125 13.6082 9.125 13.125L9.125 6.48744L7.99372 7.61872C7.65201 7.96043 7.09799 7.96043 6.75628 7.61872Z"
                    fill="#7F8090"
                  />
                </svg>
                <p className="text-sm text-gray5">
                  {formattedDate(blog?.createdAt)}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="md:pb-20 pb-10">
        <div className="w-full max-w-[1340px] md:px-5 px-4 mx-auto">
          <div className="w-full flex gap-16 pt-16">
            <div className="lg:w-[calc(100%_-_360px)]">
              <div className="w-full md:p-4 rounded-lg mb-6">
                <div className="w-full">
                  <div className="rich-text">
                   <RichText content={blog?.body?.[locale] || blog?.body?.en || []} />
                  </div>
                </div>
              </div>

              <div className="w-full lg:p-6 p-3 border border-gray1 rounded-lg">
                <div className="w-full flex md:flex-row flex-col gap-6">
                  {blog?.writer?.image && (
                    <Image
                      src={urlFor(blog?.writer?.image).width(286).url()}
                      alt="Image"
                      
                      width={220}
                      height={268}
                      className="max-w-[220px] lg:min-w-[220px] rounded-lg w-full h-auto object-cover"
                    />
                  )}
                  <div className="">
                    <h4 className="text-base text-black font-medium">
                      {getLocalizedText(
                        blog?.writer?.name,
                        'Unknown Author'
                        , locale
                      )}
                    </h4>
                    <p className="text-base text-gray5">
                      {getLocalizedText(
                        blog?.writer?.position,
                        'Unknown Position'
                        , locale
                      )}
                    </p>
                    <div className="rich-text-bio">
                      <RichText content={blog?.writer?.bio[locale] || blog?.writer?.bio.en || []} />
                    </div>
                    <h4 className="text-sm text-gray5 my-4">
                      {t('you_can_learn_more_about_me_on')}:
                    </h4>
                    <ul className="flex items-center gap-3 -mt-2">
                      <li>
                        <Link
                          href={blog?.writer?.twitter || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={'/twitter.svg'}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                            alt=""
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={blog?.writer?.youtube || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={'/youtube-icon.svg'}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                            alt=""
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={blog?.writer?.linkedIn || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={'/linked-icon.svg'}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                            alt=""
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={blog?.writer?.instagram || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={'/instagram-icon.svg'}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                            alt=""
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={blog?.writer?.dribbble || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={'/social-icon-4.svg'}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                            alt=""
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            <div className="w-full max-w-[360px] h-auto hidden lg:block">
              <div className="w-full  rounded-xl p-4 lg:block hidden sticky top-20">
                <h3 className="text-xl text-black1 font-semibold">
                  {t('top_blog')}
                </h3>
                <div className="w-full mt-6">
                  {topBlogs && topBlogs.length > 0 ? (
                    <>
                      <ul className="w-full space-y-2">
                        {topBlogs
                          .filter((blog: any) => blog.topBlog)
                          .slice(0, 5)
                          .map((blog: any) => (
                            <li key={blog?._id}>
                              <Link
                                className="flex gap-3 py-2 px-2 bg-white border border-gray5/10 rounded-lg"
                                href={`/blog/${blog.slug}`}
                              >
                                {blog?.mainImage && (
                                  <Image
                                    src={urlFor(blog?.mainImage)
                                      .width(400)
                                      .url()}
                                    width={100}
                                    height={60}
                                    className="rounded-lg object-cover"
                                    alt="no-img"
                                  />
                                )}
                                <div>
                                  <h4 className="text-sm leading-tight line-clamp-2 text-black1 font-medium">
                                    {getLocalizedText(
                                      blog?.title,
                                      'Untitled Blog'
                                      , locale
                                    )}
                                  </h4>
                                  <p className="text-xs text-gray-500 line-clamp-2">
                                    {getLocalizedText(
                                      blog?.description,
                                      'No description available'
                                      , locale
                                    )}
                                  </p>
                                </div>
                              </Link>
                            </li>
                          ))}
                      </ul>
                      <Link
                        href={'/blog'}
                        className="text-center w-full block my-4 text-sm text-primary1"
                      >
                        {t('see_more')}
                      </Link>
                    </>
                  ) : (
                    <p className="text-gray-500">No top blogs available</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:pb-20 pb-10 pt-10 bg-white w-full">
        <div className="w-full max-w-[1340px] md:px-5 px-4 mx-auto">
          <div className="w-full">
            <span className="text-base text-primary2">{t('blogs')}</span>
            <div className="w-full flex lg:flex-row flex-col items-start gap-4 lg:items-center justify-between mb-9">
              <div className="">
                <h2 className="lg:text-5xl text-28 text-neutral2 font-semibold md:mt-5 mt-3 md:mb-5 mb-3">
                  {t('explore_our_language_learning')}
                </h2>
                <p className="md:text-lg text-base text-gray3">
                  {t('tips_guides_and_success_stories')}
                </p>
              </div>
              <PrimaryLinkGradient href="/blog" className="py-3 text-base">
                <span>{t('view_posts')}</span>
              </PrimaryLinkGradient>
            </div>
          </div>
          <div className="w-full">
            <HomeBlogSwiper />
          </div>
        </div>
      </section>

      <NewsLetterSection />
    </main>
  )
} 