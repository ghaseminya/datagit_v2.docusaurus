import React from "react";
import clsx from 'clsx';
import Layout from "@theme/Layout";
import Image from '@theme/IdealImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import profilePic from '@site/static/img/general/massoudmaboudi.png';
import telegram from '@site/static/img/socialMedia/telegram.png';
import email from '@site/static/img/socialMedia/email.png';
import whatsapp from '@site/static/img/socialMedia/whatsapp.png';
import linkedin from '@site/static/img/socialMedia/linkedin.png';

const profilePicture = [
  {
    title: 'مسعود معبودی',
    description: 'یک انسان عادی که از کمک کردن به بقیه خوشحال میشه.',
    imageUrl: profilePic,
    alt: 'Massoud Maboudi'
  }
]

const socialMedia = [
  {
    imageUrl: telegram,
    href: 'https://t.me/MassoudMaboudi',
    alt: 'telegram'
  },
  {
    imageUrl: whatsapp,
    href: 'http://wa.me/60183757685',
    alt: 'whatsapp'
  },
  {
    imageUrl: email,
    href: 'mailto:massoud.maboudi@gmail.com',
    alt: 'email'
  },
  {
    imageUrl: linkedin,
    href: 'https://linkedin.com/in/massoud-maboudi',
    alt: 'linkedin'
  }
]

function ProfilePicture({ title, description, imageUrl, alt }) {
  return (
    <div className={"avatar avatar--vertical"}>
      <Image className={clsx(styles.profile__picture, "avatar__photo avatar__photo--xl")} img={imageUrl} />
      <div className={"avatar__intro"}>
        <h2 className={styles.avatar__title}>{title}</h2>
        <small className={styles.avatar__subtitle}>{description}</small>
      </div>
    </div>
  );
}

function SocialMedia({ imageUrl, href, alt }) {
  return (
    <div className={"avatar"}>
      <a
        href={href}
      >
        <Image className={clsx(styles.social__media_pic, "avatar__photo avatar__photo--sm")} img={imageUrl} />
      </a>
    </div>
  );
}

function Support() {
  return (
    <Layout
      noFooter={true}
      title="تماس با من"
      description="توی این صفحه میتونید راه های ارتباط با من رو پیدا کنید. میتونید نظرتون رو بهم بگید یا اینکه یه آموزش جدید درخواست بدید. راستی، راجع به همکاری هم میتونیم صحبت کنیم."
      keywords={['مسعود معبودی', 'Massoud Maboudi', 'دیتاگیت', 'datagit', 'datagit.ir', 'مسعود معبودی رزومه', 'رزومه مسعود معبودی', 'Massoud Maboudi profile', 'دیتا گیت', 'مسعود معبودی دیتا گیت']}
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className={styles.hero__title}>دیتاگیت</h1>
          <p className={styles.hero__subtitle}>توی این صفحه میتونید راه های ارتباط با من رو پیدا کنید. میتونید نظرتون رو بهم بگید یا اینکه یه آموزش جدید درخواست بدید.</p>
          <p className={styles.hero__subtitle}>راستی، راجع به همکاری هم میتونیم صحبت کنیم.</p>
        </div>
      </header>
      <main className={styles.main_features}>
        {profilePicture && profilePicture.length > 0 && (
          <section className={styles.profile__picture_features}>
            <div className={"container"}>
              {profilePicture.map((props, idx) => (
                <ProfilePicture key={idx} {...props} />
              ))}
            </div>
          </section>
        )}
        {socialMedia && socialMedia.length > 0 && (
          <section className={styles.social__media_features}>
            <div className={"container"}>
              <div className={clsx("row", styles.center__row)}>
                {socialMedia.map((props, idx) => (
                  <SocialMedia key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <footer className={clsx('hero hero--primary', styles.heroFooter)}>
        <div className="container">
          <p className={styles.customHero__subtitle}>Massoud Maboudi - Datagit.ir © 2018</p>
        </div>
      </footer>
    </Layout>
  );
}

export default Support;
