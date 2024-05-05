import React from 'react';
import { View } from "@react-pdf/renderer";
import { ListModel } from "../../../../models";
import ListItem from './ListItem'
import { styles } from './List.styles';

export interface ListProps {
  section: ListModel;
}

const List = (props: ListProps) => {
  return (
    <View style={styles.list}>
      {
        props.section.items.map((item, i) => (<ListItem key={i} item={item} />))
      }
    </View>
  )
}

export default List;
