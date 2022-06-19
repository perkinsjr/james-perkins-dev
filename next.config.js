module.exports = {
    images: {
        domains: [
            'res.cloudinary.com',
            'images.unsplash.com',
            'res.craft.do',
            'img.youtube.com',
            'cdn.hashnode.com'
        ]
    },
    experimental: {
        nextScriptWorkers: true,
      },
    webpack: function (config, { isServer }) {
        if (isServer) {
            require('./scripts/generate-sitemap');
        }
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader'
        });
        return config;
    }
};
