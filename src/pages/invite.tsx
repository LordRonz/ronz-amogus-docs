import Layout from '@theme/Layout';
import React from 'react';

import Seo from '../components/Seo';

const InviteLink = (): JSX.Element => {
  React.useEffect(() => {
    const script = document.createElement('script');
    const InviteLink =
      'https://discord.com/api/oauth2/authorize?client_id=820161165480820746&permissions=3862297920&scope=bot';
    script.async = true;
    script.innerHTML = `window.location = "${InviteLink}";`;
    document.body.appendChild(script);
  }, []);

  return (
    <Layout title='Invite'>
      <Seo templateTitle='Invite' path='/invite/' description='Invite ronz-AMOGUS bot !' />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}
      >
        <p>Redirecting...</p>
      </div>
    </Layout>
  );
};

export default InviteLink;
