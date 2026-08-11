
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  const faviconUrl = new URL("../assets/icon.ico", import.meta.url).href;

  const faviconLink = document.querySelector<HTMLLinkElement>('link[rel="icon"]');

  if (faviconLink) {
    faviconLink.href = faviconUrl;
  } else {
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/x-icon";
    link.href = faviconUrl;
    document.head.appendChild(link);
  }

  createRoot(document.getElementById("root")!).render(<App />);
  