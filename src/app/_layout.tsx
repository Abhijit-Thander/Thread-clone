
import { Slot} from 'expo-router' 
import { ThemeProvider,DarkTheme } from '@react-navigation/native'


const myTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'white'
}}


const RootLayout = () => {
  return (
    <ThemeProvider value={myTheme} >  
    <Slot />
    </ThemeProvider>
  )
}

export default RootLayout;