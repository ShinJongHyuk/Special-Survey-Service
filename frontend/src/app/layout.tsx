"use client";
import Navbar from "@/components/common/navbar";
import SurveyListNavbar from "@/components/common/surveyListNavbar"
import StyledComponentsRegistry from "./lib/registry";
import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import theme from "../styles/DefaultTheme";
import { usePathname } from 'next/navigation';
import SurveyDetailNavbar from "@/components/common/surveyDetailNavbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <html>
      <ThemeProvider theme={theme}>
        <body>
          <StyledComponentsRegistry>
            {(pathname === "/" || pathname === "/login" || pathname === "/signup") &&
              <Navbar />
            }
            {(pathname === '/instantWinSurveyList' || pathname === '/timeattackSurveyList') &&
              <SurveyListNavbar />
            }
            {(pathname === '/surveydetail') &&
              <SurveyDetailNavbar />
            }
            {children}
          </StyledComponentsRegistry>
        </body>
      </ThemeProvider>
    </html>
  );
}
