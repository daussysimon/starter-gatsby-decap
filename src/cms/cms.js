import CMS from "decap-cms-app";
import styles from "!css-loader!sass-loader!../../styles/admin.scss";
CMS.registerPreviewStyle(styles.toString(), { raw: true });
