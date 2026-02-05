export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                safari: {
                    orange: '#E67E22',
                    green: '#4A7C59',
                    gold: '#D4AF37',
                },
            },
            fontFamily: {
                heading: ['Syne', 'system-ui', 'sans-serif'],
                body: ['Space Grotesk', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
