import { PageFrame, PageFrameProps } from "./types"
import HeaderConstructor from "../Header"

const Header = HeaderConstructor()

/**
 * The default page frame — three-column layout with left sidebar, center
 * content (header + body + afterBody), and right sidebar, followed by a footer.
 *
 * This is the original Quartz layout, extracted from renderPage.tsx.
 */
export const DefaultFrame: PageFrame = {
  name: "default",
  render({
    componentData,
    header,
    beforeBody,
    pageBody: Content,
    afterBody,
    left,
    right,
    footer: Footer,
  }: PageFrameProps) {
       return (
      <>
        <header class="al-site-header">
          <div class="al-logo-wrap">
            <a href="/" class="al-logo" aria-label="al-chemist.info home">
              <img src="/static/alchemist-logo.png" alt="al-chemist.info" />
            </a>
            <div class="al-tagline">Thoughts about the work and in its vicinity</div>
          </div>

          <nav class="al-main-nav" aria-label="Main navigation">
            <a href="/research/">Research</a>
            <a href="/publications/">Publications</a>
            <a href="/teaching/">Teaching</a>
            <a href="/courses/">Courses</a>
            <a href="/notes/">Garden</a>
            <a href="/tools/">Tools</a>
            <a href="/about/">About</a>
            <span class="al-lang"><a href="/">EN</a> / <a href="/he/">עברית</a></span>
          </nav>
        </header>

        <div class="left sidebar">
      {left.map((BodyComponent) => (
            <BodyComponent {...componentData} />
          ))}
        </div>
        <div class="center">
          <div class="page-header">
            <Header {...componentData}>
              {header.map((HeaderComponent) => (
                <HeaderComponent {...componentData} />
              ))}
            </Header>
            <div class="popover-hint">
              {beforeBody.map((BodyComponent) => (
                <BodyComponent {...componentData} />
              ))}
            </div>
          </div>
          <Content {...componentData} />
          <hr />
          <div class="page-footer">
            {afterBody.map((BodyComponent) => (
              <BodyComponent {...componentData} />
            ))}
          </div>
        </div>
        <div class="right sidebar">
          {right.map((BodyComponent) => (
            <BodyComponent {...componentData} />
          ))}
        </div>
        <Footer {...componentData} />
      </>
    )
  },
}
