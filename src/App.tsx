import { useEffect } from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import MainContent from "./components/MainContent";

export default function App() {
  useEffect(() => {
    document.title = "KBBI Web - Unofficial KBBI";
  }, []); 

  return (
    <Layout>
      <Header />
      <MainContent />
    </Layout>
  )
}