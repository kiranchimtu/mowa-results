import Head from "next/head";
import Script from "next/script";
const Header = () => {
  return (
    <>
      <Head>
        <title>JNTUH B.Tech Results</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          property='og:url'
          content='https://jntuhresults.vercel.app/'
        />
        
        <meta property='og:type' content='website' />
        <meta property='og:title' content='JNTUH Results' />
        <meta name='twitter:card' content='summary' />
        <meta property="twitter:title" content="JNTUH Results" />
        <meta
          property='og:description'
          content='You can find the Results of your entire B Tech semesters here of Jawaharlal Nehru Technological University, Hyderabad (JNTUH).'
        />
        
        <meta property="twitter:description" content="JNTUH Results, JNTUH B.Tech Results, JNTUH Results Enginnering, JNTUH Engineering Results "></meta>
        <meta
          property='og:image'
          content={
            'https://raw.githubusercontent.com/ThilakReddyy/JNTUHRESULTS-WEB/main/public/FrontPage.png'
          }
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    // console.log("dark Mode");         
                }
                else
                {
                  // console.log("light mode");
                }
                addEventListener('popstate', (event) => { });
                onpopstate = (event) => {
                  console.log("pressed");
                  window.location.reload();
                 };
                  `,
          }}
        >
        </script>
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6CR1W425NE"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6CR1W425NE');
        `}
      </Script>
    </>
  )
}
export default Header;
