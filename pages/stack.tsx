import { useEffect } from 'react';
import styles from "../styles/License.module.css";
import Menu from '../elements/menu';
import Link from 'next/link';

export default function License() {

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <>
            <Menu/>
            <h2 className={styles.title}>
                기술 스텍
            </h2>
            <h6 className={styles.content}>
                - Typescript / Javascript<br/>
                - React(Next.js)<br/>
                - Node.js<br/>
                - VanillaJs<br/>
                - Jquery<br/>
                - Css/Html<br/>
                - Chart.js<br/>
                - Mysql<br/>
                - C<br/>
                <Link passHref href="/contact"><span className={styles.link}>연락하기</span></Link><br/>
                <br/>
            </h6>
        </>
    );
}
