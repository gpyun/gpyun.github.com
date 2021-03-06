﻿<h3>Feature</h3>

<li> creat HTMLElement </li>
<li> like css flexbox
<li> convenient way to refer to an item in the container element and adjust item percent
<li> support  jquery method </li>
<li> support element event (onclick , ontouchstart...) and hammer.js event(tap,pan ...)
<li> support animation

<h3> How </h3>

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
If want to support Hammer.js event , must add "ham.js" (fork from "hammer.js")
<pre>&lt;script src="ham.js"&gt;&lt;/script&gt;</pre>

<h3>More...</h3>
htm.contain(container element , option)

<h6>element: HTMLElement or Jquery element</h6>
<h6>option : {
<li>            ty: "|" (Horizontal) or other value (Vertical) </li>
<li>           all:  Array or Object value</li>
<li>             o: Integer or Object value , represent thickness (like &lt;hr&gt; tag element) </li>   
            }

<pre>
htm.contain(element,{all:[ num , num , ...]}) //num >= 0
or
htm.contain(element,{all:[ item1:{option...} , item2:{option...} , ...]})                        
or   
htm.contain(element,{                         
                     all:{
                         item1:{option...} ,     //item.tagName== "TP" , &lt;tp&gt; element
                         item2:{option...} ,    
                         .
                         .
                         .
                       }
                    }
</pre>
item option : { 
<li>pn: number value (>= 0) or px length</li>
<li>tag: change "&lt;tp&gt;" element to other tag element</li>
<pre>
tag: "&lt;p&gt;"
tag: htm("&lt;a&gt;").css("float","left")
</pre> 
<li>contain: call function : htm.contain(item , {...})</li>
<li> All Jquery method </li> 
<li> on:{event: function(){...} , another event: function(){...} , ... }
} </h6>

<pre>
<tt>//"all" option : Object value , (Vertical 1 : 1)</tt>

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

console.log(htm(htl.a).html())  <tt>//hello , htm(htl.a) === Jquery(htl.a)</tt>
console.log(htl.aa.textContent) <tt>//htm</tt>
</pre>
link:  <a href= "h.htm"> http://gpyun.github.io/h.htm </a>
<pre>
<tt>//"all" option : Array value , "o" option , (Vertical)</tt>

var htl=htm.contain(document , {
            all: [ 1 , "200px" , 1.5] ,  <tt>// or all:[{pn:1} , {pn:"200px"} , {pn:1.5}]</tt>
            
            o : 1                        <tt>//1px ,  [ contain[0] , "o" Object , contain[1] , "o" Object , contain[2]]</tt>
})

var h = [htl.contain[0].clientHeight , htl.contain[1].clientHeight , htl.contain[2].clientHeight ]
console.log(h[1])                       <tt>// 200 </tt>
console.log(h[0]/ h[2])                 <tt>// = 1 : 1.5 </tt>
console.log(h[0] + h[1] +h[2])          <tt>// = htm(window).height() - 2px  , two "o" Object : total 2px </tt>
</pre>
link:  <a href= "p.htm"> http://gpyun.github.io/p.htm </a>

<pre>
<tt>//"all" option : Array value , "ty" option : "|" (Horizontal 1 : 2 : 3)</tt>

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
<tt>//or</tt>
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
<pre>
 <tt>//item "contain" option </tt>

var htl = htm.contain(document , {
        all:{                                <tt>// Vertical 1 : 1 </tt>
             a: {
                 contain:{
                          ty: "|" ,
                          all: [             <tt>// Horizontal 1 : 1 : 1 : 1 : 1 </tt>        
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
   }).css({textAlign : "center" ,  font: "900 6em/" + htm(window).height()/2 + "px htm"})

</pre>

link:  <a href= "hl.htm"> http://gpyun.github.io/hl.htm </a>
<pre>

<tt>//item option : on event and method.apply
// on:{event: function(){...} , another event: function(){...} , ... }
// method:{apply:[...]} === item.method.apply(item, [...])
</tt>
var htl=htm.contain(document , {
        all:{
             a: {
                 html:"click here background color change to pink" ,
                 on: {
                      click:function(){
                              var htmla = htm(htl.a)
                              if(htmla.text().match("pink")){
                                   htmla.css({color: "green","background":"pink"}).text("click here background color change to green")
                               } else {
                                   htmla.css({color: "pink","background":"green"}).text("click here background color change to pink")
                               }
                          }
                     }
                 
              } ,               
             aa:{
                 text: "Not hover" ,
                 css: {color: "green"  ,background: "violet"} ,
                 hover : {                     <tt>//===htm(htl.aa).hover.apply(htm(htl.aa) , [function(){...} , function(){...}])</tt>
                                apply :[
                                        function(){
                                               htl.aa.textContent = "Hover"     
                                        } ,
                                        function(){
                                               htl.aa.textContent = "Not hover"     
                                        }
                                       ]
                             } ,
              }
          }
}).css({textAlign : "center" ,  font: "2em/" + htm(window).height()/2 + "px htm"})
</pre>
link:  <a href= "hl.htm"> http://gpyun.github.io/pl.htm </a>