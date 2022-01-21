import footer_styles from '../styles/Footer.module.css';
import classnames from 'classnames';
import Link from 'next/link';

interface Props {
    image: String;
}

// make footer object
export default function Footer ({ image }: Props) {

    let footer_img, footer_content;

    footer_content = footer_styles.footer_content_contact;
    if(image && image === 'main') {
        footer_img = footer_styles.footer_main;
        footer_content = footer_styles.footer_content_main;
    }
    if(image && image === 'contact') {
        footer_img = footer_styles.footer_contact;
    }
    if(image && image === '404') {
        footer_img = footer_styles.footer_404;
    }
    if(image && image === 'info') {
        footer_img = footer_styles.footer_info;
    }

    return (
        <>
            <div className={classnames(footer_styles.footer, footer_img)}>
                <div className={classnames(footer_styles.footer_content, footer_content)}>
                    <div className={footer_styles.footer_title}>PLUG</div>
                    <div className={footer_styles.footer_des}>
                        <Link href={"/info"}><span className={footer_styles.link}>소개</span></Link>
                        <Link href={"/contact"}><span className={footer_styles.link}>연락</span></Link>
                        <Link href={"/license"}><span className={footer_styles.link}>라이센스</span></Link>
                        <a className={footer_styles.link} href="/discord" target="blank">디스코드</a>
                        <a className={footer_styles.link} href="https://github.com/DEV-PLUG" target="blank">깃헙</a>
                    </div>
                    <div className={footer_styles.footer_des}>
                        <div className={footer_styles.link}>PLUG  |  jhcplace@daum.net</div>
                    </div>
                    <div className={footer_styles.footer_des}>
                        <div className={footer_styles.link}>Copyrightⓒ2022 PLUG All rights reserved.</div>
                    </div>
                </div>
            </div>
        </>
    );
}