import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export default function Footer() {
  const { t } = useTranslation(`common`);

  return (
    <footer className="flex flex-col items-center pb-4">
      <Image src="/icon/line.svg" width="125" height="54" />
      <div className="flex justify-center mt-10 text-lg">
        {/*<a*/}
        {/*  className="transition hover:underline"*/}
        {/*  href="https://github.com/mayandev/notion-avatar"*/}
        {/*>*/}
        {/*  {t(`github`)}*/}
        {/*</a>*/}
        {/*<span className="mx-2">·</span>*/}
        {/*<a*/}
        {/*  className="transition hidden md:inline-block hover:underline"*/}
        {/*  href="https://dribbble.com/phillzou"*/}
        {/*>*/}
        {/*  {t(`dribbble`)}*/}
        {/*</a>*/}
        {/*<span className="mx-2 hidden md:inline-block">·</span>*/}
        {/*<a className="hover:underline" href="https://twitter.com/phillzou">*/}
        {/*  {t(`twitter`)}*/}
        {/*</a>*/}
        {/*<span className="mx-2">·</span>*/}
        {t(`coffee`)}
      </div>

      <div className="text-gray-500 mt-3 px-6 text-center">
        <a
          className="hover:underline"
        >
          {"BSC Address:"}
        </a>
      </div>

      <div className="text-gray-500 px-6 text-center">
        {`0x53A4D41194054f08a2B9D7301E4936F7F8dd334A `}
      </div>
    </footer>
  );
}
