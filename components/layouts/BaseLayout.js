import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = (props) => {
  const { className, children, isAuthenticated, user, isSiteOwner, canonical } = props;
  const headerType = props.headerType || 'default';
  const title = props.title || 'Pocholo Tan Portfolio';
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content="My name is Pocholo Tan and I am an experienced software engineer and freelance developer."/>
        <meta name="keywords" content="poch portfolio, poch developer, poch freelancing, poch programming"/>
        <meta property="og:title" content="Pocholo Tan - programmer, developer" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={`${process.env.BASE_URL}`}/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="My name is Pocholo Tan and I am an experienced software engineer and freelance developer."/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"/>
        {canonical && <link rel="canonical" href={`${process.env.BASE_URL}${canonical}`}/>}
        <link rel="icon" type="image/ico" href="/static/favicon.ico"/>
      </Head>
      <div className="layout-container" >
        <Header className={`port-nav-${headerType}`}
                isAuthenticated={isAuthenticated}
                user={user}
                isSiteOwner={isSiteOwner}/>
        <main className={`cover ${className}`}>
          <div className="wrapper">
            {children}
          </div>
        </main>
      </div>
    </React.Fragment>
  )
}

export default BaseLayout;