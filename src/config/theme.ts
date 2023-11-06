import { IconName } from "@/components/ui";

export const themes = ["dark", "lighht"];
export const colors = ["blue", "green", "orange", "zinc", "rose"];

export type Theme = (typeof themes)[number];
export type ColorScheme = (typeof colors)[number];

export type AppTheme = {
  name: Theme;
  icon: IconName;
};

export const appThemes: AppTheme[] = [
  { name: "dark", icon: "moon" },
  { name: "light", icon: "sun" },
];

export type AppColorScheme = {
  name: ColorScheme;
};

export const appColorSchemes: AppColorScheme[] = colors.map((color) => ({
  name: color,
}));
