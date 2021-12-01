import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { useSelector } from "react-redux";
import { selectDirectorySection } from '../../redux/directory/directory.selector'
import { DirectoryMenuContainer } from "./directory.styles";

function Directory() {
  const sections = useSelector(selectDirectorySection);

  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...sectionProps }) => {
        return <MenuItem key={id} {...sectionProps} />;
      })}
    </DirectoryMenuContainer>
  );
}

export default Directory;
