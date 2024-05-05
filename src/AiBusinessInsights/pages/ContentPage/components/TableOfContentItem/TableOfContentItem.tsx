import React from 'react';
import { TableOfContentModel } from '../../../../models';
import { View, Text } from '@react-pdf/renderer';
import { styles } from './TableOfContentItem.styles';

export interface TableOfContentItemProps {
  section: TableOfContentModel;
}

const TableOfContnet = (props: TableOfContentItemProps) => {
  return (
    <View style={styles.item}>
      <View style={styles.rect}>
        <Text style={styles.n}>{props.section.n}</Text>
      </View>
      <Text style={styles.text}>{props.section.text}</Text>
    </View>
  )
}

export default TableOfContnet;
