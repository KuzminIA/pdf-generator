import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
  list: {
    flexDirection: "column",
    gap: '8px',
    marginLeft: '6px',
  },
  listItem: {
    flexDirection: "row",
    fontSize: '20px',
    fontFamily: 'Roboto',
    marginTop: '10px',
    lineHeight: 1.4,
  }
});
