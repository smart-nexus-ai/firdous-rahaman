import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Firdous Rahaman - IoT & Embedded Systems Developer';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#020617',
                    backgroundImage:
                        'radial-gradient(circle at 25% 25%, rgba(14, 165, 233, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
                }}
            >
                {/* Grid pattern overlay */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage:
                            'linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)',
                        backgroundSize: '64px 64px',
                        display: 'flex',
                    }}
                />

                {/* Content container */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '60px',
                        position: 'relative',
                    }}
                >
                    {/* Status badge */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '8px 20px',
                            borderRadius: '9999px',
                            backgroundColor: 'rgba(15, 23, 42, 0.8)',
                            border: '1px solid rgba(51, 65, 85, 0.5)',
                            marginBottom: '32px',
                        }}
                    >
                        <div
                            style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                backgroundColor: '#22c55e',
                                display: 'flex',
                            }}
                        />
                        <span
                            style={{
                                fontSize: '16px',
                                color: '#94a3b8',
                                fontFamily: 'monospace',
                            }}
                        >
                            Available for IoT Projects
                        </span>
                    </div>

                    {/* Name */}
                    <h1
                        style={{
                            fontSize: '72px',
                            fontWeight: 800,
                            color: '#ffffff',
                            margin: '0 0 8px 0',
                            fontFamily: 'monospace',
                            textAlign: 'center',
                            display: 'flex',
                        }}
                    >
                        Firdous Rahaman
                    </h1>

                    {/* Role */}
                    <p
                        style={{
                            fontSize: '32px',
                            color: '#0ea5e9',
                            margin: '0 0 24px 0',
                            fontFamily: 'monospace',
                            textAlign: 'center',
                            display: 'flex',
                        }}
                    >
                        IoT & Embedded Systems Developer
                    </p>

                    {/* Description */}
                    <p
                        style={{
                            fontSize: '20px',
                            color: '#94a3b8',
                            margin: '0 0 40px 0',
                            textAlign: 'center',
                            maxWidth: '800px',
                            lineHeight: 1.5,
                            display: 'flex',
                        }}
                    >
                        Building smart IoT solutions with ESP32, ML & Firebase
                    </p>

                    {/* Tech tags */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '12px',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                        }}
                    >
                        {['ESP32', 'Arduino', 'Python', 'TensorFlow', 'Firebase', 'Kotlin'].map(
                            (tech) => (
                                <div
                                    key={tech}
                                    style={{
                                        display: 'flex',
                                        padding: '8px 20px',
                                        borderRadius: '8px',
                                        backgroundColor: 'rgba(14, 165, 233, 0.1)',
                                        border: '1px solid rgba(14, 165, 233, 0.3)',
                                        color: '#38bdf8',
                                        fontSize: '16px',
                                        fontFamily: 'monospace',
                                    }}
                                >
                                    {tech}
                                </div>
                            )
                        )}
                    </div>

                    {/* CTA */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginTop: '40px',
                            padding: '12px 32px',
                            borderRadius: '12px',
                            backgroundColor: '#0ea5e9',
                            color: '#ffffff',
                            fontSize: '18px',
                            fontWeight: 700,
                            fontFamily: 'monospace',
                        }}
                    >
                        View My Projects →
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        color: '#475569',
                        fontSize: '14px',
                        fontFamily: 'monospace',
                    }}
                >
                    <span>firdous-rahaman.vercel.app</span>
                    <span>•</span>
                    <span>Portfolio</span>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
