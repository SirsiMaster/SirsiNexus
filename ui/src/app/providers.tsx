import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';
import { store } from '@/store';

export function Providers({ children }: PropsWithChildren) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </Provider>
  );
}
