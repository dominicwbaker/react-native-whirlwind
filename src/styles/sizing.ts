import { createStyles } from '../theme'

export default createStyles(theme => ({
  // Width
  wAuto: { width: 'auto' },
  wPx: { width: 1 },
  wFull: { width: '100%' },
  w0: { width: 0 },
  w1: { width: theme.spacing.xs2 },
  w2: { width: theme.spacing.xs },
  w3: { width: theme.spacing.sm },
  w4: { width: theme.spacing.md },
  w5: { width: theme.spacing.lg },
  w6: { width: theme.spacing.xl },
  w8: { width: theme.spacing.xl2 },
  w10: { width: theme.spacing.xl3 },
  w12: { width: theme.spacing.xl4 },
  w16: { width: theme.spacing.xl5 },
  w1_2: { width: '50%' },
  w1_3: { width: '33.333333%' },
  w2_3: { width: '66.666667%' },
  w1_4: { width: '25%' },
  w2_4: { width: '50%' },
  w3_4: { width: '75%' },
  w1_5: { width: '20%' },
  w2_5: { width: '40%' },
  w3_5: { width: '60%' },
  w4_5: { width: '80%' },
  // Min Width
  minW0: { minWidth: 0 },
  minWFull: { minWidth: '100%' },
  // Max Width
  maxWXs: { maxWidth: 320 },
  maxWSm: { maxWidth: 384 },
  maxWMd: { maxWidth: 448 },
  maxWLg: { maxWidth: 512 },
  maxWXl: { maxWidth: 576 },
  maxW2xl: { maxWidth: 672 },
  maxW3xl: { maxWidth: 768 },
  maxW4xl: { maxWidth: 896 },
  maxW5xl: { maxWidth: 1024 },
  maxW6xl: { maxWidth: 1152 },
  maxWFull: { maxWidth: '100%' },
  // Height
  hAuto: { height: 'auto' },
  hPx: { height: 1 },
  h1: { height: theme.spacing.xs2 },
  h2: { height: theme.spacing.xs },
  h3: { height: theme.spacing.sm },
  h4: { height: theme.spacing.md },
  h5: { height: theme.spacing.lg },
  h6: { height: theme.spacing.xl },
  h8: { height: theme.spacing.xl2 },
  h10: { height: theme.spacing.xl3 },
  h12: { height: theme.spacing.xl4 },
  h16: { height: theme.spacing.xl5 },
  hFull: { height: '100%' },
  hScreen: { height: '100vh' },
  // Min Height
  minH0: { minHeight: 0 },
  minHFull: { minHeight: '100%' },
  minHScreen: { minHeight: '100vh' },
  minH1: { minHeight: theme.spacing.xs2 },
  minH2: { minHeight: theme.spacing.xs },
  minH3: { minHeight: theme.spacing.sm },
  minH4: { minHeight: theme.spacing.md },
  minH5: { minHeight: theme.spacing.lg },
  minH6: { minHeight: theme.spacing.xl },
  minH8: { minHeight: theme.spacing.xl2 },
  minH10: { minHeight: theme.spacing.xl3 },
  minH12: { minHeight: theme.spacing.xl4 },
  minH16: { minHeight: theme.spacing.xl5 },
  // Max Height
  maxHFull: { maxHeight: '100%' },
  maxHScreen: { maxHeight: '100vh' },
  maxH1: { maxHeight: theme.spacing.xs2 },
  maxH2: { maxHeight: theme.spacing.xs },
  maxH3: { maxHeight: theme.spacing.sm },
  maxH4: { maxHeight: theme.spacing.md },
  maxH5: { maxHeight: theme.spacing.lg },
  maxH6: { maxHeight: theme.spacing.xl },
  maxH8: { maxHeight: theme.spacing.xl2 },
  maxH10: { maxHeight: theme.spacing.xl3 },
  maxH12: { maxHeight: theme.spacing.xl4 },
  maxH16: { maxHeight: theme.spacing.xl5 }
}))
