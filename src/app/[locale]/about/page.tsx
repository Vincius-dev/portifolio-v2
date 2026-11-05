import { getTranslations } from "next-intl/server";
export default async function AboutPage() {
  const t = await getTranslations("about");
  return (
    <main id="main-content" className="page-shell py-14">
      <h1 className="page-title">{t("title")}</h1>
      <p className="page-intro">{t("intro")}</p>
      <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
        {(t.raw("paragraphs") as string[]).map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">{t("skillsTitle")}</h2>
        <ul className="mt-5 flex flex-wrap gap-3">
          {(t.raw("skills") as string[]).map((s) => (
            <li className="tag" key={s}>
              {s}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
