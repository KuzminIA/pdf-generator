import React from 'react';
import { View } from "@react-pdf/renderer";
import StyledText from '../StyledText/StyledText';
import { ListItemModel } from "../../../../models";
import { styles } from './List.styles';

export interface ListItemProps {
  item: ListItemModel;
}

const ListItem = (props: ListItemProps) => {
  return (
    <View style={styles.listItem}>
      <StyledText style={{ marginHorizontal: 8 }} fontStyle={props.item.fontStyle}>•</StyledText>
      <StyledText fontStyle={props.item.fontStyle}>{props.item.text}</StyledText>
    </View>
  )
}

export default ListItem;
