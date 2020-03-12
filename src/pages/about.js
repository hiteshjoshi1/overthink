import React from 'react';
import Layout from '../components/Layout';
import get from 'lodash/get';
import { graphql } from 'gatsby';

class About extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <main>
          <h1>I'd love to talk! Email me at the address below</h1>{' '}
          <p>
            <a href="mailto:contact@hiteshj.com">contact@hiteshj.com</a>{' '}
          </p>
        </main>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query AboutSiteData {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default About;
