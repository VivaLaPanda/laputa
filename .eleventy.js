module.exports = function(eleventyConfig) {
    // Copy static assets directly to output
    eleventyConfig.addPassthroughCopy("src/assets");
    
    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "_includes",
            layouts: "_includes/layouts"
        }
    };
}; 