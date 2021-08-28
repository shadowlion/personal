import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import BaseNavigation from "../components/BaseNavigation";
import BaseFooter from "../components/BaseFooter";

const _App = ({ Component, pageProps }) => {
  return (
    <div className="dark:bg-black">
      <ThemeProvider attribute="class" enableSystem={false}>
        <BaseNavigation />
        <Component {...pageProps} />
        <BaseFooter />
      </ThemeProvider>
    </div>
  );
};

export default _App;
