import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  content: {
    padding: 20,
    display: 'flex',
    flex: 1,
  },
  preTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '16px',
  },
  preTitleLogo: {
    width: '30px',
    height: '30px',
  },
  preTitleText: {
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: '40px',
    textTransform: 'uppercase',
  },
  titleWrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '96px',
    textTransform: 'uppercase',
    borderLeft: '20px solid #fff',
    margin: 0,
    padding: '0 0 0 10px',
  }
});