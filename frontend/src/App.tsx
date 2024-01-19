import {
  AppRoot,
  SplitLayout,
  SplitCol,
  // View,
  PanelHeader,
  usePlatform,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import LoginPage from "./pages/LoginPage/LoginPage.tsx";

export default function App() {
  const platform = usePlatform();

  return (
      <AppRoot>
        <SplitLayout header={platform !== 'vkcom' && <PanelHeader delimiter="none"/>}>
          <SplitCol autoSpaced maxWidth={'24rem'} style={{margin: '0 auto'}}>
            {/*<View activePanel="main">*/}
            <LoginPage />
            {/*</View>*/}
          </SplitCol>
        </SplitLayout>
      </AppRoot>
  );
};

