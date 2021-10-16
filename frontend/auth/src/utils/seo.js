export default function seo(data = {}) {
    data.title = data.title || 'Focus Learning App';
    data.metaDescription = data.metaDescription || 'Focus Learning App';
  
    document.title = data.title;
    document.querySelector('meta[name="description"]').setAttribute('content', data.metaDescription);
}