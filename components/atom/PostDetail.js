import markdownItAnchor from 'markdown-it-anchor';
import markdownItTableOfContents from 'markdown-it-table-of-contents';
import Head from '../../components/head';
import ShareBotton from '../atom/ShareBotton';
import DisqusComment from '../atom/DisqusComment';

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
  .use(require('markdown-it-katex'))
  .use(markdownItAnchor)
  .use(markdownItTableOfContents);
// markdown-it-plugin

const PostDetail = ({ img_url, img_alt, title, publishDate, discription, body, slug }) => (
  <div>
    <div>
      <Head title={title} url={'https://kagepedia.com/posts/' + slug} ogImage={img_url} />
    </div>
    <div className="bg-white rounded-b p-4 flex flex-col justify-between leading-normal">
      <h2 className="text-center">{title}</h2>
      <p className="text-center">投稿日時：{publishDate}</p>
      <img className="md:mx-auto my-4" src={img_url} alt={img_alt}></img>
      <div className="mx-auto my-10">
        <ShareBotton title={title} slug={slug} />
      </div>
      <p className="whitespace-pre-line text-center">{discription}</p>
      <div className="markdown mt-5" dangerouslySetInnerHTML={{ __html: md.render(body) }}></div>
      <div className="mx-auto my-10">
        <ShareBotton title={title} slug={slug} />
      </div>
    </div>
    <div>
      <DisqusComment title={title} url={'https://kagepedia.com/posts/' + slug} slug={slug} />
    </div>
  </div>
);

export default PostDetail;
