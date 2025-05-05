import "../../global.css"
import { Slot} from 'expo-router' 
import { ThemeProvider,DarkTheme } from '@react-navigation/native'
import { AuthProvider } from "@/providers/AuthProvider"


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
    <AuthProvider>
    <Slot />
    </AuthProvider>
    </ThemeProvider>
  )
}

export default RootLayout;