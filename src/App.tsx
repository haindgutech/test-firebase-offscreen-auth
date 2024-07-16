import "./App.css";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./common/firebase/firebaseConfig";

function App() {
  // This code runs inside of an iframe in the extension's offscreen document.
  // This gives you a reference to the parent frame, i.e. the offscreen document.
  // You will need this to assign the targetOrigin for postMessage.
  const PARENT_FRAME: string = document.location.ancestorOrigins[0];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function sendResponse(result: any): void {
    globalThis.parent.self.postMessage(JSON.stringify(result), PARENT_FRAME);
  }

  globalThis.addEventListener("message", function ({ data }) {
    if (data.initAuth) {
      // Opens the Google sign-in page in a popup, inside of an iframe in the
      // extension's offscreen document.
      // To centralize logic, all responses are forwarded to the parent frame,
      // which goes on to forward them to the extension's service worker.
      signInWithPopup(auth, googleProvider)
        .then(sendResponse)
        .catch(sendResponse);
    }
  });
  return (
    <div>
      <h1>signInWithPopup</h1>
    </div>
  );
}

export default App;
