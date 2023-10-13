import React, {useContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { AuthContext, AuthProvider } from './context/AuthContext.tsx';
import { ClerkProvider } from "@clerk/clerk-react";

const client = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_API_URL,
    headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
    }
  }),
  cache: new InMemoryCache(),
});

if (!import.meta.env.VITE_PUBLIC_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = import.meta.env.VITE_PUBLIC_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ClerkProvider publishableKey={clerkPubKey}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ClerkProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
