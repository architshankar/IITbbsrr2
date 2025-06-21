import React, { useState, useEffect } from 'react';

interface LoadingAnimationProps {
    onLoadingComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onLoadingComplete }) => {
    const [animationPhase, setAnimationPhase] = useState<'loading' | 'expanding' | 'complete'>('loading');
    const [loadingProgress, setLoadingProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const progressInterval = setInterval(() => {
            setLoadingProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + 2;
            });
        }, 80);

        // Start the gradient flow animation
        const gradientTimer = setTimeout(() => {
            setAnimationPhase('expanding');
        }, 4000);

        // Complete the animation and notify parent
        const completeTimer = setTimeout(() => {
            setAnimationPhase('complete');
            onLoadingComplete();
        }, 5500);

        return () => {
            clearInterval(progressInterval);
            clearTimeout(gradientTimer);
            clearTimeout(completeTimer);
        };
    }, [onLoadingComplete]);

    return (
        <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-all duration-1000 ${animationPhase === 'complete' ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}>
            {/* Background */}
            <div className={`absolute inset-0 bg-gray-900 transition-all duration-1000 ${animationPhase === 'expanding' ? 'scale-150' : 'scale-100'
                }`} />

            {/* Logo Container */}
            <div className={`relative z-10 transition-all duration-1000 ease-out ${animationPhase === 'expanding' ? 'scale-[20] opacity-0' : 'scale-100 opacity-100'
                }`}>
                {/* Circuit Board SVG - Exact Recreation */}
                <div className="relative">
                    <svg
                        width="400"
                        height="200"
                        viewBox="0 0 400 200"
                        className="drop-shadow-2xl"
                    >
                        {/* Gradient Definitions */}
                        <defs>
                            <linearGradient id="flowingGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                                <stop offset="0%" stopColor="#00f5ff" stopOpacity="0">
                                    <animate
                                        attributeName="stop-opacity"
                                        values="0;1;0"
                                        dur="1s"
                                        repeatCount="indefinite"
                                        begin="0s"
                                    />
                                </stop>
                                <stop offset="25%" stopColor="#00d4ff" stopOpacity="0">
                                    <animate
                                        attributeName="stop-opacity"
                                        values="0;1;0"
                                        dur="1s"
                                        repeatCount="indefinite"
                                        begin="0.25s"
                                    />
                                </stop>
                                <stop offset="50%" stopColor="#0099ff" stopOpacity="0">
                                    <animate
                                        attributeName="stop-opacity"
                                        values="0;1;0"
                                        dur="1s"
                                        repeatCount="indefinite"
                                        begin="0.5s"
                                    />
                                </stop>
                                <stop offset="75%" stopColor="#0066ff" stopOpacity="0">
                                    <animate
                                        attributeName="stop-opacity"
                                        values="0;1;0"
                                        dur="1s"
                                        repeatCount="indefinite"
                                        begin="0.75s"
                                    />
                                </stop>
                                <stop offset="100%" stopColor="#0033ff" stopOpacity="0">
                                    <animate
                                        attributeName="stop-opacity"
                                        values="0;1;0"
                                        dur="1s"
                                        repeatCount="indefinite"
                                        begin="1s"
                                    />
                                </stop>
                            </linearGradient>

                            <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#00f5ff" />
                                <stop offset="100%" stopColor="#00d4ff" />
                            </linearGradient>

                            <linearGradient id="lightBlueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#00d4ff" />
                                <stop offset="100%" stopColor="#0099ff" />
                            </linearGradient>

                            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#0099ff" />
                                <stop offset="100%" stopColor="#0066ff" />
                            </linearGradient>

                            <linearGradient id="darkBlueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#0066ff" />
                                <stop offset="100%" stopColor="#0033ff" />
                            </linearGradient>

                            <filter id="glow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Exact Circuit Board Recreation */}
                        <g strokeWidth="4" fill="none" filter="url(#glow)">

                            {/* Left Side - Cyan Section */}

                            {/* Path 1: Far left curved path with small node */}
                            <path
                                d="M30 170 L30 120 Q30 100 50 100 Q70 100 70 80 L70 60"
                                stroke="url(#flowingGradient)"
                            >
                                <animate
                                    attributeName="stroke-dasharray"
                                    values="0,300;300,0"
                                    dur="2.5s"
                                    begin="0s"
                                    fill="freeze"
                                />
                            </path>
                            <circle cx="30" cy="60" r="8" fill="url(#cyanGradient)">
                                <animate
                                    attributeName="opacity"
                                    values="0;1"
                                    dur="0.3s"
                                    begin="2s"
                                    fill="freeze"
                                />
                            </circle>

                            {/* Path 2: Second from left - tall straight with large node */}
                            <path
                                d="M60 170 L60 40"
                                stroke="url(#flowingGradient)"
                            >
                                <animate
                                    attributeName="stroke-dasharray"
                                    values="0,200;200,0"
                                    dur="2s"
                                    begin="0.3s"
                                    fill="freeze"
                                />
                            </path>
                            <circle cx="60" cy="30" r="14" fill="url(#cyanGradient)">
                                <animate
                                    attributeName="opacity"
                                    values="0;1"
                                    dur="0.3s"
                                    begin="2.3s"
                                    fill="freeze"
                                />
                            </circle>

                            {/* Path 3: Third path - straight with medium node */}
                            <path
                                d="M90 170 L90 70"
                                stroke="url(#flowingGradient)"
                            >
                                <animate
                                    attributeName="stroke-dasharray"
                                    values="0,150;150,0"
                                    dur="1.8s"
                                    begin="0.6s"
                                    fill="freeze"
                                />
                            </path>
                            <circle cx="90" cy="60" r="12" fill="url(#lightBlueGradient)">
                                <animate
                                    attributeName="opacity"
                                    values="0;1"
                                    dur="0.3s"
                                    begin="2.4s"
                                    fill="freeze"
                                />
                            </circle>

                            {/* Path 4: Branching path with small node */}
                            <path
                                d="M120 170 L120 130 L100 110 L100 90"
                                stroke="url(#flowingGradient)"
                            >
                                <animate
                                    attributeName="stroke-dasharray"
                                    values="0,200;200,0"
                                    dur="2.2s"
                                    begin="0.9s"
                                    fill="freeze"
                                />
                            </path>
                            <circle cx="100" cy="80" r="6" fill="url(#lightBlueGradient)">
                                <animate
                                    attributeName="opacity"
                                    values="0;1"
                                    dur="0.3s"
                                    begin="3.1s"
                                    fill="freeze"
                                />
                            </circle>

                            {/* Path 5: Lower branch connection */}
                            <path
                                d="M50 170 L50 140 L70 120 L90 120"
                                stroke="url(#flowingGradient)"
                            >
                                <animate
                                    attributeName="stroke-dasharray"
                                    values="0,180;180,0"
                                    dur="2s"
                                    begin="1.2s"
                                    fill="freeze"
                                />
                            </path>
                            <circle cx="50" cy="130" r="8" fill="url(#cyanGradient)">
                                <animate
                                    attributeName="opacity"
                                    values="0;1"
                                    dur="0.3s"
                                    begin="3.2s"
                                    fill="freeze"
                                />
                            </circle>

                            {/* Path 6: Bottom node connection */}
                            <circle cx="90" cy="150" r="10" fill="url(#lightBlueGradient)">
                                <animate
                                    attributeName="opacity"
                                    values="0;1"
                                    dur="0.3s"
                                    begin="1s"
                                    fill="freeze"
                                />
                            </circle>

                            {/* Center-Left Transition */}

                            {/* Path 7: Diagonal connector */}
                            <path
                                d="M150 170 L150 120 L130 100 L130 80"
                                stroke="url(#flowingGradient)"
                            >
                                <animate
                                    attributeName="stroke-dasharray"
                                    values="0,200;200,0"
                                    dur="2.3s"
                                    begin="1.5s"
                                    fill="freeze"
                                />
                            </path>
                            <circle cx="130" cy="70" r="7" fill="url(#blueGradient)">
                                <animate
                                    attributeName="opacity"
                                    values="0;1"
                                    dur="0.3s"
                                    begin="3.8s"
                                    fill="freeze"
                                />
                            </circle>

                            {/* Path 8: Center diagonal */}
                            <path
                                d="M180 170 L180 100 L160 80 L160 50"
                                stroke="url(#flowingGradient)"
                            >
                                <animate
                                    attributeName="stroke-dasharray"
                                    values="0,250;250,0"
                                    dur="2.8s"
                                    begin="1.8s"
                                    fill="freeze"
                                />
                            </path>
                            <circle cx="160" cy="40" r="9" fill="url(#blueGradient)">
                                <animate
                                    attributeName="opacity"
                                    values="0;1"
                                    dur="0.3s"
                                    begin="4.6s"
                                    fill="freeze"
                                />
                            </circle>

                            {/* Right Side - Blue Section */}

                            {/* Path 9: Right side curved path */}
                            <path
                                d="M210 170 L210 130 L230 110 L250 110 L270 90 L270 60"
                                stroke="url(#flowingGradient)"
                            >
                                <animate
                                    attributeName="stroke-dasharray"
                                    values="0,300;300,0"
                                    dur="3s"
                                    begin="2.1s"
                                    fill="freeze"
                                />
                            </path>
                            <circle cx="270" cy="50" r="11" fill="url(#blueGradient)">
                                <animate
                                    attributeName="opacity"
                                    values="0;1"
                                    dur="0.3s"
                                    begin="5.1s"
                                    fill="freeze"
                                />
                            </circle>

                            {/* Path 10: Tall right path */}
                            <path
                                d="M240 170 L240 40"
                                stroke="url(#flowingGradient)"
                            >
                                <animate
                                    attributeName="stroke-dasharray"
                                    values="0,200;200,0"
                                    dur="2.2s"
                                    begin="2.4s"
                                    fill="freeze"
                                />
                            </path>
                            <circle cx="240" cy="30" r="16" fill="url(#darkBlueGradient)">
                                <animate
                                    attributeName="opacity"
                                    values="0;1"
                                    dur="0.3s"
                                    begin="4.6s"
                                    fill="freeze"
                                />
                            </circle>

                            {/* Path 11: Right side medium path */}
                            <path
                                d="M300 170 L300 80"
                                stroke="url(#flowingGradient)"
                            >
                                <animate
                                    attributeName="stroke-dasharray"
                                    values="0,150;150,0"
                                    dur="1.8s"
                                    begin="2.7s"
                                    fill="freeze"
                                />
                            </path>
                            <circle cx="300" cy="70" r="13" fill="url(#darkBlueGradient)">
                                <animate
                                    attributeName="opacity"
                                    values="0;1"
                                    dur="0.3s"
                                    begin="4.5s"
                                    fill="freeze"
                                />
                            </circle>

                            {/* Path 12: Far right curved path */}
                            <path
                                d="M330 170 L330 120 L310 100 L310 80 L290 60 L290 40"
                                stroke="url(#flowingGradient)"
                            >
                                <animate
                                    attributeName="stroke-dasharray"
                                    values="0,280;280,0"
                                    dur="2.8s"
                                    begin="3s"
                                    fill="freeze"
                                />
                            </path>
                            <circle cx="290" cy="30" r="12" fill="url(#darkBlueGradient)">
                                <animate
                                    attributeName="opacity"
                                    values="0;1"
                                    dur="0.3s"
                                    begin="5.8s"
                                    fill="freeze"
                                />
                            </circle>

                            {/* Path 13: Right side branching */}
                            <path
                                d="M270 170 L270 140 L290 120 L310 120"
                                stroke="url(#flowingGradient)"
                            >
                                <animate
                                    attributeName="stroke-dasharray"
                                    values="0,180;180,0"
                                    dur="2s"
                                    begin="3.3s"
                                    fill="freeze"
                                />
                            </path>
                            <circle cx="270" cy="130" r="8" fill="url(#blueGradient)">
                                <animate
                                    attributeName="opacity"
                                    values="0;1"
                                    dur="0.3s"
                                    begin="5.3s"
                                    fill="freeze"
                                />
                            </circle>

                            {/* Path 14: Bottom right nodes */}
                            <circle cx="300" cy="150" r="10" fill="url(#darkBlueGradient)">
                                <animate
                                    attributeName="opacity"
                                    values="0;1"
                                    dur="0.3s"
                                    begin="2.7s"
                                    fill="freeze"
                                />
                            </circle>

                            {/* Path 15: Final right curved path */}
                            <path
                                d="M360 170 Q360 150 340 130 Q320 110 320 90 L320 70"
                                stroke="url(#flowingGradient)"
                            >
                                <animate
                                    attributeName="stroke-dasharray"
                                    values="0,250;250,0"
                                    dur="2.5s"
                                    begin="3.6s"
                                    fill="freeze"
                                />
                            </path>
                            <circle cx="320" cy="60" r="11" fill="url(#darkBlueGradient)">
                                <animate
                                    attributeName="opacity"
                                    values="0;1"
                                    dur="0.3s"
                                    begin="6.1s"
                                    fill="freeze"
                                />
                            </circle>

                        </g>
                    </svg>

                    {/* Company Name */}
                    <div className="mt-12 text-center">
                        <h1 className="text-5xl font-bold text-white mb-3 tracking-wider">
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                                InLighn Tech
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 font-light tracking-wide">
                            Experience, Learn, Thrive.
                        </p>
                    </div>

                    {/* Floating particles */}
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(25)].map((_, i) => {
                            const col = i % 5;
                            const row = Math.floor(i / 5);
                            const baseLeft = 20 * col; // 0%, 20%, 40%, ...
                            const baseTop = 20 * row;  // 0%, 20%, 40%, ...

                            return (
                                <div
                                    key={i}
                                    className={`absolute w-1 h-1 rounded-full opacity-60 ${i < 8 ? 'bg-cyan-400' : i < 16 ? 'bg-blue-400' : 'bg-blue-600'
                                        }`}
                                    style={{
                                        left: `calc(${baseLeft}% + ${Math.random() * 5 - 2.5}px)`, // small variation
                                        top: `calc(${baseTop}% + ${Math.random() * 5 - 2.5}px)`,
                                        animation: `float ${3 + Math.random()}s ease-in-out infinite`,
                                        animationDelay: `${Math.random()}s`
                                    }}
                                />
                            );
                        })}
                    </div>

                </div>
            </div>

            {/* Loading Progress Bar - Fixed positioning and visibility */}
            <div className={`fixed bottom-16 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1000 ${animationPhase === 'complete' ? 'opacity-0' : 'opacity-100'
                }`}>
                <div className="flex flex-col items-center space-y-4">


                    {/* Progress Bar Container */}
                    <div className="w-80 h-2 bg-gray-800 rounded-full border border-gray-700 shadow-lg overflow-hidden">
                        {/* Progress Bar Fill */}
                        <div
                            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 rounded-full transition-all duration-300 ease-out shadow-lg"
                            style={{
                                width: `${loadingProgress}%`,
                                boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
                            }}
                        >
                            {/* Animated shine effect */}
                            <div className="h-full w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse" />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default LoadingAnimation;