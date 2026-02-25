import type { SkillCategory, Tool } from '@/types/skill';

export const skillCategories: SkillCategory[] = [
    {
        title: 'Hardware & Embedded',
        icon: 'Cpu',
        skills: [
            { name: 'ESP32', level: 95 },
            { name: 'Arduino', level: 90 },
            { name: 'Sensor Integration', level: 95 },
            { name: 'PID Control', level: 70 },
            { name: 'PCB Design', level: 40 },
        ],
    },
    {
        title: 'Backend & Database',
        icon: 'Database',
        skills: [
            { name: 'Firebase', level: 95 },
            { name: 'Supabase', level: 85 },
            { name: 'Node.js', level: 65 },
        ],
    },
    {
        title: 'Mobile & Frontend',
        icon: 'Smartphone',
        skills: [
            { name: 'Kotlin Android', level: 90 },
            { name: 'React/Next.js', level: 70 },
            { name: 'Tailwind CSS', level: 80 },
        ],
    },
    {
        title: 'ML & Data Science',
        icon: 'BrainCircuit',
        skills: [
            { name: 'Python', level: 90 },
            { name: 'TensorFlow', level: 80 },
            { name: 'ARIMA/LSTM', level: 70 },
            { name: 'TFLite', level: 75 },
        ],
    },
    {
        title: 'DevOps & Tools',
        icon: 'Wrench',
        skills: [
            { name: 'Git/GitHub', level: 90 },
            { name: 'Linux', level: 75 },
            { name: 'VS Code', level: 95 },
            { name: 'Vercel', level: 80 },
        ],
    },
];

export const tools: Tool[] = [
    { name: 'Git', icon: 'git' },
    { name: 'VS Code', icon: 'vscode' },
    { name: 'Vercel', icon: 'vercel' },
    { name: 'Linux', icon: 'linux' },
    { name: 'Postman', icon: 'postman' },
    { name: 'Figma', icon: 'figma' },
    { name: 'Arduino IDE', icon: 'arduino' },
    { name: 'Android Studio', icon: 'android-studio' },
];