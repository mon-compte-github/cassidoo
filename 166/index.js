
// assume tag names only contains a-z, A-Z, 0-9, _ and -
// tag name can be followed by space(s), but attributes are not allowed
// change the regex below if needed           ↓   ↓   ↓
const isValid = (tagName) => tagName.match(/^[-\w]+\s*$/);

const htmlValidator = (str) => {
    // store opened tags
    // last in / first out
    const stack = [];

    // optimistic result
    let result = true;
    
    // find first tag
    let cursor = str.indexOf('<');
    while(cursor != -1 && result) {
        // tag start
        let end = str.indexOf('>', cursor+1);
        if(end == -1) {
            console.error('unclosed tag (opened at ' + cursor + ')');
            result = false;
            break;
        }
        
        // extract tag name (may contain a '/')
        tagName = str.substring(cursor+1, end);
        if(tagName.endsWith('/')) {
            // self closing tag, remove trailing '/'
            // and validate tag name
            tagName = tagName.substr(0, tagName.length - 1);
            if(!isValid(tagName)) {
                console.error('invalid self-closing tag <' + tagName + '>');
                result = false;
                break;
            }
        } else if(tagName.startsWith('/')) {
            // closing tag, must match opening tag
            tagName = tagName.substr(1);
            
            const openingTag = stack.pop();
            if(openingTag != tagName) {
                console.error('unmatched tag <' + openingTag + '></' + tagName + '>');
                result = false;
                break;
            }
        } else {
            // opening tag, push on stack if name is valid enough
            if(isValid(tagName)) {
                stack.push(tagName);
            } else {
                console.error('invalid tag <' + tagName + '>');
                result = false;
                break;
            }
        }

        // place the cursor just after the tag
        cursor = str.indexOf('<', end+1);
    }
    
    // if stack is not empty, at least
    // one tag has not been closed properly
    if(stack.length > 0) {
        console.error('unclosed tag <' + stack.pop() + '>');
        result = false;
    }

    return result;
  }
  
  // test cases

  console.log(htmlValidator('<invalid.tag.name></invalid.tag.name>')); // false
  console.log(htmlValidator('<simple-tag></simple-tag>')); // true
  console.log(htmlValidator('<SelfClosingTag/>')); // true
  console.log(htmlValidator('<tag>I love coding <Component />!</tag>')); // true
  console.log(htmlValidator('<unclosed-tag>I love coding <Component />!')); // false
  console.log(htmlValidator('<hello><world><i-am-jay/></world> lorem ipsum <tag></tag></hello>')); // true
