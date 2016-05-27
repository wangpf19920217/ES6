//增加markdown样式
var markdown = require('markdown').markdown;
var fs = require('fs');
var http =require('http');
http.createServer = function (res,req) {
    
}
process.stdin.resume();
process.stdin.setEncoding('utf8');
var html = {}; //接收markdown文件
html.header = fs.readFileSync('header.html').toString();
html.footer = fs.readFileSync('footer.html').toString();
process.stdin.on('data',function (chunk) {
    // process.stdin绑定‘data’事件 回调回来html页面 
        process.stdout.write(markdown.toHTML(chunk));  
        //write(markdown.toHtml(页面))
    });
process.stdin.on('end', function (chunk) {  
    process.stdout.write(html.header + html.body + html.footer);
});

// 增加header footer .html


//marked


    




