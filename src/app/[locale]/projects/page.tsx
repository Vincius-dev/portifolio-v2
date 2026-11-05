import { getTranslations } from "next-intl/server";
import Image from "next/image";

const earlierProjects = [
  {
    id: "linear-system",
    image: "linear-system-calc.png",
    stack: ["TypeScript", "Next.js", "React"],
    repo: "https://github.com/Vincius-dev/linear-systems-calc",
    url: "https://linear-systems-calc.vercel.app/calc/linear-system",
  },
  {
    id: "bot-notification",
    image: "bot-notification.png",
    stack: ["Python", "Docker", "MongoDB"],
    repo: "https://github.com/Vincius-dev/bot-notification",
  },
  {
    id: "uno-java",
    image: "uno-java.png",
    stack: ["Java"],
    repo: "https://github.com/Vincius-dev/uno-java",
  },
  {
    id: "portifolio-v2",
    image: "portfolio-v2.png",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    repo: "https://github.com/Vincius-dev/portifolio-v2",
    url: "https://www.vinicius-dev.com/",
  },
  {
    id: "portifolio-v1",
    image: "portfolio-v1.png",
    stack: ["JavaScript", "React", "CSS"],
    repo: "https://github.com/Vincius-dev/site-portifolio",
    url: "https://portifolio-viniciusg.vercel.app/",
  },
  {
    id: "corona-vapo",
    image: "corona-vapo.jpeg",
    stack: ["Godot", "GDScript", "C#"],
    repo: "https://github.com/Vincius-dev/Game-CoronaVapo",
  },
  {
    id: "medplus",
    image: "medplus.png",
    stack: ["Angular", "TypeScript", "Node.js", "PostgreSQL"],
    repo: "https://github.com/Vincius-dev/usjt_medplus_project_frontend",
    url: "https://www.youtube.com/watch?v=gfEEJ9Umv1Q",
  },
  // The old card linked to the unrelated calculator; omit unconfirmed links.
  {
    id: "party-manager",
    image: "festa-aniversario.png",
    stack: ["Java", "Spring Boot", "React", "MongoDB"],
  },
];
const projects = [
  {
    id: "anti",
    stack: ["Java", "Spring Boot", "PostgreSQL", "React", "Python", "MCP"],
    url: "https://anti-arrombo.subarashi.cloud/",
    repo: "https://github.com/SUBARASHlI/anti-arrombo",
    mark: "A↗",
    tone: "bg-emerald-950",
  },
  {
    id: "astra",
    stack: ["Java", "MongoDB", "React", "Three.js", "YAML"],
    url: "https://astra.subarashi.cloud/",
    repo: "https://github.com/SUBARASHlI/astra",
    mark: "✦",
    tone: "bg-indigo-950",
  },
  {
    id: "engrama",
    stack: ["Java", "Angular", "Kotlin", "FSRS", "PostgreSQL", "MCP"],
    url: "https://engrama.subarashi.cloud/",
    repo: "https://github.com/SUBARASHlI/engrama",
    mark: "E",
    tone: "bg-teal-950",
  },
  {
    id: "infra",
    stack: ["Docker", "Traefik", "Keycloak", "Grafana", "SOPS"],
    repo: "https://github.com/SUBARASHlI/subarashii-infra",
    mark: "{ }",
    tone: "bg-slate-900",
  },
];
export default async function ProjectsPage() {
  const t = await getTranslations("projects");
  return (
    <main id="main-content" className="page-shell py-14">
      <h1 className="page-title">{t("title")}</h1>
      <p className="page-intro">{t("intro")}</p>
      <div className="mt-10 grid gap-7 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.id}
            className="flex flex-col overflow-hidden rounded-2xl border bg-card"
          >
            <div
              aria-hidden="true"
              className={`flex h-36 items-center justify-between px-8 text-white ${p.tone}`}
            >
              <span className="text-5xl font-semibold">{p.mark}</span>
              <span className="max-w-36 text-right text-sm">
                {t(`items.${p.id}.category`)}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h2 className="text-2xl font-semibold">
                {t(`items.${p.id}.title`)}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {t(`items.${p.id}.description`)}
              </p>
              <h3 className="mt-5 text-sm font-semibold">{t("details")}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(`items.${p.id}.detail`)}
              </p>
              <ul className="my-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li key={s} className="tag">
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-4 border-t pt-5">
                {p.url && (
                  <a
                    className="font-semibold underline underline-offset-4"
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("visit")} ↗
                  </a>
                )}
                <a
                  className="text-muted-foreground underline underline-offset-4"
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("repo")} ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
        {t("ai")}
      </p>
      <section
        className="mt-16 border-t pt-12"
        aria-labelledby="earlier-projects"
      >
        <h2 id="earlier-projects" className="text-3xl font-bold tracking-tight">
          {t("archiveTitle")}
        </h2>
        <p className="page-intro">{t("archiveIntro")}</p>
        <div className="mt-8 grid gap-7 md:grid-cols-2">
          {earlierProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col overflow-hidden rounded-2xl border bg-card"
            >
              <div className="relative aspect-video bg-muted">
                <Image
                  src={`/projects/${project.image}`}
                  alt={t(`archive.${project.id}.title`)}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold">
                  {t(`archive.${project.id}.title`)}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {t(`archive.${project.id}.description`)}
                </p>
                <ul className="my-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech} className="tag">
                      {tech}
                    </li>
                  ))}
                </ul>
                {(project.repo || project.url) && (
                  <div className="mt-auto flex flex-wrap gap-4 border-t pt-5">
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4"
                      >
                        {t("repo")} ↗
                      </a>
                    )}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4"
                      >
                        {t("demo")} ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
