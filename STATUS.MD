# Muban Skeleton

## Production build

- bundle JS and CSS
- support lazy loading / code splitting
- exclude all templates - except the ones being actually used
- 3 build types
    - dist mode (single build, output on disk)
    - watch mode (output on disk, but watch change for a quick rebuild)
    - dev mode (run webpack dev server and serve files from memory, including HTMl generation)
- export generated HTML pages


### Dev mode

+ run express server to server HTML and js/css
+ output HTML from express, not from JS, to better simulate a built package

/ integrate webpack-dev-middleware and webpack-hot-middleware

- implement live-reload for HTML reload
- implement proper hot-reloading for JS components - or maybe just reload the page?

### Template rendering

+ root template is always the "index.html" that includes the head and body with default info and app container
+ then there is a default layout template that can render blocks, with an optional header and footer
+ user can create their own layouts for other pages
+ each page can optionally specify to choose a custom layout to render
+ a layout or template decides what to render based on the provided data on the page



### Pages

+ a page is a TS file that exports a data object
+ it can also export a function that returns a data object, receiving "context" about the current page and the site
 in general
    - part of the context is the "sitemap", so automatic links to other pages can be generated

- besides page data, allow for setting other info like metadata (title/description/og:tags)
- build up a "context" object for each page

### Routing

Both during dev mode, and when generating build pages, we need to know what Pages exist, and what to render.

+ when no "index" file on disk is present, render auto-index instead

+ files on disk should be pages
    - urls should include .html

- also support pages in folders
- folder should redirect to index.html in the folder
- make "router" available to templates?

### Theming
- support for themes/styles/variables
- make separate theme build
- other exceptions per theme (html? js?)
- pages per theme? theme variables?


#### Optional

- leave CSS bundled with JS files to reduce initial css load size
- create auto-index page
- export only JS / CSS solo
- API mocking
- typed API

- check non-zero error codes on build