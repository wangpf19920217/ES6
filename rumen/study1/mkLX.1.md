# 1.特殊字符自动转换

在 HTML 文件中，有两个字符需要特殊处理： `<` 和 `&` 。 < 符号用于起始标签，& 符号则用于标记 HTML 实体，如果你只是想要显示这些字符的原型，你必须要使用实体的形式，像是 &lt; 和 &amp;。

& 字符尤其让网络文档编写者受折磨，如果你要打「AT&T」 ，你必须要写成「AT`&amp;`T」。而网址中的 & 字符也要转换。比如你要链接到：

http://images.google.com/images?num=30&q=larry+bird

你必须要把网址转换写为：

http://images.google.com/images?num=30`&amp;`q=larry+bird

才能放到链接标签的 href 属性里。不用说也知道这很容易忽略，这也可能是 HTML 标准检验所检查到的错误中，数量最多的。

Markdown 让你可以自然地书写字符，需要转换的由它来处理好了。如果你使用的 & 字符是 HTML 字符实体的一部分，它会保留原状，否则它会被转换成 &amp;。

所以你如果要在文档中插入一个版权符号 ©，你可以这样写：

`&copy;`
&copy;Markdown 会保留它不动。而若你写：

AT&T
Markdown 就会将它转为：

AT&amp;T
类似的状况也会发生在 < 符号上，因为 Markdown 允许 兼容 HTML ，如果你是把 < 符号作为 HTML 标签的定界符使用，那 Markdown 也不会对它做任何转换，但是如果你写：
&copy;
AT&T
AT&amp;T

___

# 区块元素
> 段落和换行
***

---

> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.

---

> ## 这是一个标题。
> 
> 1.   这是第一行列<br>表项。
> 2.   这是第二行列表项。
> 
> 给出一些例子代码：
***
> 
>     6个空格
* Bird
* Magic

*   A list item with a blockquote:

    > This is a blockquote
    > inside a list item.
   
*   一列表项包含一个列表区块：
        1986. What a great season.
        
1986. What a great season.

转义\

1986\. What a great season.

----
### Markdown 中建立代码区块很简单，只要简单地缩进 4 个空格或是 1 个制表符就可以

这是一个区块

    这是领一个区块
    
<div class="footer">
        &copy; 2004 Foo Corporation
    </div>
    
> * * *
>
> ***
>
> *****
>
> - - -
>
> ---

1. 链接
====
This is [\[文字\]](http://example.com/ "Title") inline link.

[This link](http://example.net/) has no title attribute.

See my [About](/about/) page for details.

This is [an example][id] reference-style link.

This is [an example] [id] reference-style link.

[id]: http://example.com/  "Optional Title Here"
> 在文件的任意处[id\]   没有[id] 会不显示
>
>      链接还可以这样写[baidu][]  [baidu]:

[baidu][]

[baidu]: "www.baidu.com" "baidu"

Visit [Daring Fireball][] for more information.

[Daring Fireball]: http://daringfireball.net/
                    
> 多个单词 如上

I get 10 times more traffic from [Google] [1] 

than from
[Yahoo] [2] or [MSN] [3].

  [1]: http://google.com/        "Google"
  [2]: http://search.yahoo.com/  "Yahoo Search"
  [3]: http://search.msn.com/    "MSN Search"

> 中括号[1\] [2\] [3\] 

___

2. 强调
===

> Markdown 使用星号（\*）和底线（\_）作为标记强调字词的符号，被 \* 或 \_ 包围的字词会被转成用 <em\> 标签包围，用两个 \* 或 \_ 包起来的话，则会被转成 <strong\>，例如：

*single asterisks*

_single underscores_

**double asterisks**

__double underscores__

3. 代码
===

Use the `printf()` function.

> 会产生：

>     <p\>Use the <code\>printf()</code\> function.</p\>

4. 图片
===

> ![Alt text](/path/to/img.jpg 'title')
>
![Alt text](/path/to/img.jpg "Optional title")
详细叙述如下：
>
一个惊叹号 !
接着一个方括号，里面放上图片的替代文字
接着一个普通括号，里面放上图片的网址，最后还可以用引号包住并加上 选择性的 'title' 文字。
>

# 其它

## 自动链接

<http://www.baidu.com/>

> < www.baidu.com/\> 不行

<address@example.com>



| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |





    


















