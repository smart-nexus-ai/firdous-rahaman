import type { Experience, Education, Certification } from '@/types/experience';

export const experiences: Experience[] = [
    {
        id: 'exp-1',
        title: 'IoT Developer',
        company: 'Freelance / Self-Employed',
        location: 'Remote',
        startDate: '2024-06',
        endDate: 'Present',
        type: 'freelance',
        description:
            'Designing and developing end-to-end IoT solutions for clients including smart agriculture systems, environmental monitoring, and home automation.',
        highlights: [
            'Built 5+ complete IoT systems from sensor to dashboard',
            'Developed Android apps with real-time Firebase integration',
            'Implemented ML models on ESP32 for edge computing',
            'Reduced client monitoring costs by 60% through automation',
        ],
        technologies: ['ESP32', 'Firebase', 'Kotlin', 'TensorFlow Lite', 'Python'],
    },
    {
        id: 'exp-2',
        title: '3D Design & Prototyping Intern',
        company: 'CGEC (Cooch Behar Government Engineering College)',
        location: 'Cooch Behar, West Bengal',
        startDate: '2024-06',
        endDate: '2024-09',
        type: 'internship',
        description:
            'Completed a certification program in 3D printing, 3D modeling, and digital design. Gained hands-on experience with industry-standard CAD tools and additive manufacturing workflows.',
        highlights: [
            'Learned 3D modeling and design using Blender and FreeCAD',
            'Operated and maintained FDM 3D printers for rapid prototyping',
            'Designed functional parts and enclosures for engineering projects',
            'Earned certification in 3D Printing & Digital Design',
        ],
        technologies: ['Blender', 'FreeCAD', '3D Printing', '3D Modeling', 'CAD Design'],
    },
    {
        id: 'exp-3',
        title: 'Machine Operator & Stock Management',
        company: 'WBPDS — Food & Supplies Department, Govt. of West Bengal',
        location: 'West Bengal, India',
        startDate: '2021',
        endDate: '2023',
        type: 'work',
        description:
            'Worked under the West Bengal Public Distribution System (WBPDS), a public service initiative by the Food & Supplies Department, Government of West Bengal. Responsible for machine operations, stock management, and ensuring smooth distribution of essential commodities.',
        highlights: [
            'Operated PDS distribution machinery and biometric verification systems',
            'Managed inventory and stock records for essential food supplies',
            'Ensured accurate record-keeping and timely distribution to beneficiaries',
            'Coordinated with government officials for supply chain operations',
            'Served the public by facilitating fair distribution of commodities',
        ],
        technologies: ['Machine Operation', 'Stock Management', 'Public Service', 'Inventory', 'Data Entry'],
    },
];

export const education: Education[] = [
    {
        id: 'edu-1',
        degree: 'Bachelor of Technology — Electronics / Computer Science',
        institution: 'Your University Name',
        location: 'Your City, Country',
        startDate: '2021',
        endDate: '2025',
        grade: 'CGPA: 8.5 / 10',
        description:
            'Focused on embedded systems, IoT, and machine learning. Active member of the robotics club and IoT research group.',
        coursework: [
            'Embedded Systems',
            'Digital Signal Processing',
            'Machine Learning',
            'Computer Networks',
            'Microprocessors',
            'Data Structures & Algorithms',
        ],
    },
    {
        id: 'edu-2',
        degree: 'Higher Secondary (12th) — Science',
        institution: 'Your School Name',
        location: 'Your City, Country',
        startDate: '2019',
        endDate: '2021',
        grade: '92%',
        description:
            'Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics.',
        coursework: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
    },
];

export const certifications: Certification[] = [
    {
        id: 'cert-1',
        name: '3D Printing & Digital Design Certification',
        issuer: 'CGEC (Cooch Behar Government Engineering College)',
        date: '2024',
    },
    {
        id: 'cert-2',
        name: 'TensorFlow Developer Certificate',
        issuer: 'Google',
        date: '2024',
        url: 'https://www.tensorflow.org/certificate',
    },
    {
        id: 'cert-3',
        name: 'IoT Specialization',
        issuer: 'Coursera (UC Irvine)',
        date: '2024',
        url: 'https://coursera.org',
    },
    {
        id: 'cert-4',
        name: 'Android Development with Kotlin',
        issuer: 'Google',
        date: '2023',
        url: 'https://developer.android.com',
    },
    {
        id: 'cert-5',
        name: 'Embedded Systems Design',
        issuer: 'NPTEL',
        date: '2023',
        url: 'https://nptel.ac.in',
    },
];