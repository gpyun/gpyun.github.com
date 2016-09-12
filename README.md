<h3> How </h3>
 <pre>
&lt;!doctype html&gt;
&lt;html&gt;
&lt;script src="jquery.js"&gt;&lt;/script&gt;
&lt;script src="htm.js"&gt;&lt;/script&gt;
&lt;script&gt;
.........
&lt;/script&gt;
&lt;/html&gt;
</pre>
<h3>More...</h3>


<pre>
      htm.contain(document , {
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
</pre>
link:  <a href= "h.htm"> http://gpyun.github.io/h.htm </a>