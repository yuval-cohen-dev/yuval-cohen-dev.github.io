"use client"
import Script from 'next/script';

const GoogleAnalytics = ({id}: {id:string | null| undefined}) => {
  if (!id){
    return null;
  }
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      ></Script>
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${id}');
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
