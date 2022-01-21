import { useEffect, useState } from 'react';
import styles from "../styles/Info.module.css";
import classnames from 'classnames';
import wait from "waait";
import Menu from '../elements/menu';
import Link from 'next/link';

export default function Info() {

    let [content1, setContent1] = useState(false);
    let [content2, setContent2] = useState(false);
    let [content3, setContent3] = useState(false);
    let [content4, setContent4] = useState(false);
    let [content5, setContent5] = useState(false);
    let [content2Text, setContent2Text] = useState('ୱେବ୍');

    useEffect(() => {
        window.scrollTo(0,0);

        let scrollLocation = document.documentElement.scrollTop;
        let contentChange1 = false, contentChange2 = false, contentChange3 = false, contentChange4 = false, contentChange5 = false;

        async function checkScroll() {
            if(window.innerHeight / scrollLocation <= 1.7 && contentChange1 === false) {
                contentChange1 = true;
                setContent1(true);
            }
            if(window.innerHeight / scrollLocation <= 0.7 && contentChange2 === false) {
                contentChange2 = true;
                setContent2(true);
    
                let webLanguage = ['ୱେବ୍', 'rede', 'вэб', 'വെബ്', 'ویب', 'Netz', 'Web', 'сеть', 'वेब', '웹'];
                await wait(200);
                for(let i = 0; i < webLanguage.length; i++) {
                    await wait(100);
                    setContent2Text(webLanguage[i]);
                }
            }
            if(window.innerHeight / scrollLocation <= 0.4 && contentChange3 === false) {
                contentChange3 = true;
                setContent3(true);
            }
            if(window.innerHeight / scrollLocation <= 0.28 && contentChange4 === false) {
                contentChange4 = true;
                setContent4(true);
            }
            if(window.innerHeight / scrollLocation <= 0.22 && contentChange5 === false) {
                contentChange5 = true;
                setContent5(true);
            }
        }
        checkScroll();

        window.addEventListener('scroll', async () => {
            scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치

            if(window.innerHeight / scrollLocation <= 1.7 && contentChange1 === false) {
                contentChange1 = true;
                setContent1(true);
            }
            if(window.innerHeight / scrollLocation <= 0.7 && contentChange2 === false) {
                contentChange2 = true;
                setContent2(true);

                let webLanguage = ['ୱେବ୍', 'rede', 'вэб', 'വെബ്', 'ویب', 'Netz', 'Web', 'сеть', 'वेब', '웹'];
                await wait(200);
                for(let i = 0; i < webLanguage.length; i++) {
                    await wait(100);
                    setContent2Text(webLanguage[i]);
                }
            }
            if(window.innerHeight / scrollLocation <= 0.4 && contentChange3 === false) {
                contentChange3 = true;
                setContent3(true);
            }
            if(window.innerHeight / scrollLocation <= 0.28 && contentChange4 === false) {
                contentChange4 = true;
                setContent4(true);
            }
            if(window.innerHeight / scrollLocation <= 0.22 && contentChange5 === false) {
                contentChange5 = true;
                setContent5(true);
            }
        });
    }, []);

    return (
        <>
            <div className={styles.info}>
                <Menu/>
                <div className={styles.main}>
                    <div className={classnames(styles.main_hello, styles.ani1)}></div>
                    <div className={classnames(styles.main_title, styles.ani2)}>반가워요!</div>
                </div>
                <div className={styles.main}>
                    { content1 === true ? <>
                        <div className={classnames(styles.main_title, styles.ani1)} style={{ margin:'0 0 30px' }}>저는 말이죠,</div>
                        <div className={classnames(styles.main_des2, styles.ani1)} style={{ animationDelay: '.9s' }}>열정적인</div>
                        <div className={classnames(styles.main_des2, styles.ani1)} style={{ animationDelay: '.8s' }}>끝없이 노력하는</div>
                        <div className={classnames(styles.main_title, styles.ani2, styles.blue)} style={{ margin:'0' }}>중학생</div>
                        <div className={classnames(styles.main_des2, styles.ani1)} style={{ animationDelay: '.7s' }}>세상을 바꾸고 싶은</div>
                        <div className={classnames(styles.main_des2, styles.ani1)} style={{ animationDelay: '.6s' }}>배우고 싶은</div>
                        <div className={classnames(styles.main_title, styles.ani3)} style={{ margin:'30px 0 0' }}>개발자에요</div></> : null
                    }
                </div>
                <div className={styles.main}>
                    { content2 === true ? <>
                        <div className={classnames(styles.main_title, styles.ani1)} style={{ margin:'0' }}>제 주 무대는</div>
                        <div className={classnames(styles.main_title, styles.ani2)} style={{ margin:'0' }}><span className={styles.blue}>{content2Text}</span>이에요.</div></> : null
                    }
                </div>
                <div className={styles.main}>
                    { content3 === true ? <>
                        <div className={classnames(styles.main_title, styles.ani1)} style={{ margin:'0' }}>주로 사용하는 언어는,</div>
                        <div className={classnames(styles.main_title, styles.ani2)} style={{ margin:'0' }}><span className={styles.yellow}>JavaScript</span>에요.</div>
                        <div className={classnames(styles.img, styles.ani3)} id={styles.js}></div></> : null
                    }
                </div>
                <div className={styles.main}>
                    { content4 === true ? <>
                        <div className={classnames(styles.main_title, styles.ani1)} style={{ margin:'0' }}>그 외에도 많은 기술들을</div>
                        <div className={classnames(styles.main_title, styles.ani2)} style={{ margin:'0' }}>배우고 있어요.</div>
                        <div className={classnames(styles.img_container, styles.ani3)}>
                        </div></> : null
                    }
                </div>
                <div className={styles.main}>
                    { content5 === true ? <>
                        <div className={classnames(styles.main_title, styles.ani1)} style={{ margin:'0' }}>제가 만든 프로젝트들을</div>
                        <div className={classnames(styles.main_title, styles.ani2)} style={{ margin:'0' }}>살펴보세요.</div>
                        <div className={classnames(styles.project, styles.ani3)}>
                            <div className={styles.project_detail}>
                                <Link passHref href="https://github.com/DEV-PLUG/Shock"><span className={styles.project_name}>Shock - 내가 골라 외우는 영단어.</span></Link>
                                <div className={styles.project_des}>node.js + javascript 영단어 외우기 웹앱.</div>
                            </div>
                        </div></> : null
                    }
                </div>
            </div>
        </>
    );
}