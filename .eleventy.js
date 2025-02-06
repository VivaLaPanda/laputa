module.exports = function(eleventyConfig) {
    // Copy all assets
    eleventyConfig.addPassthroughCopy({
        "src/assets/": "assets/"
    });
    
    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            layouts: "_includes/layouts"
        }
    };
}; 