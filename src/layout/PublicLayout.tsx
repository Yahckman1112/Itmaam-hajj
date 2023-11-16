import React from 'react'
import TopBar from '../components/appHeader/TopBar';
import Footer from '../components/footer/Footer';

export interface PublicLayout{
    header?: boolean;
    footer?: boolean;
    children?: React.ReactNode;
} 

function PublicLayout({header=false, footer=true, children}: PublicLayout) {
  return (
    <div>
        {header && < TopBar/>}
        {children}
        {footer && <Footer/>}
    </div>
  )
}

export default PublicLayout