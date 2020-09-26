import Head from '../../components/head';

// markdown-it-plugin
const md = require('markdown-it')({
  // breaks: true,
  html: true,
  linkify: true,
  typography: true,
})
  .use(require('markdown-it-emoji'))
  .use(require('markdown-it-sup'))
  .use(require('markdown-it-sub'))
  .use(require('markdown-it-ins'))
  .use(require('markdown-it-mark'))
  .use(require('markdown-it-footnote'))
  .use(require('markdown-it-deflist'))
  .use(require('markdown-it-abbr'))
  .use(require('markdown-it-container'), 'info')
  .use(require('markdown-it-container'), 'success')
  .use(require('markdown-it-container'), 'warning')
  .use(require('markdown-it-container'), 'danger')
  .use(require('markdown-it-highlightjs'))
  .use(require('markdown-it-katex'));
// markdown-it-plugin

const PostDetail = ({ img_url, img_alt, title, publishDate, discription, body, slug }) => (
  <div>
    <div>
      <Head title={title} url={'https://kagepedia.com/posts/' + slug} />
    </div>
    <div className="bg-white rounded-b p-4 flex flex-col justify-between leading-normal">
      <h2 className="text-center">{title}</h2>
      <p className="text-center">投稿日時：{publishDate}</p>
      <img className="md:mx-auto my-4" src={img_url} alt={img_alt}></img>
      <p className="whitespace-pre-line text-center">{discription}</p>
      <div className="markdown mt-5 md:mx-6 lg:mx-48" dangerouslySetInnerHTML={{ __html: md.render(body) }}></div>
    </div>
  </div>
);

export default PostDetail;
