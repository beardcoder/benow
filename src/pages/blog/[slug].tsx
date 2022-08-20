import { getAllPosts, getPostBySlug } from '@/src/utils/get-blog'
import 'prism-themes/themes/prism-a11y-dark.css'
import { NextSeo, ArticleJsonLd } from 'next-seo'
import { FiArrowLeft } from 'react-icons/fi'
import { UiButton } from '@/src/components/Ui/Button/UiButton'
import { GetStaticPaths, GetStaticProps } from 'next'
import LayoutPage from '@/src/components/Layout/LayoutPage'
import BlogHeader from '@/src/components/Blog/BlogHeader'
import BlogContent from '@/src/components/Blog/BlogContent'
import IArticle from '@/@types/article'

export default function BlogSlug({
  title,
  content,
  date_created,
  image,
  tags,
  slug,
}: IArticle) {
  return (
    <LayoutPage>
      <NextSeo
        title={`${title} — Markus Sommer`}
        canonical={`https://www.creativeworkspace.de/blog/${slug}`}
      />
      <ArticleJsonLd
        url={`https://www.creativeworkspace.de/blog/${slug}`}
        title={title ?? ''}
        images={[String(image) ?? '']}
        datePublished={date_created}
        dateModified={date_created}
        authorName='Markus Sommer'
        description={content ?? ''}
      />
      <BlogHeader
        title={title ?? ''}
        image={`${image}?width=2560&height=600&fit=cover&transforms=[["blur", 10]]`}
        createdAt={date_created}
        author='Markus Sommer'
        tags={tags ?? ''}
        id='intro'
      />
      <article>
        <div className='container flex flex-col items-start px-5 mx-auto lg:px-0 lg:flex-row'>
          <BlogContent
            className='lg:w-5/6'
            articleBody={content ?? ''}
          ></BlogContent>
          <div className='flex-col order-1 w-full mb-5 md:sticky md:top-24 lg:order-2 lg:w-1/6'>
            <div>
              <UiButton href='/#blog'>
                <FiArrowLeft className='mr-1 stroke-1' />{' '}
                <span className='pr-2'>Zurück</span>
              </UiButton>
            </div>
          </div>
        </div>
        <div className='mt-12 text-center'>
          <UiButton href='/#blog'>
            <FiArrowLeft className='inline-block mr-1 stroke-1' />{' '}
            <span className='pr-2'>Zurück</span>
          </UiButton>
        </div>
      </article>
    </LayoutPage>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts(['slug'])

  return {
    paths: posts.map((post) => ({
      params: {
        slug: String(post.slug),
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let post: IArticle | null = null
  post = await getPostBySlug(
    typeof params?.slug === 'string' ? params?.slug : '',
    ['title', 'image', 'slug', 'tags', 'date_created', 'content']
  )
  return {
    props: {
      ...post,
    },
  }
}
