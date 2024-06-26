import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './app/styles/index.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter} from "react-router-dom";
import {ErrorBoundary} from "./app/providers/ErrorBoundary";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 3
        },
    },
})
ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <ErrorBoundary>
                <App/>
            </ErrorBoundary>
        </QueryClientProvider>
    </BrowserRouter>
)
