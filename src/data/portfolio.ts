import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
    personal: {
        name: 'MA Sayeed',
        title: 'AI Engineer & Data Scientist',
        subtitle: 'Vibe Coder • Stock Trader • AI Engineer & Data Scientist',
        bio: "I believe skills create freedom. Currently building projects while mastering Python, HTML, CSS, and Java, and writing my own trading strategies with Pine Script on TradingView. Passionate about artificial intelligence, prompt engineering, financial markets, and solving real-world problems through technology. Every day is another step toward becoming the AI engineer and data scientist I want to be.",
        avatar: '/about/sami-profile.jpg',
        location: 'Dhaka, Bangladesh',
        email: 'sayeed3625525@gmail.com',
        resumeUrl: '/resume',
        languages: [
            { name: 'Bengali', level: 'Native' },
            { name: 'English', level: 'Professional' },
        ],
        socialLinks: [
            {
                platform: 'GitHub',
                url: 'https://github.com/savior00099',
                icon: 'github',
                username: 'savior00099',
            },
            {
                platform: 'Instagram',
                url: 'https://www.instagram.com/sam_oazain',
                icon: 'instagram',
                username: 'sam_oazain',
            },
            {
                platform: 'Discord',
                url: '#',
                icon: 'discord',
                username: 'sami_d.ghost',
            },
            {
                platform: 'LinkedIn',
                url: 'https://linkedin.com/in/mohammad-abu-sayeed-53aa66420',
                icon: 'linkedin',
                username: 'mohammad-abu-sayeed-53aa66420',
            },
        ],
    },
    projects: [
        {
            id: 'project-1',
            slug: 'ai-animation',
            title: 'AI Animation',
            description: 'An AI-assisted animation showcase blending prompt-generated visuals with hand-built motion design.',
            longDescription: 'A creative experiment combining AI-generated assets with custom CSS/JS animation techniques. Prompts were iterated and refined to produce visuals, which were then choreographed into a smooth animated sequence on the web.',
            techStack: ['HTML', 'CSS', 'JavaScript'],
            tools: ['VS Code', 'ChatGPT'],
            status: 'completed',
            repoUrl: 'https://github.com/savior00099',
            demoUrl: '#',
            startDate: '2026-02-01',
            role: 'Developer',
            customTimeline: '2026',
            team: 'Personal Project',
            highlights: ['AI-assisted visual generation', 'Custom keyframe choreography', 'Prompt-to-motion workflow'],
            category: 'Creative Tech',
            features: [
                {
                    title: 'Core Features',
                    items: [
                        '**Prompt-Driven Visuals**: Assets shaped through iterative prompt engineering.',
                        '**Motion Choreography**: Hand-tuned CSS/JS animation timing and easing.',
                    ],
                },
            ],
        },
        {
            id: 'project-2',
            slug: 'todo-list-website',
            title: 'To-Do List Website',
            description: 'A clean, responsive to-do list web app for organizing daily tasks.',
            longDescription: 'A simple but polished to-do list application built while learning core front-end fundamentals. Users can add, complete, and remove tasks in a distraction-free interface designed to be fast and easy to use on any device.',
            techStack: ['HTML', 'CSS', 'JavaScript'],
            tools: ['VS Code'],
            status: 'completed',
            repoUrl: 'https://github.com/savior00099',
            demoUrl: '#',
            startDate: '2026-03-01',
            role: 'Developer',
            customTimeline: '2026',
            team: 'Personal Project',
            highlights: ['Add / complete / delete tasks', 'Responsive layout', 'Clean, distraction-free UI'],
            category: 'Web Development',
            features: [
                {
                    title: 'Core Features',
                    items: [
                        '**Task Management**: Quickly add, mark complete, and remove daily tasks.',
                        '**Responsive Design**: Works smoothly across desktop and mobile screens.',
                        '**Simple, Fast UI**: Minimal interface with no unnecessary distractions.',
                    ],
                },
            ],
        },
        {
            id: 'project-3',
            slug: 'valentines-website',
            title: "Valentine's Website",
            description: 'A creatively animated Valentine-themed website built to practice UI motion and layout design.',
            longDescription: 'An expressive, animation-heavy landing page built to practice front-end styling and motion design. Focused on smooth transitions, playful interactivity, and a polished, romantic visual presentation.',
            techStack: ['HTML', 'CSS', 'JavaScript'],
            tools: ['VS Code'],
            status: 'completed',
            repoUrl: 'https://github.com/savior00099',
            demoUrl: '#',
            startDate: '2026-02-14',
            role: 'Developer',
            customTimeline: '2026',
            team: 'Personal Project',
            highlights: ['Custom CSS animations', 'Interactive UI elements', 'Playful, expressive design'],
            category: 'Creative Tech',
            features: [
                {
                    title: 'Core Features',
                    items: [
                        '**Animated Interactions**: Smooth CSS/JS-driven transitions throughout the page.',
                        '**Custom Styling**: Hand-crafted layout and visual design.',
                    ],
                },
            ],
        },
        {
            id: 'project-4',
            slug: 'birthday-wish-website',
            title: 'Birthday Wish Website',
            description: 'An animated birthday greeting website with playful interactions and celebratory visuals.',
            longDescription: 'A festive, animation-driven web page built to send a personalized birthday greeting. Focused on delightful micro-interactions, confetti-style effects, and a warm, celebratory feel.',
            techStack: ['HTML', 'CSS', 'JavaScript'],
            tools: ['VS Code'],
            status: 'completed',
            repoUrl: 'https://github.com/savior00099',
            demoUrl: '#',
            startDate: '2026-03-20',
            role: 'Developer',
            customTimeline: '2026',
            team: 'Personal Project',
            highlights: ['Celebratory animations', 'Custom greeting layout', 'Lightweight, fast-loading page'],
            category: 'Creative Tech',
            features: [
                {
                    title: 'Core Features',
                    items: [
                        '**Celebration Effects**: Confetti-style and reveal animations built with CSS/JS.',
                        '**Personalized Layout**: Custom greeting content and design.',
                    ],
                },
            ],
        },
        {
            id: 'project-5',
            slug: 'creative-portfolio-website',
            title: 'Creative Portfolio Website',
            description: 'This portfolio — a modern, animated personal site with 3D elements and scroll-driven storytelling.',
            longDescription: 'A modern, animated portfolio built with Next.js, TypeScript, and Tailwind CSS, featuring 3D elements, scroll-triggered motion, and a fully custom design system engineered for performance.',
            techStack: ['HTML', 'CSS', 'JavaScript', 'React'],
            tools: ['VS Code', 'Git', 'GitHub', 'Vercel'],
            status: 'ongoing',
            repoUrl: 'https://github.com/savior00099',
            demoUrl: '#',
            startDate: '2026-05-01',
            role: 'Developer',
            customTimeline: '2026 - Present',
            team: 'Personal Project',
            highlights: ['3D & scroll-driven animation', 'Custom design system', 'Deployed on Vercel'],
            category: 'Web Development',
            features: [
                {
                    title: 'Core Features',
                    items: [
                        '**Scroll Storytelling**: Motion-driven sections that reveal content as you scroll.',
                        '**Modern Stack**: Built and deployed using an up-to-date web development workflow.',
                    ],
                },
            ],
        },
        {
            id: 'project-6',
            slug: 'trading-bot',
            title: 'Trading Bot',
            description: 'An automated trading assistant built to monitor markets and act on rule-based strategies.',
            longDescription: 'An automation project focused on monitoring price action and executing predefined rules, built while learning how strategy logic translates into automated decision-making.',
            techStack: ['Python', 'Pine Script'],
            tools: ['TradingView', 'VS Code'],
            status: 'ongoing',
            repoUrl: 'https://github.com/savior00099',
            demoUrl: '#',
            startDate: '2026-05-15',
            role: 'Developer',
            customTimeline: '2026 - Present',
            team: 'Personal Project',
            highlights: ['Rule-based automated logic', 'Market monitoring', 'Strategy-driven decision making'],
            category: 'Trading & Automation',
            features: [
                {
                    title: 'Core Features',
                    items: [
                        '**Automated Logic**: Rule-based decisions built from tested strategy conditions.',
                        '**Market Monitoring**: Continuously tracks price action for trade signals.',
                    ],
                },
            ],
        },
        {
            id: 'project-7',
            slug: 'trading-script',
            title: 'Trading Script',
            description: 'A custom Pine Script indicator and strategy suite built for TradingView.',
            longDescription: 'A collection of custom Pine Script indicators and strategy scripts developed on TradingView, used to visualize signals, backtest ideas, and refine a personal trading approach.',
            techStack: ['Pine Script'],
            tools: ['TradingView'],
            status: 'ongoing',
            repoUrl: 'https://github.com/savior00099',
            demoUrl: '#',
            startDate: '2026-04-10',
            role: 'Developer',
            customTimeline: '2026 - Present',
            team: 'Personal Project',
            highlights: ['Custom Pine Script indicators', 'Backtested strategy logic', 'TradingView integration'],
            category: 'Trading & Automation',
            features: [
                {
                    title: 'Core Features',
                    items: [
                        '**Custom Indicators**: Pine Script-based signal and overlay tools.',
                        '**Strategy Backtesting**: Logic tested against historical market data.',
                    ],
                },
            ],
        },
        {
            id: 'project-8',
            slug: 'animation-clock',
            title: 'Animation Clock',
            description: 'A front-end showcase experimenting with CSS/JS animations built around a live animated clock.',
            longDescription: 'A dedicated playground for exploring motion on the web — a fully animated analog/digital clock built to sharpen skills around keyframes, transitions, and JavaScript-driven interactivity.',
            techStack: ['HTML', 'CSS', 'JavaScript'],
            tools: ['VS Code'],
            status: 'completed',
            repoUrl: 'https://github.com/savior00099',
            demoUrl: '#',
            startDate: '2026-05-01',
            role: 'Developer',
            customTimeline: '2026',
            team: 'Personal Project',
            highlights: ['Keyframe animation experiments', 'Real-time JS-driven clock logic', 'Interactive motion design'],
            category: 'Front-End',
            features: [
                {
                    title: 'Core Features',
                    items: [
                        '**Live Clock Logic**: Real-time updates driven by JavaScript.',
                        '**Motion Experiments**: A range of CSS keyframe and JS animation techniques.',
                    ],
                },
            ],
        },
        {
            id: 'project-9',
            slug: 'pine-script-projects',
            title: 'Pine Script Projects',
            description: 'A set of smaller Pine Script experiments for TradingView.',
            longDescription: 'A rotating collection of smaller Pine Script scripts and overlays, used to explore new TradingView features and signal ideas.',
            techStack: ['Pine Script'],
            tools: ['TradingView'],
            status: 'ongoing',
            startDate: '2026-04-01',
            role: 'Developer',
            customTimeline: '2026 - Present',
            team: 'Personal Project',
            category: 'Trading & Automation',
        },
        {
            id: 'project-10',
            slug: 'trading-strategies',
            title: 'Trading Strategies',
            description: 'Documented, rule-based trading strategies built and tested on TradingView.',
            longDescription: 'A set of personally designed trading strategies, each documented with entry/exit rules and tested against historical charts.',
            techStack: ['Pine Script'],
            tools: ['TradingView'],
            status: 'ongoing',
            startDate: '2026-03-15',
            role: 'Strategy Developer',
            customTimeline: '2026 - Present',
            team: 'Personal Project',
            category: 'Trading & Automation',
        },
        {
            id: 'project-11',
            slug: 'custom-prompt-engineering',
            title: 'Custom Prompt Engineering',
            description: 'A library of refined prompts for coding, writing, and image-generation workflows.',
            longDescription: 'An ongoing collection of hand-crafted and iterated prompts used to get more reliable results from AI tools across coding, content, and creative image generation.',
            techStack: ['Prompt Engineering'],
            tools: ['ChatGPT'],
            status: 'ongoing',
            startDate: '2026-02-01',
            role: 'Prompt Engineer',
            customTimeline: '2026 - Present',
            team: 'Personal Project',
            category: 'Applied AI',
        },
        {
            id: 'project-12',
            slug: 'calculator',
            title: 'Calculator',
            description: 'A lightweight, responsive calculator web app.',
            longDescription: 'A functional calculator built with vanilla JavaScript to practice DOM manipulation, event handling, and clean UI logic.',
            techStack: ['HTML', 'CSS', 'JavaScript'],
            tools: ['VS Code'],
            status: 'completed',
            startDate: '2026-03-05',
            role: 'Developer',
            customTimeline: '2026',
            team: 'Personal Project',
            category: 'Web Development',
        },
        {
            id: 'project-13',
            slug: 'trading-indicators',
            title: 'Trading Indicators',
            description: 'Custom Pine Script indicators for chart analysis on TradingView.',
            longDescription: 'A set of custom technical indicators built in Pine Script to visualize trend, momentum, and volatility directly on TradingView charts.',
            techStack: ['Pine Script'],
            tools: ['TradingView'],
            status: 'ongoing',
            startDate: '2026-04-20',
            role: 'Developer',
            customTimeline: '2026 - Present',
            team: 'Personal Project',
            category: 'Trading & Automation',
        },
        {
            id: 'project-14',
            slug: 'experimental-ai-projects',
            title: 'Experimental AI Projects',
            description: 'Small experiments exploring AI tools, automation, and applied machine learning ideas.',
            longDescription: 'A sandbox of small, exploratory builds used to learn AI fundamentals — testing prompts, simple automations, and early machine learning concepts.',
            techStack: ['Python', 'Prompt Engineering'],
            tools: ['ChatGPT'],
            status: 'ongoing',
            startDate: '2026-05-01',
            role: 'Developer',
            customTimeline: '2026 - Present',
            team: 'Personal Project',
            category: 'Applied AI',
        },
    ],
    experiences: [
        // Professional Experience
        {
            id: 'prof-1',
            company: 'Self-Directed / Independent',
            position: 'Trading Analyst',
            description: 'Studying price action across forex and stock markets, applying Smart Money Concepts (Market Structure, Order Blocks, Fair Value Gaps, Liquidity) and backtesting strategies on TradingView.',
            responsibilities: [
                'Reading and annotating candlestick charts for structure shifts and liquidity zones',
                'Writing and refining Pine Script indicators and strategy scripts',
                'Backtesting strategies and tracking key performance stats (win rate, drawdown, profit factor)',
            ],
            skills: ['Technical Analysis', 'Pine Script', 'Risk Management', 'TradingView'],
            startDate: '2025-01-01',
            isOngoing: true,
            type: 'self-employed',
        },
        {
            id: 'prof-2',
            company: 'Self-Directed / Independent',
            position: 'Research & Market Analysis',
            description: 'Ongoing research into financial markets, macro trends, and emerging AI tools — turning findings into practical trading and project decisions.',
            responsibilities: [
                'Tracking market news and macro events relevant to active positions',
                'Comparing strategies and tools, then documenting what actually works',
                'Applying research findings to real trades and personal projects',
            ],
            skills: ['Market Research', 'Analytical Thinking', 'Documentation'],
            startDate: '2025-01-01',
            isOngoing: true,
            type: 'self-employed',
        },
        {
            id: 'prof-3',
            company: 'Self-Directed / Independent',
            position: 'Data Entry',
            description: 'Hands-on experience organizing, structuring, and maintaining accurate data sets — building the discipline and attention to detail that carries over into analytical work.',
            responsibilities: [
                'Structuring and cleaning data for accuracy and consistency',
                'Maintaining organized records across spreadsheets and tools',
            ],
            skills: ['Excel', 'Google Sheets', 'Attention to Detail'],
            startDate: '2024-06-01',
            isOngoing: true,
            type: 'self-employed',
        },
        {
            id: 'prof-4',
            company: 'Self-Directed Learning',
            position: 'Digital Learning & Self-Development',
            description: 'A continuous, self-directed journey into programming and applied AI — learning by building, breaking, and rebuilding real projects, with a focus on prompt engineering and TradingView development.',
            responsibilities: [
                'Learning AI fundamentals and applied prompt engineering',
                'Building and testing TradingView strategies and Pine Script indicators',
                'Collaborating on projects with other developers',
                'Research-based learning across programming, ICT, and financial markets',
                'Building small projects using AI-assisted development workflows',
                'Practicing problem-solving under time pressure and shifting requirements',
            ],
            skills: ['Python', 'JavaScript', 'HTML', 'CSS', 'Pine Script', 'Prompt Engineering', 'Problem Solving'],
            startDate: '2024-07-01',
            isOngoing: true,
            type: 'self-employed',
            keyLearnings: [
                'How to turn a rough trading idea into a tested Pine Script strategy',
                'How to write and refine prompts for reliable AI output',
                'How to stay effective and solve problems under pressure',
            ],
        },
        // Leadership
        {
            id: 'lead-1',
            company: 'Kazi Azim Uddin College & University',
            position: 'Leadership Skills',
            description: 'Founded and led a small coding group at college, guiding peers through the basics of programming and problem-solving.',
            responsibilities: [
                'Organizing and leading peer coding sessions',
                'Motivating classmates to start building their own small projects',
            ],
            skills: ['Leadership', 'Mentoring', 'Communication'],
            startDate: '2024-01-01',
            isOngoing: true,
            type: 'volunteer',
        },
        {
            id: 'lead-2',
            company: 'Personal Projects & Trading',
            position: 'Strategic Planning',
            description: 'Planning long-term learning and project roadmaps — from choosing what to learn next to structuring trading strategies before execution.',
            responsibilities: [
                'Setting milestones for AI engineering and web development goals',
                'Planning trade setups and strategy rules ahead of execution',
            ],
            skills: ['Strategic Thinking', 'Planning', 'Goal Setting'],
            startDate: '2025-01-01',
            isOngoing: true,
            type: 'self-employed',
        },
        {
            id: 'lead-3',
            company: 'Dark Soul',
            position: 'Team Coordination',
            description: 'Collaborative member of Dark Soul, a 30+ member team, coordinating with others on shared projects and learning goals.',
            responsibilities: [
                'Working with a 30+ member team on collaborative builds',
                'Sharing knowledge on trading strategy and web development',
                'Supporting teammates and coordinating on shared goals',
            ],
            skills: ['Team Collaboration', 'Coordination', 'Pine Script'],
            startDate: '2025-06-01',
            isOngoing: true,
            type: 'freelance',
        },
        // Certifications & Development
        {
            id: 'cert-1',
            company: 'Coming Soon',
            position: 'Certifications & Professional Development',
            description: "Actively working toward my first certifications in AI, data science, and software development. This space will be updated as new credentials are earned.",
            skills: ['Coming Soon'],
            startDate: '2026-01-01',
            isOngoing: true,
            type: 'self-employed',
        },
        // Volunteer Experience
        {
            id: 'vol-1',
            company: 'Bangladesh Red Crescent Society',
            position: 'Member — Gazipur Unit',
            description: 'Active member of the Bangladesh Red Crescent Society, Gazipur Unit, contributing to community and humanitarian initiatives.',
            responsibilities: [
                'Participating in community service and humanitarian activities',
                'Working as part of a coordinated volunteer team',
            ],
            skills: ['Team Collaboration', 'Adaptability', 'Community Service'],
            startDate: '2025-01-01',
            isOngoing: true,
            type: 'volunteer',
            location: 'Gazipur, Bangladesh',
            logo: '/logos/red-crescent-society.png',
            galleryImages: ['/experience/red-crescent-gazipur.jpg'],
        },
    ],
    education: [
        {
            id: 'edu-1',
            institution: 'Kazi Azim Uddin College & University',
            degree: 'Higher Secondary Certificate (HSC)',
            major: 'Science',
            startDate: '2024-01-01',
            endDate: '2025-12-31',
            isOngoing: false,
            gpa: '3.00',
            activities: [
                'Developed a strong analytical foundation in Mathematics, Physics, and ICT',
            ],
            achievements: [
                'Shaped a logical approach to problem-solving through the Science major',
            ],
        },
        {
            id: 'edu-2',
            institution: 'Valum Ataur Rahman Khan School & College',
            degree: 'Secondary School Certificate (SSC)',
            major: 'Science',
            startDate: '2022-01-01',
            endDate: '2023-12-31',
            isOngoing: false,
            gpa: '4.61',
            activities: [
                'Developed a strong foundation in Mathematics, Physics, and ICT',
            ],
            achievements: [
                'GPA 4.61 — strong foundation across Science subjects',
            ],
        },
    ],
    achievements: [
        // Flagship / high-value certifications
        {
            id: 'cert-aws-cloud-practitioner',
            title: 'AWS Cloud Practitioner Essentials',
            issuer: 'Amazon Web Services (AWS)',
            date: '2026-08-17',
            description: 'Completion certificate covering foundational AWS Cloud concepts, core services, security, architecture, and pricing.',
            image: '/certificate/aws-cloud-practitioner-essentials.pdf',
            type: 'Completion Certificate',
            category: 'certification',
        },
        {
            id: 'cert-freeacademy-advanced-prompt-engineering',
            title: 'Advanced Prompt Engineering',
            issuer: 'FreeAcademy.ai',
            date: '2026-08-16',
            description: 'Verified, exam-earned credential covering advanced prompt engineering techniques across 10 lessons.',
            image: '/certificate/advanced-prompt-engineering-freeacademy.pdf',
            credentialUrl: 'https://freeacademy.ai/verify/FA-2026-APE-BRLDSN',
            credentialId: 'FA-2026-APE-BRLDSN',
            type: 'Verified Credential',
            category: 'certification',
        },
        {
            id: 'cert-freeacademy-prompt-engineering',
            title: 'Prompt Engineering',
            issuer: 'FreeAcademy.ai',
            date: '2026-08-16',
            description: 'Verified, exam-earned credential covering prompt engineering fundamentals across 29 lessons.',
            image: '/certificate/prompt-engineering-freeacademy.pdf',
            credentialUrl: 'https://freeacademy.ai/verify/FA-2026-PE-F1M3ZV',
            credentialId: 'FA-2026-PE-F1M3ZV',
            type: 'Verified Credential',
            category: 'certification',
        },
        {
            id: 'cert-nasa-open-science-essentials',
            title: "NASA's Open Science Essentials",
            issuer: 'NASA — Science Mission Directorate',
            date: '2026-08-13',
            description: "Certificate of Achievement for completing NASA's Open Science Essentials curriculum and contributing to the Open Science community.",
            image: '/certificate/nasa-open-science-essentials.pdf',
            type: 'Certificate of Achievement',
            category: 'certification',
        },
        {
            id: 'cert-nasa-open-science-101',
            title: "NASA's Open Science 101",
            issuer: 'NASA — Science Mission Directorate',
            date: '2026-08-13',
            description: "Certificate of Achievement for completing NASA's Open Science 101 curriculum and contributing to the Open Science community.",
            image: '/certificate/nasa-open-science-101.pdf',
            type: 'Certificate of Achievement',
            category: 'certification',
        },
        {
            id: 'cert-gemini-certified-educator',
            title: 'Gemini Certified Educator',
            issuer: 'Google for Education',
            date: '2026-07-19',
            description: 'Certified for demonstrating the knowledge, skills, and basic competencies needed to use Google AI in education.',
            image: '/certificate/gemini-certified-educator.pdf',
            credentialUrl: 'https://www.credential.net/d951b32a-d811-4a25-ad31-47f807910198',
            credentialId: 'd951b32a-d811-4a25-ad31-47f807910198',
            type: 'Educator Certification',
            category: 'certification',
        },
        {
            id: 'cert-gemini-certified-faculty',
            title: 'Gemini Certified Faculty',
            issuer: 'Google for Education',
            date: '2026-07-19',
            description: 'Certified for demonstrating the knowledge, skills, and basic competencies needed to use Google AI in higher education.',
            image: '/certificate/gemini-certified-faculty.pdf',
            credentialUrl: 'https://www.credential.net/3d127c85-6b5e-4fbb-bff4-fb9cb0473cb6',
            credentialId: '3d127c85-6b5e-4fbb-bff4-fb9cb0473cb6',
            type: 'Faculty Certification',
            category: 'certification',
        },
        {
            id: 'cert-gemini-certified-university-student',
            title: 'Gemini Certified Student — University',
            issuer: 'Google for Education',
            date: '2026-07-19',
            description: 'Certified for demonstrating the knowledge, skills, and basic competencies needed to use Google AI, at the university level.',
            image: '/certificate/gemini-certified-university-student.pdf',
            credentialUrl: 'https://www.credential.net/70833952-4e9d-4278-8895-9c4c1afe3afa',
            credentialId: '70833952-4e9d-4278-8895-9c4c1afe3afa',
            type: 'Student Certification',
            category: 'certification',
        },
        {
            id: 'cert-un-sdg-data-statistics',
            title: 'Understanding Data and Statistics Better — for More Effective SDG Decision Making',
            issuer: 'United Nations (UNITAR / DESA / ECA)',
            date: '2026-07-20',
            description: 'Massive Open Online Course certificate on using data and statistics for more effective Sustainable Development Goal decision making.',
            image: '/certificate/un-sdg-data-statistics.pdf',
            type: 'MOOC Certificate',
            category: 'certification',
        },
        {
            id: 'cert-unicef-sbc-theory-practice',
            title: 'Social and Behaviour Change (SBC) Theory and Practice',
            issuer: 'UNICEF',
            date: '2026-07-20',
            description: 'Certificate of completion for Social and Behaviour Change (SBC) Theory and Practice, issued via the UNICEF Agora platform.',
            image: '/certificate/unicef-social-behaviour-change.pdf',
            credentialId: 'CdTAATZZCQ',
            type: 'Course Certificate',
            category: 'certification',
        },
        {
            id: 'cert-unicef-communication-for-development',
            title: 'Communication for Development (C4D)',
            issuer: 'UNICEF',
            date: '2026-07-19',
            description: 'Certificate of completion for the Communication for Development (C4D) online course, issued via the UNICEF Agora platform.',
            image: '/certificate/unicef-communication-for-development.pdf',
            credentialId: '2yOUHazNoz',
            type: 'Course Certificate',
            category: 'certification',
        },
        // OpenAI Academy course certificates
        {
            id: 'cert-openai-agents-workflows',
            title: 'Agents and Workflows',
            issuer: 'OpenAI Academy',
            date: '2026-07-18',
            description: 'Course completion certificate covering building and orchestrating AI agents and workflows.',
            image: '/certificate/openai-agents-and-workflows.pdf',
            credentialId: '6ma02i00if',
            type: 'Course Certificate',
            category: 'certification',
        },
        {
            id: 'cert-openai-ai-foundations',
            title: 'AI Foundations',
            issuer: 'OpenAI Academy',
            date: '2026-07-18',
            description: 'Course completion certificate covering the foundations of working with AI models.',
            image: '/certificate/openai-ai-foundations.pdf',
            credentialUrl: 'https://academy.openai.com/public/certificate/3nvpwfha5k',
            credentialId: '3nvpwfha5k',
            type: 'Course Certificate',
            category: 'certification',
        },
        {
            id: 'cert-openai-applied-ai-foundations',
            title: 'Applied AI Foundations',
            issuer: 'OpenAI Academy',
            date: '2026-07-18',
            description: 'Course completion certificate covering applied, hands-on use of AI foundations.',
            credentialUrl: 'https://academy.openai.com/public/certificate/cr2ap8lpm9',
            credentialId: 'cr2ap8lpm9',
            type: 'Course Certificate',
            category: 'certification',
        },
        // Google AI Educator Series — W3C Verifiable Credentials issued by Google for Education
        {
            id: 'cert-google-inquiry-skills',
            title: 'Build student inquiry skills',
            issuer: 'Google for Education',
            date: '2026-07-18',
            description: 'Use Gemini to help create an inquiry-based learning activity for students to complete on a relevant topic.',
            image: 'https://pdf.ms.credential.net/badge/image?env=production&credential=zflww6rv&key=b888a9c085677cd4286551fdaafcffed050d1726c49440739c974c73fc9cc5b4',
            credentialUrl: 'https://www.credential.net/bb0dc1dd-69a7-4252-a069-fae51eb378cb',
            credentialId: 'bb0dc1dd-69a7-4252-a069-fae51eb378cb',
            type: 'AI Educator Series',
            category: 'certification',
        },
        {
            id: 'cert-google-vibe-coding',
            title: 'Introduction to Vibe Coding with Gemini',
            issuer: 'Google for Education',
            date: '2026-07-18',
            description: 'Utilize vibe coding techniques to transform pedagogical ideas into interactive learning tools using natural language.',
            image: 'https://pdf.ms.credential.net/badge/image?env=production&credential=88ohfv6t&key=c7a80e6d3e8974452b7550a4b380de85553d364dd84bef5538481fc40d2e2096',
            credentialUrl: 'https://www.credential.net/9aaed73a-5aa5-4c33-a327-1b9864f4cc14',
            credentialId: '9aaed73a-5aa5-4c33-a327-1b9864f4cc14',
            type: 'AI Educator Series',
            category: 'certification',
        },
        {
            id: 'cert-google-adapt-materials',
            title: 'Adapt (level) materials to meet student needs',
            issuer: 'Google for Education',
            date: '2026-07-18',
            description: 'Use Gemini to create high-interest, differentiated lesson materials to engage and support students at different skill levels.',
            image: 'https://pdf.ms.credential.net/badge/image?env=production&credential=395f1b1v&key=8be5ff61d964b4f59d2cdfd1121bdc9290d57d3d863a2341af9c981f565b434e',
            credentialUrl: 'https://www.credential.net/76486a89-f911-4ccd-bb6c-4f0ff9063f9d',
            credentialId: '76486a89-f911-4ccd-bb6c-4f0ff9063f9d',
            type: 'AI Educator Series',
            category: 'certification',
        },
        {
            id: 'cert-google-remixing-notebooklm',
            title: 'Remixing to gain deeper insights',
            issuer: 'Google for Education',
            date: '2026-07-18',
            description: 'Transform static course materials into dynamic, multi-modal study aids (like Audio Overviews) using Google NotebookLM.',
            image: 'https://pdf.ms.credential.net/badge/image?env=production&credential=j1irdg0j&key=f15a61a7b2e7601482d3ac3ff5826a126362672efcc9c84480be45af75eac5e8',
            credentialUrl: 'https://www.credential.net/d1646cac-b99c-4f7b-846f-44ccc52a8716',
            credentialId: 'd1646cac-b99c-4f7b-846f-44ccc52a8716',
            type: 'AI Educator Series',
            category: 'certification',
        },
        {
            id: 'cert-google-intro-gemini',
            title: 'Introduction to Gemini for Education',
            issuer: 'Google for Education',
            date: '2026-07-18',
            description: 'Define generative AI and utilize Gemini to automate instructional best practices such as scaffolding and reducing cognitive load.',
            image: 'https://pdf.ms.credential.net/badge/image?env=production&credential=ahp9l5hj&key=904eceecb9d74864fe70869c05f42d060b6498cf59b6388554d167a9c5bff965',
            credentialUrl: 'https://www.credential.net/710749c0-a922-4b19-bf44-75eedbd18555',
            credentialId: '710749c0-a922-4b19-bf44-75eedbd18555',
            type: 'AI Educator Series',
            category: 'certification',
        },
        {
            id: 'cert-google-remixing-gemini-image',
            title: 'Remixing to gain deeper insights',
            issuer: 'Google for Education',
            date: '2026-07-18',
            description: "Use Gemini's image generation to create visual anchors for abstract vocabulary, figurative language, and scientific processes.",
            image: 'https://pdf.ms.credential.net/badge/image?env=production&credential=cmy2xfgt&key=97ac3e3e46898ab814849aa8b89c17605966ab075e9da2a980ef89a8223c185c',
            credentialUrl: 'https://www.credential.net/f2e4fabb-f17c-486f-98a8-a5bd73f31ad5',
            credentialId: 'f2e4fabb-f17c-486f-98a8-a5bd73f31ad5',
            type: 'AI Educator Series',
            category: 'certification',
        },
        {
            id: 'cert-google-intro-notebooklm',
            title: 'Introduction to Google NotebookLM',
            issuer: 'Google for Education',
            date: '2026-07-18',
            description: 'Utilize Google NotebookLM as a personalized research and writing assistant to synthesize complex documents into study guides and summaries.',
            image: 'https://pdf.ms.credential.net/badge/image?env=production&credential=0rfo3ein&key=3b445df84bf34852ea2032ebe1f46cf813fd68495679f959930dc73a460852dc',
            credentialUrl: 'https://www.credential.net/610ed2c9-328c-4168-b0c8-80a58fb7725f',
            credentialId: '610ed2c9-328c-4168-b0c8-80a58fb7725f',
            type: 'AI Educator Series',
            category: 'certification',
        },
        {
            id: 'cert-google-evaluate-resources',
            title: 'Evaluate resources and claims',
            issuer: 'Google for Education',
            date: '2026-07-18',
            description: 'Use Gemini to design fact-sorting and source-evaluation activities that build foundational information literacy and inquiry skills.',
            image: 'https://pdf.ms.credential.net/badge/image?env=production&credential=bx87oovg&key=ec759a9da0426ed8d27d20ad053c5d79f63522d9cdf142cd825277b090b4b90a',
            credentialUrl: 'https://www.credential.net/54ffe6c8-41a0-41e1-a30e-fb7a6ca2f523',
            credentialId: '54ffe6c8-41a0-41e1-a30e-fb7a6ca2f523',
            type: 'AI Educator Series',
            category: 'certification',
        },
        {
            id: 'cert-google-reading-scaffolds',
            title: 'Create scaffolds to support reading comprehension',
            issuer: 'Google for Education',
            date: '2026-07-18',
            description: 'Leverage NotebookLM to design targeted reading scaffolds for grade 3-5 informational and narrative texts.',
            image: 'https://pdf.ms.credential.net/badge/image?env=production&credential=n1bgxhhu&key=039b9792220041bb0d3b0bf09f1fc1fd755e06b5e2059642f07b18929f21c14d',
            credentialUrl: 'https://www.credential.net/cdcab90b-d1d4-4866-b108-a95f363f7212',
            credentialId: 'cdcab90b-d1d4-4866-b108-a95f363f7212',
            type: 'AI Educator Series',
            category: 'certification',
        },
        {
            id: 'cert-google-lesson-plan',
            title: 'Create a lesson plan and supporting materials',
            issuer: 'Google for Education',
            date: '2026-07-18',
            description: 'Use Gemini Canvas to create a lesson plan on evaluating digital resources, source evaluation, and critical thinking.',
            image: 'https://pdf.ms.credential.net/badge/image?env=production&credential=01flle7a&key=ec04a69fe1951fb6493cf61674cfdadcd3db5ac7eb1dc4c7bc0ec86f7bb7c8a3',
            credentialUrl: 'https://www.credential.net/a5969e60-d204-4482-9961-a156eb71bdc6',
            credentialId: 'a5969e60-d204-4482-9961-a156eb71bdc6',
            type: 'AI Educator Series',
            category: 'certification',
        },
        {
            id: 'cert-google-design-assessments',
            title: 'Design assessments that capture student thinking',
            issuer: 'Google for Education',
            date: '2026-07-18',
            description: 'Use Gemini to create process-based assessments that prioritize student thinking, reflection, and iterative growth.',
            image: 'https://pdf.ms.credential.net/badge/image?env=production&credential=3lfubx9y&key=5d14c62936dedcc43696081587b6fca738037a7a1a59e721c3bbef4479946520',
            credentialUrl: 'https://www.credential.net/a01b8efe-d424-4e3d-bb12-0878662c4b54',
            credentialId: 'a01b8efe-d424-4e3d-bb12-0878662c4b54',
            type: 'AI Educator Series',
            category: 'certification',
        },
        {
            id: 'cert-google-research-accessible',
            title: 'Make research more accessible to students',
            issuer: 'Google for Education',
            date: '2026-07-18',
            description: 'Use NotebookLM to ground AI responses entirely in uploaded, peer-reviewed research, reducing hallucination risk.',
            image: 'https://pdf.ms.credential.net/badge/image?env=production&credential=df2d0q0o&key=3bedfbde38e160bf3fb271f6c423e6ba990308405afa359679b3fd0ec162b4f6',
            credentialUrl: 'https://www.credential.net/c8dc24a9-fd07-4a7d-80a1-5fe12961f7bd',
            credentialId: 'c8dc24a9-fd07-4a7d-80a1-5fe12961f7bd',
            type: 'AI Educator Series',
            category: 'certification',
        },
    ],
    techStack: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'language' },
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'language' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'language' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'language' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'language' },
        { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', category: 'language' },
        { name: 'Pine Script', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@11/icons/tradingview.svg', category: 'language' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'framework' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', category: 'framework' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', category: 'framework' },
    ],
    hardSkills: [
        { name: 'Python', level: 'beginner', category: 'other', description: 'Currently learning' },
        { name: 'HTML', level: 'intermediate', category: 'frontend' },
        { name: 'CSS', level: 'intermediate', category: 'frontend' },
        { name: 'JavaScript', level: 'intermediate', category: 'frontend' },
        { name: 'Java', level: 'beginner', category: 'other', description: 'Currently learning' },
        { name: 'C++', level: 'beginner', category: 'other', description: 'Currently learning' },
        { name: 'Artificial Intelligence', level: 'beginner', category: 'ai', description: 'Exploring AI fundamentals' },
        { name: 'Prompt Engineering', level: 'intermediate', category: 'ai', description: 'Crafting and refining prompts for coding, writing, and image generation.' },
        { name: 'TradingView Pine Script', level: 'intermediate', category: 'other', description: 'Writing custom indicators and strategies for TradingView.' },
        { name: 'Stock Trading', level: 'beginner', category: 'other', description: 'Learning financial markets' },
    ],
    softSkills: [
        { name: 'Fast Learner', description: 'Picks up new tools and concepts quickly.' },
        { name: 'Team Collaboration', description: 'Enjoys building and learning alongside others, including as part of a 30+ member team.' },
        { name: 'Problem Solving', description: 'Approaches challenges methodically and persistently.' },
        { name: 'Prompt Engineering', description: 'Crafts and refines prompts to get reliable, high-quality AI output.' },
        { name: 'TradingView Script Development', description: 'Builds custom Pine Script indicators and strategies.' },
        { name: 'Performs Well Under Pressure', description: 'Stays effective and solves problems in high-pressure, time-critical moments.' },
        { name: 'Strategic Thinking', description: 'Plans ahead and weighs options before acting.' },
        { name: 'Adaptability', description: 'Comfortable adjusting to new tools, teams, and challenges.' },
    ],
    tools: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'devops' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'devops' },
        { name: 'VS Code', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg', category: 'ide' },
        { name: 'TradingView', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@11/icons/tradingview.svg', category: 'other' },
        { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@11/icons/vercel.svg', category: 'devops' },
        { name: 'ChatGPT', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@11/icons/openai.svg', category: 'other' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', category: 'design' },
        { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', category: 'devops' },
        { name: 'Notion', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@11/icons/notion.svg', category: 'productivity' },
        { name: 'Google Sheets', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@11/icons/googlesheets.svg', category: 'productivity' },
        { name: 'Canva', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@11/icons/canva.svg', category: 'design' },
        { name: 'Discord', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@11/icons/discord.svg', category: 'communication' },
    ],
    faqs: [
        {
            question: "What are you currently working on?",
            answer: "I'm building small web projects — a to-do list app, a proposal-style animated site, and an animation playground — while learning Python, HTML, CSS, and Java.",
        },
        {
            question: "What are your long-term goals?",
            answer: "I'm working toward becoming an AI engineer. Alongside that, I'm learning about stock trading and financial markets, and enjoy exploring crypto and meme coins as a side interest.",
        },
        {
            question: "Do you have any certifications yet?",
            answer: "Not yet — I'm actively working on earning my first certifications as I continue learning.",
        },
        {
            question: "Where can I see your work?",
            answer: "Check out my GitHub for project code, or follow along on Instagram for updates.",
        },
    ],
    blogs: [
        {
            id: 'blog-1',
            slug: 'how-i-approach-ai-projects',
            title: 'How I Approach AI Projects: From Idea to Deployment',
            excerpt: 'Artificial Intelligence projects are more than just training models. A successful AI solution starts with understanding the problem and ends with delivering value to users.',
            content: `Artificial Intelligence projects are more than just training models. A successful AI solution starts with understanding the problem and ends with delivering value to users.

## Step 1: Define the Problem

Before selecting algorithms or datasets, I focus on identifying the exact problem that needs solving. A clear objective helps determine whether machine learning is even necessary.

**Examples:**
- Predicting customer behavior
- Automating repetitive tasks
- Classifying images or text
- Generating intelligent recommendations

## Step 2: Collect and Prepare Data

Data quality determines model performance. I spend significant time cleaning datasets, removing duplicates, handling missing values, and engineering useful features.

**Common tools:**
- Python
- Pandas
- NumPy
- SQL

## Step 3: Build the Model

The choice of model depends on the use case.

**Examples:**
- Regression for prediction
- Classification for categorization
- Neural Networks for complex patterns
- Large Language Models for conversational systems

## Step 4: Evaluation

Metrics help determine whether a model is production-ready.

**Typical metrics:**
- Accuracy
- Precision
- Recall
- F1 Score
- Mean Squared Error

## Step 5: Deployment

A model creates impact only when users can access it.

**Deployment options include:**
- APIs
- Cloud platforms
- Web applications
- Internal business systems

AI development is an iterative process that requires continuous improvement, monitoring, and experimentation.`,
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop',
            date: '2026-06-15',
            category: 'applied-ai',
            tags: ['AI', 'Machine Learning', 'Python', 'Deployment'],
            author: {
                name: 'MA Sayeed',
                avatar: '/about/sami-profile.jpg',
            },
            readTime: '5 min read',
        },
        {
            id: 'blog-2',
            slug: 'five-essential-skills-for-data-professionals',
            title: 'Five Essential Skills for Modern Data Professionals',
            excerpt: 'Data has become one of the most valuable assets in the digital economy. Building expertise in data science requires a combination of technical and analytical abilities.',
            content: `Data has become one of the most valuable assets in the digital economy. Building expertise in data science requires a combination of technical and analytical abilities.

## 1. Programming

Python remains one of the most versatile languages for data analysis, automation, and machine learning.

## 2. SQL

Structured Query Language is fundamental for retrieving, transforming, and analyzing data efficiently.

## 3. Statistics

Understanding distributions, probability, hypothesis testing, and correlations is critical for making informed decisions.

## 4. Visualization

Presenting information effectively is just as important as analyzing it.

**Popular visualization tools include:**
- Matplotlib
- Plotly
- Tableau
- Power BI

## 5. Communication

Technical findings should be translated into actionable insights that stakeholders can understand.

Data professionals who combine technical expertise with strong communication skills often deliver the greatest impact.`,
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
            date: '2026-06-22',
            category: 'more',
            tags: ['Data Science', 'Python', 'SQL', 'Statistics'],
            author: {
                name: 'MA Sayeed',
                avatar: '/about/sami-profile.jpg',
            },
            readTime: '4 min read',
        },
        {
            id: 'blog-3',
            slug: 'writing-quotes-and-private-books',
            title: 'Beyond the Code: Writing Quotes and Private Books',
            excerpt: "Code isn't the only thing I build. In my free time, I write quotes and have privately written several books — a quieter, more personal kind of creating.",
            content: `Most of what I share publicly is about code, trading, and AI — but a big part of how I think and create happens away from the screen.

## Writing Quotes

In my free time, I write short quotes — little distillations of thoughts on discipline, growth, and building something from nothing. It's a habit that keeps me reflective, the same way debugging keeps me precise.

## Private Books

I've also privately written several books. They're not published yet, and for now they stay personal — a space to explore ideas without an audience watching. Writing them has taught me a lot about structure, patience, and finishing what I start, lessons that carry directly into how I approach long-term projects like this portfolio.

## Why It Matters

Building AI projects and trading strategies is analytical. Writing is the opposite — it's where I process everything else. Keeping both sides active keeps me balanced, and honestly, a better problem-solver on the technical side too.

More on this — and maybe an excerpt or two — coming soon.`,
            image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2000&auto=format&fit=crop',
            date: '2026-07-01',
            category: 'about-me',
            tags: ['Writing', 'Quotes', 'Personal'],
            author: {
                name: 'MA Sayeed',
                avatar: '/about/sami-profile.jpg',
            },
            readTime: '3 min read',
        },
    ],
    gallery: [],
};
