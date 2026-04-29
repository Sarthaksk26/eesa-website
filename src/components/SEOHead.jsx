import { useEffect } from 'react';

const SEOHead = ({ title, description }) => {
  useEffect(() => {
    document.title = title ? `${title} | EESA GCEK` : 'EESA — Electrical Engineering Students Association | GCEK';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
};

export default SEOHead;
