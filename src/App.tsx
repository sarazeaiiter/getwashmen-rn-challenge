import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {TTheme} from './types';
import {Main} from './Pages/Main';
import {PagesWrapper} from './shared-components/PagesWrapper';

function App() {
  const [theme, setTheme] = React.useState<TTheme>('dark');
  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <PagesWrapper theme={theme} setTheme={setTheme}>
        <Main />
      </PagesWrapper>
    </NavigationContainer>
  );
}

export default App;
