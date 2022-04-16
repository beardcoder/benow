import { getAllPosts, getPostBySlug } from '@/src/services/blog'
import 'prism-themes/themes/prism-a11y-dark.css'
import { NextSeo, ArticleJsonLd } from 'next-seo'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'
import { IPostFields } from '@/@types/generated/contentful'
import { UiButton } from '@/src/components/Ui/Button/UiButton'
import { GetStaticPaths, GetStaticProps } from 'next'
import LayoutPage from '@/src/components/Layout/LayoutPage'
import BlogHeader from '@/src/components/Blog/BlogHeader'
import BlogContent from '@/src/components/Blog/BlogContent'

export default function BlogSlug({
  headline,
  articleBody,
  description,
  date,
  image,
  author,
  type,
  slug,
}: IPostFields) {
  return (
    <LayoutPage>
      <NextSeo
        title={`${headline} — Markus Sommer`}
        description={description}
        canonical={`https://www.creativeworkspace.de/blog/${slug}`}
      />
      <ArticleJsonLd
        url={`https://www.creativeworkspace.de/blog/${slug}`}
        title={headline ?? ''}
        images={[
          typeof image?.fields.file.url === 'string'
            ? image?.fields.file.url
            : '',
        ]}
        datePublished={date}
        dateModified={date}
        authorName='Markus Sommer'
        description={description ?? ''}
      />
      <BlogHeader
        title={headline ?? ''}
        image={`${image?.fields.file.url}?w=2560&h=600&fit=thumb`}
        createdAt={date}
        author={author}
        type={type ?? ''}
        id='intro'
      />
      <article>
        <div className='container flex flex-col items-start px-5 mx-auto lg:px-0 lg:flex-row'>
          <BlogContent
            className='lg:w-5/6'
            articleBody={articleBody ?? ''}
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
  const posts: IPostFields[] = await getAllPosts()

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let post = {}
  post = await getPostBySlug(
    typeof params?.slug === 'string' ? params?.slug : ''
  )

  return {
    props: {
      ...post,
    },
  }
}
