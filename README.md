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
<li>            ty: "|" (Horizontal) or other value (Vertical) </li>
<li>           all:  Array or Object value</li>
<li>             o: Integer or Object value , represent thickness (like &lt;hr&gt; tag element) </li>   
            }
<pre>
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
<li> All Jquery method </li> } </h6>


<pre>
//"all" option : Object value , (Vertical 1 : 1)

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
<pre>
//"all" option : Array value , "o" option , (Vertical)


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
                 html: "&lt;a href='https://github.com/gpyun'&gt;https://github.com/gpyun&lt;/a&gt;" ,
                 css: {textAlign : "center" , background:"violet" , lineHeight : htm(window).height() + "px"}
              } ,
             {
                 pn:3
              }
            ]
    })
//or
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
 
//item "contain" option 

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
   }).css({textAlign : "center" ,  font: "900 6em/" + htm(window).height()/2 + "px htm"})

</pre>
link:  <a href= "hl.htm"> http://gpyun.github.io/hl.htm </a>

<pre>
<tt>
//item option : on event
// on:{event: function(){...} , another event: function(){...} , ... }
</tt>

var htl=htm.contain(document , {
        all:{
             a: {
                 html:"click here background color change to pink" ,
                 on: {
                      click:function(){
                                 var htmla = htm(htl.a)
                                 if(htmla.text().match("pink")){
                                       htmla.css({color: "green" ,"background" : "pink"}).text("click here background color change to green")
                                  } else {
                                       htmla.css({color: "pink","background" : "green"}).text("click here background color change to pink")
                                  }
                            }
                     }
                 
              } ,               
             aa:{
                 text: "Not hover" ,
                 css: {color: "green"  ,background: "violet"} ,
                 hover : {                     //===htm(htl.aa).hover.apply(htm(htl.aa) , [function(){...} , function(){...}])
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