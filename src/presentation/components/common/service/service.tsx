"use client";

import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";

import styles from "./service.module.scss";
import { IMAGE } from "src/presentation/assets";

export default function Service() {
    const Form = () => (
        <form className={styles.form}>
            <input className={styles.input} type="text" placeholder="Nome" />
            <input className={styles.input} type="email" placeholder="E-mail" />
            <input className={styles.input} type="text" placeholder="Telefone" />
            <textarea className={styles.textarea} placeholder="Mensagem" />
            <button className={styles.submit}>Enviar</button>
        </form>
    );

    return (
        <>
            <section
                id="atendimento"
                className={styles.container}
                style={{ backgroundImage: `url(${IMAGE.FALE_CONOSCO.src})` }}
            >
                <div className={styles.serviceSection}>
                    <div className={styles.left}>
                        <h2 className={styles.title}>Fale Conosco</h2>
                        <p className={styles.subtitle}>
                            Atendimento disponível 24h por dia pelo chat no aplicativo Hotinvest
                        </p>
                        <ul className={styles.contacts}>
                            <li><FiMail className={styles.icon} />sac@hotinvest.com.br</li>
                            <li><FiPhoneCall className={styles.icon} />0800 000 0120</li>
                            <li><FiMapPin className={styles.icon} />Rua Campos Salles, 940, Santa Cruz, São Pedro – SP.</li>
                        </ul>
                    </div>
                    <div className={styles.formDesktop}>
                        <Form />
                    </div>
                </div>
            </section>
            <div className={styles.formMobile}>
                <Form />
            </div>
        </>
    );
}
