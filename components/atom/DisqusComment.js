import { DiscussionEmbed } from 'disqus-react';

const DisqusComment = ({ title, url, slug }) => (
  <div>
    <DiscussionEmbed
      shortname="kagepedia"
      config={{
        url: url,
        identifier: slug,
        title: title,
      }}
    />
  </div>
);

export default DisqusComment;
