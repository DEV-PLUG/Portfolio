import { useEffect } from 'react';
import styles from "../styles/Home.module.css";
import Link from 'next/link';
import Menu from '../elements/menu';

export default function Home() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <>
            <div className={styles.home}>
                <Menu/>
                <div className={styles.main}>
                    <div className={styles.main_content}>
                        <div className={styles.title}>DEVELOPER<br/>PLUG</div>
                        <div className={styles.des}>웹 개발을 사랑하는,<br/>학생 개발자 PLUG에요!</div>
                        <Link passHref href="/info"><div className={styles.home_btn}>자세히 알아보기</div></Link>
                    </div>
                    <div className={styles.main_content}>
                        <div className={styles.img}></div>
                    </div>
                </div>
            </div>
        </>
    );
}