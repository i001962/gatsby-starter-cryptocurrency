import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { Disqus } from 'gatsby-plugin-disqus'
import Layout from '../components/Layout'

const {
  siteMetadata: { siteUrl }
} = require('../../config')

export default ({ data: { post }, location, pageContext }) => {
  const disqusConfig = {
    url: `${siteUrl}${location.pathname}`,
    identifier: post.id,
    title: post.title
  }


  return (
    <Layout location={location}>
      <div className="blog">
        <Helmet title={post.frontmatter.title.replace(/<[^>]+>/g, '')} />
        <section className="container">
          <h1 dangerouslySetInnerHTML={{ __html: post.frontmatter.title }} />
          <div className="blog__content">
            <Img fluid={post.frontmatter.titleImage.childImageSharp.fluid} />
            <div
              className="blog__title_image_caption"
              dangerouslySetInnerHTML={{ __html: post.frontmatter.titleImageCC }}
            />
            <div className="post_info">
              <div className="post_info__avatar">
                <img alt="n8tb1t" src="/contributors/core/n8tb1t.jpg" />
              </div>
              <div className="post_info__meta">
                <div>
                  <strong>Time to read:</strong> {post.timeToRead} minutes
                </div>
                <div>
                  <strong>Published:</strong> {post.frontmatter.date}
                </div>
                <div>
                  <strong>Author:</strong>{' '}
                  <span className="link">{post.frontmatter.author.id}</span>
                </div>
                <div>
                  <strong>Category:</strong>{' '}
                  <span className="link">{post.frontmatter.category}</span>
                </div>
                <div className="post_info__tags">
                  <strong>Tags:</strong>{' '}
                  {post.frontmatter.tags.map(tag => (
                    <span key={tag}>#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="blog__article" dangerouslySetInnerHTML={{ __html: post.html }} />
            <Disqus className="blog__disqus" config={disqusConfig} />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostBySlug($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      ...markdown_node
    }
  }
`
