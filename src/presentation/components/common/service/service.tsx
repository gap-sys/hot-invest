"use client";

import { FiPhoneCall } from "react-icons/fi";
import { FaHandPeace } from "react-icons/fa";

import styles from "./service.module.scss";

export default function Service() {
    return (
        <section id="atendimento" className={styles.container}>
            <div className={styles.serviceSection}>
                <div className={styles.left}>
                    <h2 className={styles.title}>Fale conosco</h2>
                    <p className={styles.subtitle}>
                        Atendimento disponível 24h por dia pelo chat no aplicativo HotInvest.
                    </p>
                </div>
                <div className={styles.right}>
                    <div className={styles.card}>
                        <div className={styles.iconCol}>
                            <FiPhoneCall className={styles.iconMain} />
                        </div>
                        <div>
                            <div className={styles.cardTitle}>Se preferir, ligue:</div>
                            <div className={styles.phoneBlock}>
                                <span className={styles.phone}>0800 000 0120</span>
                                <span className={styles.phoneDesc}>Atendimento nacional</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.iconCol}>
                            <FaHandPeace className={styles.iconSecondary} />
                        </div>
                        <p className={styles.linkPurple}>
                            Canal de atendimento em libras pelo aplicativo HotInvest
                        </p>
                    </div>
                </div>
            </div>
        </section >
    );
}
