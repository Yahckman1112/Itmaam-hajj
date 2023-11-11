import React from 'react'

export interface PublicLayout{
    header?: boolean;
    footer?: boolean;
    children?: React.ReactNode;
} 

function PublicLayout({header=false, footer=false, children}: PublicLayout) {
  return (
    <div>
        {header && 'Header'}
        {children}
        {footer && 'footer'}
    </div>
  )
}

export default PublicLayout