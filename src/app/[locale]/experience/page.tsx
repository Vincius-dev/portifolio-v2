import { getTranslations } from "next-intl/server";
type Job = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string;
};
export default async function ExperiencePage() {
  const t = await getTranslations("experience");
  const jobs = t.raw("jobs") as Job[];
  return (
    <main id="main-content" className="page-shell py-14">
      <h1 className="page-title">{t("title")}</h1>
      <p className="page-intro">{t("intro")}</p>
      <ol className="mt-12 space-y-8">
        {jobs.map((job) => (
          <li
            className="rounded-2xl border bg-card p-6 sm:p-8"
            key={job.company}
          >
            <article>
              <p className="eyebrow">{job.company}</p>
              <h2 className="mt-3 text-2xl font-semibold">{job.role}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{job.period}</p>
              <p className="mt-5 text-lg">{job.summary}</p>
              <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-muted-foreground">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <p className="mt-6 border-t pt-4 text-sm font-medium">
                {job.stack}
              </p>
            </article>
          </li>
        ))}
      </ol>
    </main>
  );
}
