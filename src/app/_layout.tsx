import "../../global.css"
import { Slot} from 'expo-router' 
import { ThemeProvider,DarkTheme } from '@react-navigation/native'
import { AuthProvider } from "@/providers/AuthProvider"
import { StatusBar } from 'expo-status-bar'

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
    <StatusBar style="light" />
    <AuthProvider>
    <Slot />
    </AuthProvider>
    </ThemeProvider>
  )
}

export default RootLayout;