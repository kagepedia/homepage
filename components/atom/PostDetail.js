// markdown-it-plugin
const md = require("markdown-it")({
  // breaks: true,
  html: true,
  linkify: true,
  typography: true,
})
  .use(require("markdown-it-emoji"))
  .use(require("markdown-it-sup"))
  .use(require("markdown-it-sub"))
  .use(require("markdown-it-ins"))
  .use(require("markdown-it-mark"))
  .use(require("markdown-it-footnote"))
  .use(require("markdown-it-deflist"))
  .use(require("markdown-it-abbr"))
  .use(require("markdown-it-container"), "info")
  .use(require("markdown-it-container"), "success")
  .use(require("markdown-it-container"), "warning")
  .use(require("markdown-it-container"), "danger")
  .use(require("markdown-it-highlightjs"))
  .use(require("markdown-it-katex"));
// markdown-it-plugin

const PostDetail = ({ title, publishDate, discription, body }) => (
  <div className="bg-white rounded-b p-4 flex flex-col justify-between leading-normal">
    <h2 className="ttl">{title}</h2>
    <p className="postdate">投稿日時：{publishDate}</p>
    <p className="descript">{discription}</p>
    <div
      className="markdown mt-5 md:mx-6 lg:mx-48"
      dangerouslySetInnerHTML={{ __html: md.render(body) }}
    ></div>
  </div>
);

export default PostDetail;
