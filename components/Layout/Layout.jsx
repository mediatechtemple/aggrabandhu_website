// components/Layout.js

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
    <div style={{display:'flex', flexDirection:'column',minHeight: '100vh', margin: 0, padding: 0,}}>
        <Header/>
            <main style={{flex: 1}}>
                {children}
            </main>
        <Footer/>
    </div>
      
    </>
  );
}
