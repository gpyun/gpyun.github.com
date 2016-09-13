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

<h3>More...</h3>

htm.contain(element , option)
<h6>element: HTMLElement or Jquery element</h6>
<h6>option : {
<li>           ty: "|" (Horizontal) or other value (Vertical) </li>
<li>           all: Array or Object value</li>
<li>           o:   Integer or Object value , represent thickness (like &lt;hr&gt; tag element) </li>   
            } </h6>

<pre>

//"all" option : Object value , (Vertical 1 : 1)

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
//"all" option : Array value , "ty" option : "|" (Horizontal 1 : 2 : 3)

htm.contain(document , {
        ty: "|" , 
        all:[
             {
                 pn: 1,
              } ,
             {
                 pn:2 ,
                 text: "hello" ,
                 css: {color: "lime"  ,background: "violet"}
              } ,
             {
                 pn:3
              }
            ]
}).css({textAlign : "center" ,  font: "6em/" + htm(window).height() + "px htm"})
</pre>
or

<pre>
htm.contain(document , {
        ty: "|" , 
        all:[
              1 ,
              {
                 pn:2 ,
                 text: "htm" ,
                 css: {color: "lime"  ,background: "violet"}
               } ,
              3
            ]
}).css({textAlign : "center" ,  font: "6em/" + htm(window).height() + "px htm"})
</pre>
link:  <a href= "l.htm"> http://gpyun.github.io/l.htm </a>