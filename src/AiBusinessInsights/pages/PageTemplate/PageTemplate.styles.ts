import { StyleSheet } from '@react-pdf/renderer';

export const logoFill = {
  front: '#fff',
  content: '#464343'
};

export const styles = StyleSheet.create({
  page: {
    paddingBottom: '65px',
  },
  backgroundWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  backgroundLayer1: {
    width: 1736,
    height: 1736,
    top: '1050px',
    left: 0,
    transform: 'rotate(55deg)',
    position: 'absolute',
    opacity: 0.1,
    backgroundColor: '#000',
  },
  backgroundLayer2: {
    width: 1736,
    height: 1736,
    top: '1240px',
    left: 0,
    transform: 'rotate(60deg)',
    position: 'absolute',
    opacity: 0.1,
    backgroundColor: '#000',
  },
  header: {
    textTransform: 'uppercase',
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: '14px',
    height: 64,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerDocumentNameAndLogo: {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
  },
  headerLogo: {
    top: '3px',
    width: '10px',
    height: '10px',
  },
  footer: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    padding: 20,
    position: "absolute",
    width: "100%",
    bottom: 0,
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }
});

export const frontPageStyles = StyleSheet.create({
  page: {
    backgroundColor: "#2E2C9A",
    color: '#fff'
  },
  header: {
    borderBottom: '1px solid #fff',
  },
  footer: {
    borderTop: '1px solid #fff',
  },
  backgroundLayer1: {
    opacity: 0.1,
  },
  backgroundLayer2: {
    opacity: 0.1,
  }
});

export const contentPageStyles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    color: '#464343'
  },
  header: {
    borderBottom: '1px solid #464343',
  },
  footer: {
    borderTop: '1px solid #464343',
  },
  backgroundLayer1: {
    opacity: 0.05,
  },
  backgroundLayer2: {
    opacity: 0.05,
  }
});