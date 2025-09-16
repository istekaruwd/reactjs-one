import { Helmet } from '@dr.pogodin/react-helmet';

export default function PageMeta({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
}
