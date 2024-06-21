"use client"
import styles from './menuLink.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { act } from 'react';

// a component to show sidebar menu links
const menuLink = ({item}) => {

    // this returns the current path of the page to be used to compare with the path of the link
    const pathname = usePathname()

    return ( 
        // used to activate the link when the path matches the current path with the help of pathname hook to change the style of the link
        // when the link is active the style is applied to the link which add a background color to the link
        <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
        {item.icon}
        {item.title}
    </Link> 
    );
}
 
export default menuLink;