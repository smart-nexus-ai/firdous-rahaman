import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        slug: "airsense-iot",
        title: "AirSense IoT Platform",
        tagline: "Comprehensive air quality monitoring and prediction system",
        description: "An advanced IoT platform that captures real-time environmental data using ESP32 and multiple sensors. It uploads data at 30-second intervals to Firebase Realtime Database and utilizes Python ML pipelines (ARIMA/LSTM) to predict future air quality indices.",
        category: ["iot", "ml", "mobile"],
        status: "completed",
        duration: "6 months",
        heroImage: "/projects/airsense-hero.jpg",
        gallery: ["/projects/airsense-1.jpg", "/projects/airsense-2.jpg"],
        techStack: [
            { name: "ESP32", icon: "cpu", category: "Hardware" },
            { name: "Firebase RTDB", icon: "database", category: "Backend" },
            { name: "Kotlin", icon: "smartphone", category: "Mobile" },
            { name: "Python", icon: "code", category: "Data Science" },
            { name: "TensorFlow", icon: "brain", category: "Machine Learning" }
        ],
        features: [
            "Real-time data upload (30s interval)",
            "24h + hourly structured storage",
            "13-parameter prediction (next 5 values)",
            "User authentication",
            "Dashboard with live charts",
            "AQI calculation algorithm"
        ],
        architectureDescription: "ESP32 with sensors → Firebase Realtime DB → Android App (Kotlin) | Python ML Pipeline → ARIMA/LSTM models → TFLite conversion → Android integration",
        links: { github: "https://github.com", live: "https://airsense.xo.je" },
        highlights: [
            { label: "Sensors", value: "5+" },
            { label: "Parameters", value: "13" },
            { label: "Predictions", value: "5 future values" },
            { label: "Interval", value: "30s" }
        ],
        order: 4
    },
    {
        slug: "smart-attendance",
        title: "AttendPro - Smart Attendance Manager",
        tagline: "Digitize your classroom attendance with offline-first technology",
        description: "A comprehensive academic attendance system built with modern technology for teachers. Features include offline-first capabilities, background sync, session locking to prevent duplicates, and 3 types of reports (Summary, Defaulter, Date-wise) with PDF export.",
        category: ["mobile", "web"],
        status: "completed",
        duration: "4 months",
        heroImage: "/projects/attendance-hero.jpg",
        gallery: ["/projects/attendance-1.jpg"],
        techStack: [
            { name: "Kotlin", icon: "smartphone", category: "Mobile" },
            { name: "Firebase RTDB", icon: "database", category: "Backend" },
            { name: "WorkManager", icon: "cpu", category: "Background" },
            { name: "Material3", icon: "palette", category: "UI" }
        ],
        features: [
            "Offline-first with background sync",
            "Session locking mechanism",
            "Generate PDF reports with QR codes",
            "Google Sheets bulk import",
            "Defaulter tracking with configuration",
            "Dark, Light, and System themes"
        ],
        architectureDescription: "Android App (Offline-First) → WorkManager → Firebase Realtime Database ↔ Real-time sync across devices",
        links: { github: "https://github.com/Firdous__TFG/Smart-Attendance-System", live: "https://attendpro-one.vercel.app/" },
        highlights: [
            { label: "Sync", value: "Offline & Background" },
            { label: "Reports", value: "PDF & Google Sheets" }
        ],
        order: 1
    },
    {
        slug: "pid-temperature-control",
        title: "PID Temperature Controller",
        tagline: "High-precision closed-loop temperature control system",
        description: "An embedded system that precisely manages heater element temperatures using Proportional-Integral-Derivative (PID) control mechanisms. Tuned to minimize overshoot and stabilize temperatures continuously.",
        category: ["embedded", "iot"],
        status: "completed",
        duration: "2 months",
        heroImage: "/projects/pid-hero.jpg",
        gallery: ["/projects/pid-1.jpg"],
        techStack: [
            { name: "Arduino/ESP", icon: "cpu", category: "Hardware" },
            { name: "PID Library", icon: "code", category: "Embedded" }
        ],
        features: [
            "Closed-loop control",
            "Kp/Ki/Kd tuning",
            "Overshoot reduction",
            "Real-time feedback",
            "Serial monitoring",
            "Setpoint adjustment"
        ],
        architectureDescription: "Microcontroller + PID Logic ↔ Temperature Sensor + Heater Element",
        links: { github: "https://github.com" },
        highlights: [
            { label: "Algorithm", value: "PID" },
            { label: "Feedback", value: "Continuous" }
        ],
        order: 5
    },
    {
        slug: "smart-irrigation",
        title: "Smart Irrigation System",
        tagline: "Automated plant watering based on soil moisture data",
        description: "An IoT application concept for automating irrigation. It measures soil moisture levels via an ESP32 and automatically operates water pumps when thresholds are met, supported by a remote monitoring web interface.",
        category: ["iot"],
        status: "concept",
        duration: "TBD",
        heroImage: "/projects/irrigation-hero.jpg",
        gallery: [],
        techStack: [
            { name: "ESP32", icon: "cpu", category: "Hardware" },
            { name: "Firebase", icon: "database", category: "Cloud" }
        ],
        features: [
            "Auto pump ON/OFF based on moisture",
            "Firebase cloud monitoring",
            "Manual override from app",
            "Threshold configuration",
            "Historical data logging"
        ],
        architectureDescription: "ESP32 + Sensors ↔ Firebase Cloud ↔ User Application",
        links: { github: "https://github.com" },
        highlights: [
            { label: "Automation", value: "Threshold-based" }
        ],
        order: 2
    },
    {
        slug: "weather-aqi-prediction",
        title: "Weather & AQI Prediction Model",
        tagline: "Forecasting environmental metrics via time-series analysis",
        description: "A machine learning pipeline utilizing both ARIMA and LSTM architectures to predict localized weather variations and Air Quality Index on a custom proprietary dataset.",
        category: ["ml"],
        status: "completed",
        duration: "3 months",
        heroImage: "/projects/ml-hero.jpg",
        gallery: [],
        techStack: [
            { name: "Python", icon: "code", category: "Language" },
            { name: "TensorFlow", icon: "brain", category: "ML" },
            { name: "Pandas/NumPy", icon: "bar-chart", category: "Data Science" }
        ],
        features: [
            "Custom sensor dataset (not public)",
            "ARIMA time-series model",
            "LSTM deep learning model",
            "13 input parameters → 5 future predictions",
            "TFLite model export for Android",
            "Model comparison & accuracy metrics"
        ],
        architectureDescription: "Raw Dataset → Preprocessing (Pandas/NumPy) → Model Training (ARIMA/LSTM) → Evaluation → TFLite Export",
        links: { github: "https://github.com" },
        highlights: [
            { label: "Models", value: "LSTM + ARIMA" },
            { label: "Format", value: "TFLite" }
        ],
        order: 6
    },
    {
        slug: "home-automation-supabase",
        title: "Home Automation (Supabase)",
        tagline: "Real-time smart home control powered by Supabase Realtime",
        description: "An innovative approach to IoT home automation leveraging Supabase's PostgreSQL Realtime features instead of traditional MQTT brokers, simplifying the stack while maintaining low latency.",
        category: ["iot", "web"],
        status: "in-progress",
        duration: "Current",
        heroImage: "/projects/supabase-hero.jpg",
        gallery: [],
        techStack: [
            { name: "Supabase", icon: "database", category: "Backend" },
            { name: "ESP32", icon: "cpu", category: "Hardware" }
        ],
        features: [
            "Real-time device control without MQTT",
            "Supabase Realtime subscriptions",
            "Device state management",
            "Edge Functions for logic",
            "Android app control panel"
        ],
        architectureDescription: "Android App ↔ Supabase Postgres (Realtime API) ↔ Edge Functions ↔ ESP32 (REST/WebSocket)",
        links: { github: "https://github.com" },
        highlights: [
            { label: "Protocol", value: "Supabase Realtime" },
            { label: "Serverless", value: "Edge Functions" }
        ],
        order: 3
    },
    {
        slug: "chat-app-architecture",
        title: "Chat App Architecture Study",
        tagline: "Technical exploration of scalable messaging protocols",
        description: "An intensive systems architecture study comparing WebSocket and MQTT protocols for building highly scalable, WhatsApp-style messaging services on custom VPS hardware.",
        category: ["web"],
        status: "concept",
        duration: "1 month",
        heroImage: "/projects/chat-hero.jpg",
        gallery: [],
        techStack: [
            { name: "WebSocket", icon: "globe", category: "Network" },
            { name: "MQTT", icon: "radio", category: "Network" },
            { name: "Raspberry Pi", icon: "server", category: "Infrastructure" }
        ],
        features: [
            "WhatsApp-like message structure",
            "WebSocket vs MQTT comparison",
            "JSON message schema design",
            "VPS deployment architecture",
            "Raspberry Pi server concept",
            "End-to-end architecture documentation"
        ],
        architectureDescription: "Client Apps ↔ Load Balancer ↔ WebSocket/MQTT Brokers ↔ Redis Pub/Sub ↔ Database Servers",
        links: { github: "https://github.com/firdouscgec" },
        highlights: [
            { label: "Focus", value: "System Architecture" },
            { label: "Protocols", value: "MQTT & WebSocket" }
        ],
        order: 7
    }
];
