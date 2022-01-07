const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWpPost(sort: { fields: [date] }) {
        nodes {
          title
          excerpt
          content
          slug
        }
      }
    }
  `).then(result => {
    //highlight-start
    result.data.allWpPost.nodes.forEach(node => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: node.slug,
        },
      })
    })
    //highlight-end
  })
}




// Create pages for docs and blogs separately using two separate
// queries. We use the `graphql` function which returns a Promise
// and ultimately resolve all of them using Promise.all(Promise[])

exports.createPages = ({ actions, graphql }) => {

	const { createPage } = actions;
	const docTemplate = path.resolve('src/templates/docTemplate.js');
	const blogTemplate = path.resolve('src/templates/blogTemplate.js');

	// Individual blogs pages
	const blogs = graphql(`
		{
			blogs: allMarkdownRemark(
				filter: { fileAbsolutePath: { glob: "**/src/pages/blog/*.md" } }
				sort: { order: DESC, fields: frontmatter___date }
			) {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create blog pages
		result.data.blogs.edges.forEach(({ node }) => {
			createPage({
				path: node.fields.slug,
				component: blogTemplate,
			});
		});
	});

	// Individual docs pages
	const courses = graphql(`
		{
			docs: allMarkdownRemark(
				filter: {
					fileAbsolutePath: { glob: "**/src/pages/courses/*.md" }
				}
				sort: { order: DESC, fields: frontmatter___order }
			) {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create doc pages
		result.data.docs.edges.forEach(({ node }) => {
			createPage({
				path: node.fields.slug,
				component: docTemplate,
			});
		});
	});

	// Return a Promise which would wait for both the queries to resolve
	return Promise.all([blogs, docs]);
};