import React from "react";
import clsx from 'clsx';
import Layout from "@theme/Layout";
import Image from '@theme/IdealImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Support() {
  return (
    <Layout
      title="تماس با من"
      description="تماس با من"
    >
      <div className="container">
        <div className="row">
          <div className="col padding-vert--lg">
            <div className={clsx("row", styles.customRow, styles.customImage)}><img className={styles.logoLink} src={useBaseUrl('img/general/massoudmaboudi.png')} alt="telegram" width="200" height="200" /></div>
            <h1 className={styles.customH1}>مسعود معبودی</h1>
            <p className={styles.customP}>
              یک انسان عادی که دوست داره به بقیه کمک کنه.
            </p>

            <h2 className={styles.customH2}>تماس با من</h2>
            <div className={clsx("row", styles.customRow)}>
              <div class="col col--3" className={styles.customCol}><a href='https://t.me/MassoudMaboudi'><img className={styles.logoLink} src={useBaseUrl('img/socialMedia/telegram.png')} alt="telegram" width="32" height="32" /></a></div>
              <div class="col col--3" className={styles.customCol}><a href='http://wa.me/60183757685'><img className={styles.logoLink} src={useBaseUrl('img/socialMedia/whatsapp.png')} alt="whatsapp" width="32" height="32" /></a></div>
              <div class="col col--3" className={styles.customCol}><a href='mailto:massoud.maboudi@gmail.com'><img className={styles.logoLink} src={useBaseUrl('img/socialMedia/email.png')} alt="email" width="32" height="32" /></a></div>
              <div class="col col--3" className={styles.customCol}><a href='https://linkedin.com/in/massoud-maboudi'><img className={styles.logoLink} src={useBaseUrl('img/socialMedia/linkedIN.png')} alt="linkedin" width="32" height="32" /></a></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Support;
