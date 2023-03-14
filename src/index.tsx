import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./providers/userContext";
import { PostsProvider } from "./providers/postsContext";
import { GlobalStyle } from "./Styles/global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle></GlobalStyle>
    <BrowserRouter>
      <UserProvider>
        <PostsProvider>
          <App />
        </PostsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
