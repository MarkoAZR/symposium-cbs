// Session styling configuration extracted from ScheduleGrid component
import type { SessionType } from "~/lib/scheduleData";

export interface SessionStyles {
    lightBg: string;
    darkBg: string;
    lightBorder: string;
    darkBorder: string;
    lightText: string;
    darkText: string;
    badge: string;
    borderGlow: string;
}

/**
 * Maps session types to their corresponding Tailwind CSS styles
 * Supports light and dark modes with consistent theming
 */
export function getSessionStyles(type: SessionType): SessionStyles {
    switch (type) {
        case "inaugural":
            return {
                lightBg: "bg-amber-50",
                darkBg: "dark:bg-amber-950/20",
                lightBorder: "border-l-amber-500",
                darkBorder: "dark:border-l-amber-400",
                lightText: "text-amber-700",
                darkText: "dark:text-amber-300",
                badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
                borderGlow: "hover:shadow-[0_0_15px_rgba(217,119,6,0.3)]",
            };
        case "research_lecture":
            return {
                lightBg: "bg-blue-50",
                darkBg: "dark:bg-blue-950/20",
                lightBorder: "border-l-blue-500",
                darkBorder: "dark:border-l-blue-400",
                lightText: "text-blue-700",
                darkText: "dark:text-blue-300",
                badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
                borderGlow: "hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]",
            };
        case "speed_talk":
            return {
                lightBg: "bg-cyan-50",
                darkBg: "dark:bg-cyan-950/20",
                lightBorder: "border-l-cyan-500",
                darkBorder: "dark:border-l-cyan-400",
                lightText: "text-cyan-700",
                darkText: "dark:text-cyan-300",
                badge: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300",
                borderGlow: "hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]",
            };
        case "conversatorio":
            return {
                lightBg: "bg-purple-50",
                darkBg: "dark:bg-purple-950/20",
                lightBorder: "border-l-purple-500",
                darkBorder: "dark:border-l-purple-400",
                lightText: "text-purple-700",
                darkText: "dark:text-purple-300",
                badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
                borderGlow: "hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]",
            };
        case "closing":
            return {
                lightBg: "bg-emerald-50",
                darkBg: "dark:bg-emerald-950/20",
                lightBorder: "border-l-emerald-500",
                darkBorder: "dark:border-l-emerald-400",
                lightText: "text-emerald-700",
                darkText: "dark:text-emerald-300",
                badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
                borderGlow: "hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]",
            };
        default:
            return {
                lightBg: "bg-slate-50",
                darkBg: "dark:bg-slate-900/20",
                lightBorder: "border-l-slate-400",
                darkBorder: "dark:border-l-slate-600",
                lightText: "text-slate-600",
                darkText: "dark:text-slate-400",
                badge: "bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
                borderGlow: "",
            };
    }
}

/**
 * Returns the label text for a given session type
 * Used for displaying session type badges in the schedule
 */
export function getTypeLabel(type: SessionType): string {
    const labels: Record<SessionType, string> = {
        inaugural: "INAUGURACIÓN",
        research_lecture: "PONENCIA",
        speed_talk: "SPEED TALK",
        conversatorio: "CONVERSATORIO",
        closing: "CLAUSURA",
        break: "PAUSA",
    };
    return labels[type] || "SESIÓN";
}
