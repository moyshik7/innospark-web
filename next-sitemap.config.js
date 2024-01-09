/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "https://innosparkbd.com/",
    generateRobotsTxt: false,
    sitemapSize: 7000,
}