---
title: Dark Mode
nav_order: 5
---

# Dark Mode

While Whirlwind doesn't have a built-in dark mode, it's still easy to make your app aware of your user's preferred color scheme (light or dark). Use a library such as [react-native-appearance](https://www.npmjs.com/package/react-native-appearance) to make your app aware of the user's chosen appearance. In the following example, we make use of the `useColorScheme` hook provided by `react-native-appearance`. It will automatically refresh our layout when the user preferences change without having to restart the app:

```jsx
// App.jsx
import { View, Text } from 'react-native'
import { useColorScheme } from 'react-native-appearance'
import t from './theme'

/**
 * Color scheme aware component
 */
function MyComponent() {
  // Subscribe to color scheme changes with a hook
  const colorScheme = useColorScheme()
  return (
    <View style={[colorScheme === 'dark' ? t.bgBlack : t.bgWhite]}>
      <Text style={[t.textPrimary]}>Hello World!</Text>
    </View>
  )
}

export default function App() {
  return (
    <AppearanceProvider>
      <MyComponent />
    </AppearanceProvider>
  )
}
```

## Multiple Themes

For more customization, Whirlwind allows you to define multiple themes in your `theme.js`:

```jsx
// theme.jsx
import { Appearance } from 'react-native'
import { createTheme } from 'react-native-whirlwind'

export const light = createTheme({
  colors: {
    // Define your theme colors for light mode
    primary: 'darkred'
  }
})

export const dark = createTheme({
  colors: {
    // Define your theme colors for dark mode
    primary: 'lightred'
  }
})
```

We can then create a custom hook that returns the proper theme based on an external criteria, such as the desired appearance:

```jsx
// useTheme.jsx
import { View, Text } from 'react-native'
import { useColorScheme } from 'react-native-appearance'
import { dark, light } from './theme'

/**
 * Chooses light or dark theme depending on the user's color scheme
 */
export default function useTheme() {
  const colorScheme = useColorScheme()
  return colorScheme === 'dark' ? dark : light
}
```

And use it in our app like this:

```jsx
// App.jsx
import { View, Text } from 'react-native'
import useTheme from './useTheme'

/**
 * Color scheme aware component
 */
function MyComponent() {
  // Now use our custom hook to get the theme
  const t = useTheme()
  return (
    <View style={[t.bgPaper]}>
      <Text style={[t.textPrimary]}>Hello World!</Text>
    </View>
  )
}

export default function App() {
  return (
    <AppearanceProvider>
      <MyComponent />
    </AppearanceProvider>
  )
}
```
