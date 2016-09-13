﻿<h3> How </h3>
 <pre>
&lt;!doctype html&gt;
&lt;html&gt;
&lt;script src="jquery.js"&gt;&lt;/script&gt;
<lime>&lt;script src="htm.js"&gt;&lt;/script&gt;</lime>
&lt;script&gt;
.........
&lt;/script&gt;
&lt;/html&gt;
</pre>

<h3>More...</h3>

htm.contain(element , option)
<h6>element: HTMLElement or Jquery element</h6>
<h6>option : {</h6>
<h6>           ty: "|" (Horizontal) or other value (Vertical)</h6>
<h6>           all:  Array or Object</h6>
<h6>          } </h6>
<pre>
var htl=htm.contain(document , {
         all:{
             a: {
                 html: "hello" ,
                 css: {color: "violet"  ,background: "lime"}
              } ,
             aa:{
                 text: "htm" ,
                 css: {color: "lime"  ,background: "violet"}
              }
        }
}).css({textAlign : "center" ,  font: "6em/" + htm(window).height()/2 + "px htm"})

console.log(htm(htl.a).html())  //hello
console.log(htl.aa.textContent) //htm

</pre>
link:  <a href= "h.htm"> http://gpyun.github.io/h.htm </a>
<pre>
htm.contain(document , {
        ty: "|" , 
        all:[
            {
                 pn: 2,
                 html: "hello" ,
                 css: {color: "violet"  ,background: "lime"}
              } ,
             {
                 pn:3 ,
                 text: "htm" ,
                 css: {color: "lime"  ,background: "violet"}
              } ,
             {
                 pn:1
              }
            ]
}).css({textAlign : "center" ,  font: "6em/" + htm(window).height() + "px htm"})
</pre>
or

<pre>
htm.contain(document , {
        ty: "|" , 
        all:[
            {
                 pn: 2,
                 html: "hello" ,
                 css: {color: "violet"  ,background: "lime"}
             } ,
            {
                 pn:3 ,
                 text: "htm" ,
                 css: {color: "lime"  ,background: "violet"}
             } ,
              1
            ]
}).css({textAlign : "center" ,  font: "6em/" + htm(window).height() + "px htm"})
</pre>
link:  <a href= "l.htm"> http://gpyun.github.io/l.htm </a>