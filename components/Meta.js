export default ({
  name = 'Tempus 🕒',
  title = 'Tempus 🕒',
  description = 'Quickly & easily convert between multiple timezones.',
  image = 'https://tempus.im/card.png',
  url = 'https://tempus.im',
}) => (
  <>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={name} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:image:width" content="2048" />
    <meta property="og:image:height" content="1152" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <meta name="msapplication-TileColor" content="#242424" />
    <meta name="theme-color" content="#242424" />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#242424" />
    <meta name="msapplication-TileColor" content="#242424" />
    <meta name="theme-color" content="#242424" />
  </>
)
