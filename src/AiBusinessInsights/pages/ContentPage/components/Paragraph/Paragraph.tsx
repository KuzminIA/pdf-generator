import React from 'react';
import { TextModel } from "../../../../models";
import { styles } from './Paragraph.styles';
import StyledText from '../StyledText/StyledText';

export interface ParagraphProps {
  section: TextModel;
}

const Paragraph = (props: ParagraphProps) => {
  return (
    <StyledText style={styles.paragraph} fontStyle={props.section.fontStyle}>
      {props.section.text}
    </StyledText>
  );
}

export default Paragraph;
