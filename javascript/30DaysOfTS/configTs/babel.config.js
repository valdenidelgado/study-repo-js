module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: [
        ['module-resolver', {
            alias: {
                '@models': './src/models',
                '@controllers': './src/controllers',
                '@views': './src/views',
                '@services': './src/services',
                '@utils': './src/utils'
            }
        }]
    ],
    ignore: [
        '**/*.spec.ts'
    ]
}