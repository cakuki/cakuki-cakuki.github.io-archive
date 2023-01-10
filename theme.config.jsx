/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
const theme = {
  darkMode: false,

  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),

  navs: [
    {
      name: 'twitter',
      url: 'https://twitter.com/cakuki',
    },
    {
      name: 'github',
      url: 'https://github.com/cakuki',
    },
  ],

  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <abbr
        title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
        style={{ cursor: 'help' }}
      >
        CC BY-NC 4.0
      </abbr>{' '}
      {new Date().getFullYear()} © Can Kinay.
      {/* <a href="/feed.xml">RSS</a> */}
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),

  readMore: 'Read More →',
  postFooter: null,
}

export default theme;
