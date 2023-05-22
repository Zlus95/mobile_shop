import Navigation from "./screens/Navigation/Navigation";
import { ContextProvider } from "./Context/ContextProvider";

export default function App() {
  return (
    <ContextProvider>
      <Navigation />
    </ContextProvider>
  );
}
