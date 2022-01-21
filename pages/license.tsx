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
                라이센스
            </h2>
            <h6 className={styles.content}>
                작성일: 2022년 01월 18일<br/>
                최근 수정일: 2022년 01월 18일<br/>
                사용한 이미지, 리소스, 호스팅 서비스 등을 밝힙니다.<br/>
                <br/>
                사용한 기술 및 언어: <br/>TypeScript, React, Html, Css<br/>
                <br/>
                웹 호스팅: <br/>https://www.netlify.com<br/>
                <br/>
                메인 페이지의 배경 그라데이션 이미지: <br/>https://products.ls.graphics/mesh-gradients<br/>
                <br/>
                연락 페이지의 배경 사무실 이미지: <br/><Link passHref href="https://pixabay.com/ko/photos/%eb%82%a8%ec%84%b1-%ec%93%b0%eb%8b%a4-%ea%b3%84%ed%9a%8d-%ec%b1%85%ec%83%81-%eb%a9%94%eb%aa%a8-593333"><span className={styles.link} title="smart key icons">사무실 이미지 - 픽사베이</span></Link><br/>
                <br/>
                404 페이지의 배경 우주 이미지: <br/><Link passHref href="https://pixabay.com/ko/illustrations/%ec%a7%80%ea%b5%ac-%ec%9a%b0%ec%a3%bc-%ed%96%87%eb%b9%9b-%ed%83%9c%ec%96%91-%ea%b4%91%ec%84%a0-1756274"><span className={styles.link} title="smart key icons">우주 이미지 - 픽사베이</span></Link><br/>
                <br/>
                아이콘(Flaticon의 저작권 귀속 정책에 따라 다음과 같이 작성함):<br/>
                <Link passHref href="https://www.flaticon.com/free-icons/c-sharp"><span className={styles.link} title="c sharp icons">C sharp icons created by Freepik - Flaticon</span></Link><br/>
                <Link passHref href="https://www.flaticon.com/free-icons/cloudflare"><span className={styles.link} title="cloudflare icons">Cloudflare icons created by Freepik - Flaticon</span></Link><br/>
                <Link passHref href="https://www.flaticon.com/free-icons/hello"><span className={styles.link} title="hello icons">Hello icons created by Freepik - Flaticon</span></Link><br/>
                <Link passHref href="https://www.flaticon.com/free-icons/js"><span className={styles.link} title="js icons">Js icons created by Freepik - Flaticon</span></Link><br/>
                <Link passHref href="https://www.flaticon.com/free-icons/mysql"><span className={styles.link} title="mysql icons">Mysql icons created by Freepik - Flaticon</span></Link><br/>
                <Link passHref href="https://www.flaticon.com/free-icons/nodejs"><span className={styles.link} title="nodejs icons">Nodejs icons created by Freepik - Flaticon</span></Link><br/>
                <Link passHref href="https://www.flaticon.com/free-icons/react"><span className={styles.link} title="react icons">React icons created by Freepik - Flaticon</span></Link><br/>
                <Link passHref href="https://www.flaticon.com/free-icons/typescript"><span className={styles.link} title="typescript icons">Typescript icons created by Freepik - Flaticon</span></Link><br/>
                <Link passHref href="https://www.flaticon.com/free-icons/settings"><span className={styles.link} title="settings icons">Settings icons created by Freepik - Flaticon</span></Link><br/>
                <Link passHref href="https://www.flaticon.com/free-icons/database"><span className={styles.link} title="database icons">Database icons created by Dreamstale - Flaticon</span></Link><br/>
                <Link passHref href="https://www.flaticon.com/free-icons/coding"><span className={styles.link} title="coding icons">Coding icons created by Kiranshastry - Flaticon</span></Link><br/>
                <Link passHref href="https://www.flaticon.com/free-icons/caps-lock"><span className={styles.link} title="caps lock icons">Caps lock icons created by Prosymbols Premium - Flaticon</span></Link><br/>
                <Link passHref href="https://www.flaticon.com/free-icons/smart-key"><span className={styles.link} title="smart key icons">Smart key icons created by Freepik - Flaticon</span></Link><br/>
            </h6>
        </>
    );
}