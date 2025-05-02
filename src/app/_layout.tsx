import "../../global.css"
import { Slot} from 'expo-router' 
import { ThemeProvider,DarkTheme } from '@react-navigation/native'


const myTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'white',
    card:'#101010'
}}


const RootLayout = () => {
  return (
    <ThemeProvider value={myTheme} >  
    <Slot />
    </ThemeProvider>
  )
}

export default RootLayout;