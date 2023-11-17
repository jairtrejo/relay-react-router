import { ReactNode } from "react";

type AppChromeProps = {
  children: ReactNode;
};

export default function AppChrome({ children }: AppChromeProps) {
  return (
    <div>
      <h1>MyApp</h1>
      {children}
    </div>
  );
}

