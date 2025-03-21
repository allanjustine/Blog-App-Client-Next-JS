import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Blogs",
    template: "Blog App | Blog %s",
  },
  description:
    "Welcome to blog app there is many categories to pick what blogs you want page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
