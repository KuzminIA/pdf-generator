import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
  item: {
    marginTop: '20px',
    marginBottom: '8px',
    flexDirection: "row",
    gap: '8px',
    alignItems: 'center',
  },
  rect: {
    width: '32px',
    height: '32px',
    backgroundColor: 'rgba(74, 58, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  n: {
    fontWeight: 'bold',
    fontSize: '20px',
    fontFamily: 'Roboto',
    color: '#4A3AFF',
  },
  text: {
    fontWeight: 'bold',
    fontSize: '20px',
    fontFamily: 'Roboto',
  }
});
