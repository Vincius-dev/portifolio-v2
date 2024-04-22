"use client"

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LanguageToggle() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathName = usePathname();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;  
    startTransition(() => {
      router.replace(`/${nextLocale}/${pathName.substring(pathName.lastIndexOf('/'))}`);
    });
  };
  
  return (
    <label className='border-2 rounded'>
      <p className='sr-only'>change language</p>
      <select
        defaultValue={localActive}
        className=' bg-transparent dark:bg-black dark:text-white  w-full'
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option className='bg-black text-white' value='en'>English</option>
        <option className='bg-black text-white' value='pt-BR'>Português</option>
      </select>
    </label>
  );
}