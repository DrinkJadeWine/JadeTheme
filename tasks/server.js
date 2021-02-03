import browserSync from 'browser-sync'
import themeKit from '@shopify/themekit'
import path from 'path'

const browser = browserSync.create()

var TARGET_URL = 'https://drinkjade.co'

export function browserSyncServer() {
    const themeId = 118864183458

    browser.init({
        // This file is touched by Shopify Theme Kit when finished uploading changed files to theme.
        files: [path.resolve(__dirname, '../theme.update')],
        cors: true,
        ghostMode: false, // No clicks, form events and scrolling will be synced.
        notify: false,
        reloadDelay: 1500,
        proxy: {
            target: `${TARGET_URL}?preview_theme_id=${themeId}`,
            ws: true,
        },
        snippetOptions: {
            rule: {
                match: /<\/body>/i,
                fn: function (snippet, match) { return snippet + match }
            }
        }
    })
}

export function uploadFilesToShopify() {
    themeKit.command('watch', {
        env: 'development',
        themeid: 118864183458,
        notify: './theme.update'
    })
}
