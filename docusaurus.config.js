module.exports = {
  title: 'دیتاگیت',
  tagline: 'همیشه راه ساده تری هم هست.',
  url: 'https://datagit.ir',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // onBrokenMarkdownLinks:'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'massoudmaboudi', // Usually your GitHub org/user name.
  projectName: 'datagit', // Usually your repo name.
  themeConfig: {
    // Relative to your site's "static" directory.
    // Cannot be SVGs. Can be external URLs too.
    image: 'img/metaImage.png',
    hideableSidebar: true,
    // googleAnalytics: {
    //   trackingID: 'G-98VZHCYVG8',
    //   // Optional fields.
    //   // anonymizeIP: true, // Should IPs be anonymized?
    // },
    gtag: {
      trackingID: 'G-98VZHCYVG8',
      // Optional fields.
      // anonymizeIP: true, // Should IPs be anonymized?
    },
    // announcementBar: {
    //   id: 'support_us', // Any value that will identify this message.
    //   content:
    //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
    //   backgroundColor: '#fafbfc', // Defaults to `#fff`.
    //   textColor: '#091E42', // Defaults to `#000`.
    //   isCloseable: false, // Defaults to `true`.
    // },

    // sidebarCollapsible: true,

    colorMode: {
      // "light" | "dark"
      defaultMode: 'light',

      // Hides the switch in the navbar
      disableSwitch: true,
    },
    navbar: {
      // hideOnScroll: true,

      // dark or primary or just remove it and it will be light
      // style: 'primary',

      title: 'دیتاگیت',
      logo: {
        alt: 'لوگو دیتاگیت',
        src: 'img/logo.svg',
        // srcDark: 'img/logo_dark.svg', // Default to `logo.src`.
        // href: 'https://datagit.ir/', // Default to `siteConfig.baseUrl`.
        // target: '_self', // By default, this value is calculated based on the `href` attribute (the external link will open in a new tab, all others in the current one).
      },
      items: [
        {
          to: 'docs/python/introduction',
          // activeBasePath: 'docs',
          label: 'پایتون',
          position: 'left',
          items: [
            {
              label: 'معرفی',
              to: 'docs/python/introduction',
            },
            {
              label: 'آموزش مقدماتی',
              to: 'docs/python/beginner/introduction',
            },
            // {
            //   label: 'Matplotlib',
            //   to: 'docs/',
            // },
          ],
        },
        {
          to: 'docs/git/introduction',
          label: 'گیت',
          position: 'left',
          items: [
            {
              label: 'معرفی',
              to: 'docs/git/introduction',
            },
            {
              label: 'آموزش مقدماتی',
              to: 'docs/git/beginner/introduction',
            },
          ],
        },
        // {
        //   to: 'docs/r/introduction',
        //   label: 'R',
        //   position: 'left',
        //   items: [
        //     {
        //       label: 'معرفی',
        //       to: 'docs/r/introduction',
        //     },
        //     {
        //       label: 'آموزش مقدماتی',
        //       to: 'docs/r/beginner/introduction',
        //     },
        //   ],
        // },
        // {
        //   to: 'docs/db/introduction',
        //   label: 'پایگاه داده',
        //   position: 'left',
        // },
        {
          to: "contact",
          label: "تماس با من",
          position: "right",
        },
        { to: 'blog', label: 'بلاگ', position: 'right' },
        {
          // href: 'https://github.com/facebook/docusaurus',
          // label: 'GitHub',
          // position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      // links: [
      //   {
      //     title: 'آموزش ها',
      //     href: 'https://linkedin.com/in/massoud-maboudi',
      //     items: [
      //       {
      //         label: 'پایتون',
      //         to: 'docs/python/introduction',
      //       },
      //       {
      //         label: 'گیت',
      //         to: 'docs/git/introduction',
      //       },
      //       {
      //         label: 'R',
      //         to: 'docs/r/introduction',
      //       },
      //       {
      //         label: 'پایگاه داده',
      //         to: 'docs/db/introduction',
      //       }
      //     ],
      //   },
      //   {
      //     title: 'ارتباط با من',
      //     items: [
      //       {
      //         label: 'تلگرام',
      //         href: 'https://t.me/MassoudMaboudi',
      //       },
      //       {
      //         label: 'واتس اپ',
      //         href: 'https://wa.me/60183757685',
      //       },
      //       {
      //         label: 'لینکدین',
      //         href: 'https://linkedin.com/in/massoud-maboudi',
      //       },
      //       {
      //         label: 'ایمیل',
      //         href: 'mailto:massoud.maboudi@gmail.com',
      //       }
      //     ],
      //   },
      //   {
      //     title: 'بیشتر',
      //     items: [
      //       {
      //         label: 'بلاگ',
      //         to: 'blog',
      //       }
      //     ],
      //   },
      // ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/logoGray.svg',
        // href: 'https://opensource.facebook.com',
      },
      copyright: `دیتاگیت ۱۳۹۷ - امروز`,
    },

    // CodeBlock Theme,
    // By default, we use Palenight as syntax highlighting theme.
    prism: {
      additionalLanguages: ['r'],
      // theme: require('prism-react-renderer/themes/github'),
      // theme: require('prism-react-renderer/themes/dracula')
      // darkTheme: require('prism-react-renderer/themes/vsDark'),
    },

    algolia: {
      apiKey: '70b38347b2c6ca47a5bfd5cc6cd173b0',
      indexName: 'datagit',
      // placeholder: 'جستجو',
      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      // searchParameters: {},

      //... other Algolia params
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          blogTitle: 'وبلاگ دیتاگیت!',
          blogDescription: 'جایی برای خواندن همه چیز!',
          showReadingTime: true,
          blogSidebarTitle: 'مطالب اخیر'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 4, // the max number of images generated between min and max (inclusive)
      },
    ],
    // ['@docusaurus/plugin-google-analytics',
    //   {
    //     id: 'ganalytics'
    //   }
    // ],
    ['@docusaurus/plugin-google-gtag',
      {
        id: 'gtag'
      }
    ],
    [
      '@docusaurus/plugin-sitemap',
      {
        id: 'sitemap',
        cacheTime: 600 * 1000, // 600 sec - cache purge period
        changefreq: 'weekly',
        priority: 0.5,
        trailingSlash: false,
      },
    ],
  ],
  scripts: [
    {
      src: 'https://unpkg.com/react-medium-image-zoom',
      async: true,
    }
  ],
};
