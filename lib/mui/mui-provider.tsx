"use client";

import { ThemeProvider } from "@mui/material";
import theme from "./mui-theme";

export function MuiProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
