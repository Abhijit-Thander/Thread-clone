import "../../global.css"
import { Slot } from 'expo-router'
import { ThemeProvider, DarkTheme } from '@react-navigation/native'
import { AuthProvider } from "@/providers/AuthProvider"
import { StatusBar } from 'expo-status-bar'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient();

const myTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'white',
    card: '#101010'
  }
}

const RootLayout = () => {
  return (
    <ThemeProvider value={myTheme} >
      <QueryClientProvider client={queryClient}>
        <StatusBar style="light" />
        <AuthProvider>
          <Slot />
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default RootLayout;