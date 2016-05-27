var markdown = require('markdown').markdown;
    console.log(markdown);
    
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data',function (chunk) {
        process.stdout.write(markdown.toHTML(chunk));  
        //write(markdown.toHtml(页面))
    });
    