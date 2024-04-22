"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTranslations } from "next-intl"

export function ThemeToggle() {
  const { setTheme } = useTheme()
  const t = useTranslations('theme');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-6 h-6" size="icon">
          <Sun className="h-auto w-auto rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-auto w-auto rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          {t("light")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
        {t("dark")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
        {t("system")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
