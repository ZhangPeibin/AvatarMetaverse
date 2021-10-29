import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import Image from "next/image";
import Decoration from "./components/Header/decoration";

export default function PageNotFount() {
  const { t } = useTranslation(`common`);

  return (
    <div className="h-screen">
      <header className="relative">
        <div className="flex py-5 px-5 sm:px-16 md:px-32">
          <Image
            src="/logo.gif"
            alt="Notion Avatar Logo"
            width={50}
            height={50}
          />
          <span className="text-lg">
          NFT
          <br />
          Avatar Metaverse
        </span>
        </div>
        <Decoration className="absolute top-0 right-0 w-24 sm:w-28 md:w-36" />
      </header>
      <main className="flex flex-col justify-center h-2/3 items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl">{t(`404Title`)}</h1>
        <Link href="/">
          <a className="mt-4 underline">← {t(`404Redirect`)}</a>
        </Link>
      </main>
    </div>
  );
}

export async function getStaticProps({
  locale,
}: GetStaticPropsContext & { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [`common`])),
    },
  };
}
