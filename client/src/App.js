
import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {

  const clientId = '620938546900-0r234e3fevkhlrvn3dgnf6117arhm2e5.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger/>
    </GoogleOAuthProvider>
  );
}

export default App;
