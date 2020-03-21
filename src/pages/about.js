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
                <h1>Hitesh Joshi</h1>
                <h2>Developer - Seller - Failed philosopher - Human </h2>

                <hr />
              </div>
              <div className={styles.aboutMe}>
                <p>
                  I am passionate about coding and public speaking. I like to
                  read but evidently I dont read enough. I like to write and
                  have made sporadic forays over the years. I hope to be
                  consistent this time around. I enjoy running, swimming and not
                  averse to a fair bit of travel. I am learning to sell and
                  enjoying it. I am from a small town in Uttarakhand, India. I
                  live in Singapore.
                </p>
                <p>
                  You may want to check out my{' '}
                  <a target="_blank" href={resume}>
                    Resume{' '}
                  </a>{' '}
                  or
                  <a
                    target="_blank"
                    href="https://github.com/hiteshjoshi1?tab=repositories"
                  >
                    {' '}
                    code{' '}
                  </a>{' '}
                  or my{' '}
                  <a
                    href="https://www.linkedin.com/in/hiteshjoshi1/"
                    target="_blank"
                  >
                    {' '}
                    LinkedIn
                  </a>{' '}
                  or hobnob with me on{' '}
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
