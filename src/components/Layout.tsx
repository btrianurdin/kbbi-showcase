import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="w-full mobile:w-[400px] mx-auto h-screen flex flex-col">
      {props.children}
    </div>
  )
}