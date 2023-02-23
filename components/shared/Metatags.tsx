import Head from 'next/head';

interface Props {
  title: string;
  description?: string;
  image?: string;
}

const Metatags = ({ title, description, image = '' }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@tanda' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />

      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
    </Head>
  );
};

export default Metatags;
