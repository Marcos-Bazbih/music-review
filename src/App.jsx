import AppRouter from "./App-Router";
import MusicContextProvider from "./contexts/MusicContext";
import ThemeContextProvider from "./contexts/ThemeContext";

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <MusicContextProvider>
          <AppRouter />
        </MusicContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;