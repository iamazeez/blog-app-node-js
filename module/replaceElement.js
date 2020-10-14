module.exports = (file,blogId) => {

    let output = file.replace(/{%POST_TITLE%}/g, blogId.title);
    output = output.replace(/{%POST_DESCREPTION%}/g, blogId.descreption);
    output = output.replace(/{%ID%}/g, blogId.id);
    return output;

} 