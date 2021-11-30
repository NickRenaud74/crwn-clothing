import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import { useSelector } from "react-redux";
import { selectDirectorySection } from '../../redux/directory/directory.selector'

function Directory() {
  const sections = useSelector(selectDirectorySection);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...sectionProps }) => {
        return <MenuItem key={id} {...sectionProps} />;
      })}
    </div>
  );
}

export default Directory;
