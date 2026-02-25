import type { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
    {
        slug: 'building-smart-iot-greenhouse',
        title: 'Building a Smart IoT Greenhouse with ESP32',
        excerpt:
            'A deep dive into how I built an automated greenhouse system using ESP32, multiple sensors, and Firebase for real-time monitoring.',
        date: '2025-01-15',
        readTime: '8 min read',
        tags: ['IoT', 'ESP32', 'Firebase', 'Automation'],
        content: `
## The Problem

Traditional greenhouses require constant manual monitoring. Temperature, humidity, and soil moisture need to be checked multiple times a day. This is inefficient and error-prone.

## The Solution

I built a fully automated greenhouse monitoring system using:

- **ESP32** as the main microcontroller
- **DHT22** for temperature and humidity
- **Capacitive soil moisture sensor** for soil monitoring
- **BH1750** for light intensity measurement
- **Firebase Realtime Database** for cloud storage

## Architecture

The system follows a simple but effective architecture:

\`\`\`
Sensors → ESP32 → WiFi → Firebase → Android App
\`\`\`

Each sensor reads data every 30 seconds. The ESP32 aggregates the readings and pushes them to Firebase. The Android app displays real-time data with charts and alerts.

## Key Code Snippet

Here's how I initialized the sensor array on the ESP32:

\`\`\`cpp
#include <DHT.h>
#include <BH1750.h>

DHT dht(4, DHT22);
BH1750 lightMeter;

void setup() {
  Serial.begin(115200);
  dht.begin();
  lightMeter.begin();
}
\`\`\`

## Results

The system reduced manual monitoring time by **90%** and improved crop yield by **25%** through optimal condition maintenance.

## What I Learned

1. Power management is crucial for IoT devices
2. Firebase free tier is sufficient for small-scale IoT
3. Capacitive sensors are more reliable than resistive ones
4. OTA updates save enormous time during development
    `,
    },
    {
        slug: 'ml-model-on-microcontroller',
        title: 'Running ML Models on Microcontrollers with TFLite',
        excerpt:
            'How I deployed a TensorFlow Lite model on an ESP32 for real-time anomaly detection in sensor data.',
        date: '2025-02-10',
        readTime: '10 min read',
        tags: ['Machine Learning', 'TFLite', 'ESP32', 'Edge AI'],
        content: `
## Why Edge AI?

Sending all sensor data to the cloud for processing introduces latency and requires constant connectivity. Edge AI solves this by running models directly on the microcontroller.

## The Challenge

ESP32 has limited resources:
- **520 KB** SRAM
- **4 MB** Flash (typical)
- **240 MHz** dual-core processor

Fitting a meaningful ML model in these constraints requires careful optimization.

## Model Development

I trained an anomaly detection model in Python using TensorFlow:

\`\`\`python
import tensorflow as tf

model = tf.keras.Sequential([
    tf.keras.layers.Dense(16, activation='relu', input_shape=(5,)),
    tf.keras.layers.Dense(8, activation='relu'),
    tf.keras.layers.Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam', loss='binary_crossentropy')
model.fit(X_train, y_train, epochs=50, batch_size=16)
\`\`\`

## Conversion to TFLite

\`\`\`python
converter = tf.lite.TFLiteConverter.from_keras_model(model)
converter.optimizations = [tf.lite.Optimize.DEFAULT]
tflite_model = converter.convert()

with open('model.tflite', 'wb') as f:
    f.write(tflite_model)
\`\`\`

The final model size was only **2.3 KB** — perfect for ESP32.

## Results

- Inference time: **< 5ms** per prediction
- Accuracy: **94.2%** on test data
- Power consumption: negligible increase

## Conclusion

Edge AI on microcontrollers is not just possible — it's practical. The key is keeping models small and focused on specific tasks.
    `,
    },
    {
        slug: 'kotlin-android-firebase-realtime',
        title: 'Real-time Android Dashboards with Kotlin & Firebase',
        excerpt:
            'Building responsive real-time dashboards in Android using Kotlin, Firebase Realtime Database, and MPAndroidChart.',
        date: '2025-03-05',
        readTime: '7 min read',
        tags: ['Android', 'Kotlin', 'Firebase', 'UI/UX'],
        content: `
## The Goal

Create a beautiful, real-time dashboard that displays IoT sensor data with live-updating charts and notifications.

## Tech Stack

- **Kotlin** for Android development
- **Firebase Realtime Database** for live data
- **MPAndroidChart** for data visualization
- **Material Design 3** for modern UI

## Firebase Listener Setup

\`\`\`kotlin
val database = Firebase.database.reference

database.child("sensors").addValueEventListener(
    object : ValueEventListener {
        override fun onDataChange(snapshot: DataSnapshot) {
            val temp = snapshot.child("temperature").getValue(Float::class.java)
            val humidity = snapshot.child("humidity").getValue(Float::class.java)
            updateUI(temp, humidity)
        }

        override fun onCancelled(error: DatabaseError) {
            Log.e("Firebase", "Error: \${error.message}")
        }
    }
)
\`\`\`

## Key Features

1. **Live Charts** — Data updates in real-time without refresh
2. **Threshold Alerts** — Push notifications when values exceed limits
3. **Historical Data** — View trends over days, weeks, months
4. **Dark Mode** — Full dark theme support

## Performance Tips

- Use \`DiffUtil\` for RecyclerView updates
- Debounce rapid Firebase updates
- Cache chart data locally with Room DB
- Use Kotlin Coroutines for background processing

## The Result

A smooth, responsive dashboard that updates within **200ms** of sensor data changes, with beautiful Material Design charts.
    `,
    },
    {
        slug: 'pid-control-drone-stabilization',
        title: 'PID Control for Drone Stabilization',
        excerpt:
            'Implementing a PID controller for drone flight stabilization using Arduino and MPU6050 IMU sensor.',
        date: '2025-03-20',
        readTime: '12 min read',
        tags: ['Robotics', 'PID', 'Arduino', 'Drones'],
        content: `
## What is PID Control?

PID (Proportional-Integral-Derivative) is a control loop mechanism that continuously calculates an error value and applies a correction.

## The Components

- **P (Proportional)**: Reacts to current error
- **I (Integral)**: Reacts to accumulated past errors
- **D (Derivative)**: Predicts future errors

## Hardware Setup

- Arduino Mega 2560
- MPU6050 6-axis IMU
- 4x Brushless motors with ESCs
- Custom 3D-printed frame

## PID Implementation

\`\`\`cpp
float kp = 1.2, ki = 0.05, kd = 0.8;
float previousError = 0, integral = 0;

float computePID(float setpoint, float measured, float dt) {
    float error = setpoint - measured;
    integral += error * dt;
    float derivative = (error - previousError) / dt;
    previousError = error;
    
    return kp * error + ki * integral + kd * derivative;
}
\`\`\`

## Tuning Process

PID tuning is more art than science. I used the Ziegler-Nichols method:

1. Set Ki and Kd to 0
2. Increase Kp until oscillation begins
3. Note the critical gain (Ku) and period (Tu)
4. Calculate Ki and Kd from Ku and Tu

## Results

After tuning, the drone achieved stable hover with less than **2 degrees** of deviation in pitch and roll. Response time to disturbances was under **100ms**.
    `,
    },
];