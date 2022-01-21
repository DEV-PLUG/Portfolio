import { useEffect } from 'react';
import styles from "../styles/License.module.css";
import Menu from '../elements/menu';
import Link from 'next/link';

export default function Career() {

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <>
            <Menu/>
            <h2 className={styles.title}>
                수상 및 근무 경력
            </h2>
            <h6 className={styles.content}>
                텅.. 텅.. 비엇네요..<br/>
                이 페이지를 채워줄 직장을 찾고 있어요!<br/>
                <Link passHref href="/contact"><span className={styles.link}>연락하기</span></Link><br/>
                <br/>
            </h6>
        </>
    );
}