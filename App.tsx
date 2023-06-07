import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import Providers from "./navigation/Index";

function App(): JSX.Element {


  const queryClient=new QueryClient();
 
  return (
    <QueryClientProvider client={queryClient}>
     <Providers/>
    </QueryClientProvider>
    
  
  );
}

export default App;