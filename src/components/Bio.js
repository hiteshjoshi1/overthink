import React from 'react';
import profilePic from '../assets/profile-pic.jpeg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`Hitesh Joshi`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 400 }}>
          Personal thoughts and musings{' '}
          <a target="_blank" href="https://www.linkedin.com/in/hiteshjoshi1/">
            Hitesh Joshi
          </a>
          . Opinions are my own.
        </p>
      </div>
    );
  }
}

export default Bio;
