import menu_styles from '../styles/Menu.module.css';
import classnames from 'classnames';
import Link from 'next/link';
import wait from "waait";

// import react things
import { useState } from 'react';

// make menu object
export default function Menu() {

    let [isMobileMenuOpened, SetMobileIcon] = useState(false);

    async function MobileMenu() {
        isMobileMenuOpened = !isMobileMenuOpened;
        SetMobileIcon(isMobileMenuOpened);
    }

    return (
        <>
            <div className={menu_styles.menu}>
                <Link href="/"><div className={menu_styles.menu_title}>PLUG</div></Link>
                <div className={menu_styles.flex}>
                    <Link href="/info"><div className={menu_styles.menu_btn}>소개</div></Link>
                    <Link href="/contact"><div className={menu_styles.menu_btn}>연락</div></Link>
                </div>
            </div>
            <div style={ isMobileMenuOpened === true ? { backgroundColor: 'white' } : {}} className={menu_styles.mobile_menu}>
                <Link href="/"><div className={menu_styles.menu_title}>PLUG</div></Link>
                <div>{ isMobileMenuOpened === false ? <div onClick={() => {MobileMenu()}} className={classnames('material-icons', menu_styles.menu_icon)}>menu</div> : <div onClick={() => {MobileMenu()}} className={classnames('material-icons', menu_styles.menu_icon)}>close</div> }</div>
                { isMobileMenuOpened === false ?  
                    <div className={classnames(menu_styles.flex, menu_styles.mobile_menu_content, menu_styles.mobile_menu_closed)}>
                        <Link href="/info"><div style={{ display: 'none' }} className={menu_styles.menu_btn}>소개</div></Link>
                        <Link href="/contact"><div style={{ display: 'none' }} className={menu_styles.menu_btn}>연락</div></Link>
                    </div> :  
                    <div className={classnames(menu_styles.flex, menu_styles.mobile_menu_content)}>
                        <Link href="/info"><div style={{ display: 'block' }} className={menu_styles.menu_btn}>소개</div></Link>
                        <Link href="/contact"><div style={{ display: 'block' }} className={menu_styles.menu_btn}>연락</div></Link>
                </div> }
            </div>
        </>
    );
}