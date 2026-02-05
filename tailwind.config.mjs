export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                safari: {
                    olive: '#3D4828',
                    ochre: '#C98E34',
                    bone: '#F9F7F2',
                    charcoal: '#262626',
                    orange: '#E67E22', // kept but will be used sparingly
                },
            },
            fontFamily: {
                heading: ['"Playfair Display"', 'serif'],
                body: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
