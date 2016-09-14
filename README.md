﻿<h3> How </h3>
 <pre>
&lt;!doctype html&gt;
&lt;html&gt;
&lt;script src="jquery.js"&gt;&lt;/script
&lt;script src="htm.js"&gt;&lt;/script&gt;
&lt;script&gt;
.........
&lt;/script&gt;
&lt;/html&gt;
</pre>

<h3>More...</h3>

htm.contain(element , option)
<h6>element: HTMLElement or Jquery element</h6>
<h6>option : {
<li>           ty: "|" (Horizontal) or other value (Vertical) </li>
<li>           all: Array or Object value</li>
<li>           o:   Integer or Object value , represent thickness (like &lt;hr&gt; tag element) </li>   
            } </h6>
<p>
"all" option : Object value , (Vertical 1 : 1)

<pre>
var htl=htm.contain(document , {
         all:{
             a: {
                 html: "hello" ,
                 css: {color: "violet"  ,background: "green"}
              } ,
             aa:{
                 text: "htm" ,
                 css: {color: "green"  ,background: "violet"}
              }
        }
}).css({textAlign : "center" ,  font: "6em/" + htm(window).height()/2 + "px htm"})

console.log(htm(htl.a).html())  //hello , htm(htl.a) === Jquery(htl.a)
console.log(htl.aa.textContent) //htm
</pre>
link:  <a href= "h.htm"> http://gpyun.github.io/h.htm </a>
</p>


<p>
"all" option : Array value , "o" option , (Vertical)
<pre>
var htl=htm.contain(document , {
            all: [ 1 , "200px" , 1.5] ,  // or all:[{pn:1} , {pn:"200px"} , {pn:1.5}]
            
            o : 1                        //1px ,  [ contain[0] , "o" Object , contain[1] , "o" Object , contain[2]]
})

var h = [htl.contain[0].clientHeight , htl.contain[1].clientHeight , htl.contain[2].clientHeight ]
console.log(h[1])                       // 200
console.log(h[0]/ h[2])                 // = 1 : 1.5
console.log(h[0] + h[1] +h[2])          // = htm(window).height() - 2px  , two "o" Object : total 2px
</pre>
link:  <a href= "p.htm"> http://gpyun.github.io/p.htm </a>
</p>
<p>
"all" option : Array value , "ty" option : "|" (Horizontal 1 : 2 : 3)
<pre>
htm.contain(document , {
        ty: "|" , 
        all:[
             {
                 pn: 1,
              } ,
             {
                 pn:2 ,
                 html: "&lt;a href='https://github.com/gpyun'&gt;https://github.com/gpyun&lt;/a&gt;" ,
                 css: {textAlign : "center" , background:"violet" , lineHeight : htm(window).height() + "px"}
              } ,
             {
                 pn:3
              }
            ]
    })
or
htm.contain(document , {
        ty: "|" , 
        all:[
              1 ,
              {
                 pn:2 ,
                 html: "&lt;a href='https://github.com/gpyun'&gt;https://github.com/gpyun&lt;/a&gt;" ,
                 css: {textAlign : "center" , background:"violet" , lineHeight : htm(window).height() + "px"}
               },
              3
            ]
})
</pre>
link:  <a href= "l.htm"> http://gpyun.github.io/l.htm </a>
</p>
<p>
 item "contain" option 
<pre>
var htl = htm.contain(document , {
        all:{                                // Vertical 1 : 1
             a: {
                 contain:{
                          ty: "|" ,
                          all: [             // Horizontal 1 : 1 : 1 : 1 : 1         
                                {
                                 html:  "h" ,
                                 css: {color: "green"  ,background: "lightgreen"}
                                 }  ,
                                {
                                 html:  "e" ,
                                 }  ,
                                {
                                 html:  "l" ,
                                 css: {color: "green"  ,background: "lightgreen"}
                                 }  ,
                                {
                                 html:  "l" ,
                                 }  ,
                                {
                                 html:  "o" ,
                                 css: {color: "green"  ,background: "lightgreen"}
                                 }
                               ]
                 }   ,
                 css: {color: "violet"  ,background: "green"}
              } ,
             aa:{
                 text: "htm" ,
                 css: {color: "green"  ,background: "violet"}
              }
          }
}).css({textAlign : "center" ,  font: "6em/" + htm(window).height()/2 + "px htm"})
</pre>
link:  <a href= "hl.htm"> http://gpyun.github.io/hl.htm </a>
<p>