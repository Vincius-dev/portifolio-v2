import Image from "next/image";
import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";
export default async function Home() {
  const t = await getTranslations("home");
  const locale = await getLocale();
  return (
    <main
      id="main-content"
      className="page-shell grid items-center gap-12 py-16 lg:grid-cols-[1.5fr_1fr] lg:py-24"
    >
      <div>
        <p className="eyebrow">{t("eyebrow")}</p>
        <p className="mt-6 text-xl font-medium">Vinícius Gabriel</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {t("title")}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {t("description")}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link className="primary-link" href={`/${locale}/projects`}>
            {t("projects")} →
          </Link>
          <Link className="secondary-link" href={`/${locale}/experience`}>
            {t("experience")}
          </Link>
        </div>
      </div>
      <figure className="mx-auto max-w-sm">
        <Image
          src="/perfil-atual.jpg"
          alt={t("portrait")}
          width={640}
          height={640}
          priority
          className="aspect-square rounded-3xl object-cover shadow-xl"
        />
        <figcaption className="mt-5 text-sm text-muted-foreground">
          {t("focus")}
        </figcaption>
      </figure>
    </main>
  );
}
