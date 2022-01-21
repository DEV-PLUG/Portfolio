import { useEffect } from 'react';
import styles from "../styles/Notfound.module.css";
import Menu from '../elements/menu';
import Link from 'next/link';

export default function Notfound() {

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <>
            <Menu/>
            <div className={styles.home}>
                <div className={styles.main}>
                    <div className={styles.main_content}>
                        <div className={styles.title}>404 Not Found</div>
                        <div className={styles.des}>저런.. 올바르지 않은 경로에요.</div>
                        <div className={styles.flex}>
                            <Link passHref href="/"><span className={styles.btn}>홈으로 가기</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}