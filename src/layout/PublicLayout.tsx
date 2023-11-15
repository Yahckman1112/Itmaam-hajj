import React from 'react'
import TopBar from '../components/appHeader/TopBar';

export interface PublicLayout{
    header?: boolean;
    footer?: boolean;
    children?: React.ReactNode;
} 

function PublicLayout({header=true, footer=false, children}: PublicLayout) {
  return (
    <div>
        {header && < TopBar/>}
        {children}
        {footer && 'footer'}
    </div>
  )
}

export default PublicLayout