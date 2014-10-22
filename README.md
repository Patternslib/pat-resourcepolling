# pat-resourcepolling

This is a [Patternslib](patternslib.com) pattern that periodically checks
whether certain resources (such as images) are available.

Suppose you have documents in your website for which you generate image
previews.

When the page loads, these previews might not yet be available. This pattern
will periodically poll (with exponential drop-off in polling period) the server
to inquire whether (and which) resources are available.
