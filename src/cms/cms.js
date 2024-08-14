import React, { useEffect } from "react";
import CMS from "decap-cms-app";
import styles from "!css-loader!sass-loader!../styles/admin.scss";
import { Map } from "immutable";

CMS.registerPreviewStyle(styles.toString(), { raw: true });

const ArticlePreview = () => (
  <article>
    <h1>Custom article preview</h1>
    <p>This is my new article.</p>
  </article>
);

const StarterControl = (props) => {
  useEffect(() => {
    console.log(props);

    console.log();

    const { mediaPaths, value, onRemoveInsertedMedia, onChange } = props;
    const mediaPath = mediaPaths.get("test");
    if (mediaPath && mediaPath !== value) {
      onChange(mediaPath);
    } else if (mediaPath && mediaPath === value) {
      onRemoveInsertedMedia("test");
    }
  }, [props]);

  const handleChange = (e) => {
    const { field, onOpenMediaLibrary, value } = props;
    e.preventDefault();
    let mediaLibraryFieldOptions;

    console.log(props.getAsset);
    console.log(props.getAsset());
    console.log(props.mediaPaths.get());

    /**
     * `options` hash as a general field property is deprecated, only used
     * when external media libraries were first introduced. Not to be
     * confused with `options` for the select widget, which serves a different
     * purpose.
     */
    if (field.hasIn(["options", "media_library"])) {
      mediaLibraryFieldOptions = field.getIn(
        ["options", "media_library"],
        Map()
      );
    } else {
      mediaLibraryFieldOptions = field.get("media_library", Map());
    }
    const forImage = true;

    return onOpenMediaLibrary({
      controlID: "test",
      forImage,
      privateUpload: field.get("private"),
      value,
      allowMultiple: true,
      config: mediaLibraryFieldOptions.get("config"),
      field,
    });
  };

  return <button onClick={handleChange}>test</button>;
};

const CategoriesPreview = ({ value }) => {
  return <p>test</p>;
};

CMS.registerWidget("categories", StarterControl, CategoriesPreview);

CMS.registerPreviewTemplate("home", ArticlePreview);
