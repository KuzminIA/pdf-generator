import React from 'react';
import { Text } from "@react-pdf/renderer";
import { HeaderModel } from "../../../../models";
import { styles } from './Header.styles';

export interface HeaderProps {
  section: HeaderModel;
}

const Header = (props: HeaderProps) => {
  const style = styles[props.section.size];
  return <Text style={style}>{props.section.title}</Text>
}

export default Header;
