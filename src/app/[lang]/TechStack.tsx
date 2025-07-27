import {
  siCloudflare,
  siCss,
  siDatadog,
  siDocker,
  siDrizzle,
  siElasticsearch,
  siGoogleanalytics,
  siGooglecloud,
  siJavascript,
  siKibana,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPwa,
  siPython,
  siReact,
  siRedis,
  siSentry,
  siSocketdotio,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVitest,
} from 'simple-icons'

const techCategories = [
  {
    title: 'Languages',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    color: 'from-blue-50 to-indigo-50 border-blue-200',
    iconColor: 'text-blue-600',
    items: [
      {
        name: 'JavaScript (ES2023)',
        href: 'https://javascript.info/',
        icon: siJavascript,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: siTypescript,
      },
      {
        name: 'CSS3',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        icon: siCss,
      },
      {
        name: 'Python',
        href: 'https://www.python.org/',
        icon: siPython,
      },
      {
        name: 'SQL',
        href: 'https://en.wikipedia.org/wiki/SQL',
        icon: null,
      },
    ],
    featured: ['TypeScript', 'JavaScript (ES2023)'],
  },
  {
    title: 'Frontend',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    color: 'from-purple-50 to-pink-50 border-purple-200',
    iconColor: 'text-purple-600',
    items: [
      {
        name: 'Next.js (App Router)',
        href: 'https://nextjs.org/',
        icon: siNextdotjs,
      },
      {
        name: 'React.js',
        href: 'https://react.dev/',
        icon: siReact,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: siTailwindcss,
      },
      {
        name: 'Zustand',
        href: 'https://zustand-demo.pmnd.rs/',
        icon: null,
      },
      {
        name: 'Playwright',
        href: 'https://playwright.dev/',
        icon: null,
      },
      {
        name: 'PWA',
        href: 'https://web.dev/progressive-web-apps/',
        icon: siPwa,
      },
      {
        name: 'React Native',
        href: 'https://reactnative.dev/',
        icon: siReact,
      },
    ],
    featured: ['Next.js (App Router)', 'React.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
    color: 'from-green-50 to-emerald-50 border-green-200',
    iconColor: 'text-green-600',
    items: [
      {
        name: 'Node.js',
        href: 'https://nodejs.org/en/',
        icon: siNodedotjs,
      },
      {
        name: 'Socket.IO',
        href: 'https://socket.io/',
        icon: siSocketdotio,
      },
      {
        name: 'Drizzle ORM',
        href: 'https://orm.drizzle.team/',
        icon: siDrizzle,
      },
      {
        name: 'Docker',
        href: 'https://www.docker.com/',
        icon: siDocker,
      },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        icon: siPostgresql,
      },
      {
        name: 'Redis',
        href: 'https://redis.io/',
        icon: siRedis,
      },
      {
        name: 'Elasticsearch',
        href: 'https://www.elastic.co/kr',
        icon: siElasticsearch,
      },
      {
        name: 'Kibana',
        href: 'https://www.elastic.co/kibana',
        icon: siKibana,
      },
    ],
    featured: ['Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Cloud',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
    color: 'from-sky-50 to-cyan-50 border-sky-200',
    iconColor: 'text-sky-600',
    items: [
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: siVercel,
      },
      {
        name: 'Supabase',
        href: 'https://supabase.com/',
        icon: siSupabase,
      },
      {
        name: 'Cloudflare',
        href: 'https://www.cloudflare.com/',
        icon: siCloudflare,
      },
      {
        name: 'Google Cloud (Cloud Run, Storage, SQL)',
        href: 'https://cloud.google.com/gcp/',
        icon: siGooglecloud,
      },
      {
        name: 'AWS (RDS, EC2, S3)',
        href: 'https://aws.amazon.com/ko/',
        icon: null,
      },
    ],
    featured: ['Vercel', 'Google Cloud (Cloud Run, Storage, SQL)', 'AWS (RDS, EC2, S3)'],
  },
  {
    title: 'Operations',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    color: 'from-orange-50 to-amber-50 border-orange-200',
    iconColor: 'text-orange-600',
    items: [
      {
        name: 'Sentry',
        href: 'https://sentry.io/welcome/',
        icon: siSentry,
      },
      {
        name: 'Datadog',
        href: 'https://datadoghq.com/',
        icon: siDatadog,
      },
      {
        name: 'Vitest',
        href: 'https://vitest.dev/',
        icon: siVitest,
      },
      {
        name: 'Google Analytics',
        href: 'https://analytics.google.com/analytics/web/',
        icon: siGoogleanalytics,
      },
      {
        name: 'Amplitude',
        href: 'https://amplitude.com/',
        icon: null,
      },
      {
        name: 'GrowthBook',
        href: 'https://www.growthbook.io/',
        icon: null,
      },
    ],
    featured: ['Sentry', 'Datadog'],
  },
  {
    title: 'AI',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    color: 'from-rose-50 to-pink-50 border-rose-200',
    iconColor: 'text-rose-600',
    items: [
      {
        name: 'ComfyUI',
        href: 'https://github.com/comfyanonymous/ComfyUI',
        icon: null,
      },
      {
        name: 'LoRA (Kohya SS)',
        href: 'https://github.com/bmaltais/kohya_ss',
        icon: null,
      },
    ],
    featured: ['ComfyUI'],
  },
]

export default function TechStack() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {techCategories.map((category, index) => (
        <div
          key={index}
          className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${category.color} border p-5`}
        >
          {/* Content */}
          <div className="relative">
            {/* Header */}
            <div className="flex items-center gap-1 mb-4">
              <div className={`p-2 rounded-lg bg-white ${category.iconColor}`}>{category.icon}</div>
              <h4 className="text-lg font-semibold text-gray-800">{category.title}</h4>
            </div>

            {/* Tech Items */}
            <div className="flex flex-wrap gap-2">
              {category.items.map((item, itemIndex) => {
                return (
                  <a
                    key={itemIndex}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      inline-flex items-center gap-1.5 px-3 py-1 text-sm rounded-full
                      transition-all duration-200
                      bg-white text-gray-800 font-medium border
                    `}
                  >
                    {item.icon && (
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill={`#${item.icon.hex}`}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d={item.icon.path} />
                      </svg>
                    )}
                    <span>{item.name}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
