import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Trans, useTranslation } from "next-i18next";
import Link from "next/link";

const Home: NextPage = () => {
  const {t} = useTranslation("common")
  return (
    <div className={styles.container}>
      <p>{t("Hello")}</p>
      <p>This is a link to Google.</p>
      <Trans i18nKey="userMessagesUnread">
        {t("Hello <strong>there</strong>, you have 5 unread messages.<a href='#'>Read messages.</a>")}
      </Trans>
    </div>
  );
};

export default Home;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
