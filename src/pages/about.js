import React from 'react';
import Layout from '../components/Layout';
import get from 'lodash/get';
import { graphql, Link } from 'gatsby';

import profilePic from '../assets/profile-pic.jpeg';
import resume from '../assets/resume.pdf';
import styles from './about.module.css';
// import '../utils/font-awesome.min.css';

class About extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    return (
      <Layout location={this.props.location} title={siteTitle}>
        {/* <main>
          <h1>I'd love to talk! Email me at the address below</h1>{' '}
          <p>
            <a href="mailto:contact@hiteshj.com">contact@hiteshj.com</a>{' '}
          </p>
        </main> */}
        <div className={styles.flexbox}>
          <div className={styles.flexContainer}>
            <div>
              <div className={styles.textCenter}>
                <img
                  src={profilePic}
                  width="200"
                  height="200"
                  alt="Hitesh Joshi"
                />
              </div>
              <div className={styles.textCenter}>
                <h2>Hitesh Joshi</h2>
                <hr />
              </div>
              <div className={styles.aboutMe}>
                <p>
                  I want to write about technology, investing, creating wealth,
                  living a fullfilling life and parenting. I will document the
                  ideas that I am having, things that I have read and liked,
                  future predictions and crazy ideas.
                  <br />
                  This site as a medium of self expression and very much a WIP,
                  a diary for my future self and a way to communicate to
                  posterity. I am sure I will derieve some value from writing my
                  thoughts here and I can only hope that a reader will derieve
                  some value from reading it.
                </p>
                <p>
                  Hobnob with me on{' '}
                  <a target="_blank" href="https://twitter.com/joshi_ji">
                    Twitter
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
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
