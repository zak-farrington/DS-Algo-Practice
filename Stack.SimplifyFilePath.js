// Produce accurate file path in Unix like file system.
// Example input path: /a//b////c/d//././/..
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    
    const pathSegments = path.split("/")?.filter(p => p.length > 0 && p != ".");
    
    const pathStack = [];
    for(const pathSegment of pathSegments) {
        if(pathSegment == "..") {
            pathStack.pop();
        }
        else {
            pathStack.push(pathSegment);
        }
    }
    
    const pathString = `/${pathStack.join("/")}`;
    return pathString;
};