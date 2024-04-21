import { redirect } from "next/navigation";

export default async function InitialPage({
    params: {locale}
  }: {
    params: {locale: string};
  })  {
    redirect(`${locale}/home`)
}
