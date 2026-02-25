import { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
    {
        slug: "building-airsense",
        title: "Building AirSense: From Sensor to App",
        excerpt: "A deep dive into creating a comprehensive air quality monitoring platform using ESP32, Firebase, and Kotlin.",
        date: "2024-03-15",
        readTime: "8 min read",
        tags: ["IoT", "ESP32", "Firebase", "Kotlin"],
        content: "Content goes here. This will be replaced by MDX later."
    },
    {
        slug: "pid-tuning-guide",
        title: "PID Tuning: A Practical Guide",
        excerpt: "Learn how to practically tune Proportional-Integral-Derivative controllers for your embedded projects to minimize overshoot.",
        date: "2024-02-28",
        readTime: "6 min read",
        tags: ["Embedded", "Control Systems", "Arduino"],
        content: "Content goes here. This will be replaced by MDX later."
    },
    {
        slug: "esp32-firebase-setup",
        title: "ESP32 + Firebase: Complete Setup Guide",
        excerpt: "Step-by-step guide to securely connecting your ESP32 devices to Firebase Realtime Database for real-time telemetry.",
        date: "2024-01-10",
        readTime: "5 min read",
        tags: ["IoT", "ESP32", "Firebase", "Tutorial"],
        content: "Content goes here. This will be replaced by MDX later."
    }
];
