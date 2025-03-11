// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
  Container,
  NativeSelect,
} from "@mantine/core";

export const metadata = {
  title: "Meta Questionaire",
  description: "I have followed setup instructions carefully",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Container size={1512} h={982}>
            {children}
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}
