import CMS from "decap-cms-app";
import styles from "!css-loader!sass-loader!../styles/admin.scss";

CMS.registerPreviewStyle(styles.toString(), { raw: true });

const ArticlePreview = () => (
  <article>
    <h1>Custom article preview</h1>
    <p>This is my new article.</p>
  </article>
);

CMS.registerPreviewTemplate("home", ArticlePreview);
