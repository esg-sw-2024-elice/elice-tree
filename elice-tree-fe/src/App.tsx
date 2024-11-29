import { HelmetProvider } from './providers/helmet-provider';
import { GlobalStyleProvider } from './providers/global-style-provider';
import AuthProvider from './providers/auth-provider';
import { RouterProvider } from './providers/router-provider';
import TodoProvider from './providers/todo-provider';

function App() {
  return (
    <HelmetProvider>
      <GlobalStyleProvider>
        <AuthProvider>
          <TodoProvider>
            <RouterProvider />
          </TodoProvider>
        </AuthProvider>
      </GlobalStyleProvider>
    </HelmetProvider>
  );
}

export default App;
