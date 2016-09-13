htm =   ($)
htm.of =   function(a,h,pn){
  if(pn){
   for (var pl=a, aa=(h>=a)?1:-1, h=h*aa ; h>=pl*aa ;){
	  var p=pn(pl);
	  pl = (typeof(p)=="number"? p:pl) +aa ;
   }
  }else{
   for (var pn=true ; pn& eval(a) ;) pn= !h()
  }
}  



htm.contain = function (htmcontain , p , contain){
  var ty = function (h){
       return  ({}).toString.apply(h).match(/[^ ]*(?=\])/)
  }
  contain = (htmcontain == window | htmcontain == document) ? htmcontain = htm(document.activeElement).css({"margin" : 0.01 , height: htm(window).height()}): htm(htmcontain)
  typeof(htmcontain)== "object" ? "" : htmcontain = contain	 
  p= ty(p)== "Object" ?p:{} ;
  var pll,aa,pal= [] ,pan= 0,a={},pn,tp,t,z,h= {},np, tt , ap
  p.a = 0
  p.all ="all" in p? p.all: [1,1]
  p.ty=="|"? (np= "height",pn= "width"):(np= "width" , pn= "height")
  p.pntotal = "pntotal" in p ? p.pntotal : contain[pn]() ? contain[pn]() : 100
  tt  ="tp"
  
  for (aa in p.all){
  	     p.aa= p.all[aa]
	     tp  =   htm("<tp>") 
        if (ty(p.aa) == "Object" ? p.aa.tag == "margin" ? "" : "tag" in p.aa  : ""){
             tp= typeof(p.aa.tag)== "object" ? "height" in p.aa.tag ? p.aa.tag : htm(p.aa.tag) : htm(p.aa.tag)
        	   tt= tt  + "," + tp[0].tagName     	 
         }
         tp.css(np,"100%").css("float",  p.aa.float ? p.aa.float : "left")    
         if (ty(p.aa) == "Object") {
		          for (z in p.aa){
		                   ("contain" == z | "html" == z | "on" == z) ? "" :  (ty(tp[z]) == "Function" )? tp[z](p.aa[z]) : tp[0][z] = p.aa[z]
		          }
		          //console.info(tp , tt)
			     if ( "on" in p.aa){
			       for (t in p.aa.on){
			       	   ("on" + t) in tp[0] ? tp.on(t , p.aa.on[t]) : "ham" in tp? tp.ham().on(t , p.aa.on[t]) : tp.on(t , p.aa.on[t])
			       }
			     }    
			     pll= "pn" in p.aa ?    p.aa.pn : 1
			     tp[0].pn= pll
             	if  ( p.aa.tag == "margin"){
		               						   tp.css( "margin" , pll/ 2)
		               					     p.margin = p.margin? p.margin +pll	: pll							
	  		               				    pll=  0  		
	  		               				    //console.info("htm" , p.pntotal)
				}
         }else{
	              pll = p.aa  
         }
         pal = pal. concat(pal[0]?  ("o" in p ? [htm("<t>") , tp ] : tp) : tp)   
	    
 	    if(1* pll){
 	          h[p.a] = pll =  pll  * 1
 	          pan=pan+ pll
	    }else{
	 	       a[p.a] =  pll
	    }
	 	p.a= p.a+1
  }
  
  
  
  contain.html(pal) ;
  
  tp= contain.contents(tt)
  t= contain.contents("t")
  
  if("o" in p){
    t.css({"cursor": "col-resize","text-align":"center","float": "left","background" : "#6f6f9f"})
    t[np]("100%")
   if (ty(p.o) == "Object") {
          for (z in p.o){
                (ty(t[z]) == "Function" )? t[z](p.o[z]) : t[z] = p.o[z]
		}
		pn in p.o? "" : t[pn](1/p.pntotal*100+"%")
   }else{
          t[pn](p.o/p.pntotal*100+"%")  
   }
  }
  
  if(typeof(p.config)== "function"){p.config(t,tp)}
  
  pll = p.margin ? p.margin : 0

       tp.pn  = []

  for (aa in a){
  	   htm(tp.get(aa)).css(pn,a[aa]) ;
a[aa] = htm(tp.get(aa))[pn]()
	pll = pll + a[aa]
	tp.pn[aa] = a[aa]/p.pntotal*100+"%"
	   htm(tp.get(aa)).css(pn, tp.pn[aa])
  }
  
  pll = p.pntotal- (t[pn]()*p.a - t[pn]()) - pll	  
  
  if (pll>0){
   for (aa in h){
   	 htm(tp.get(aa)).css(pn, tp.pn[aa] = h[aa]/pan*pll/p.pntotal*100+"%") ;	  
   }
  }
  
  htm("p", contain).css("margin", (t.height()-$("p",contain).height())/2 /t.width()*100 + "% "+((t.width()-htm("p",contain).width())/2 /t.width()*100)+ "%") ;
 
  
  if("o" in p){
//   if(htm(":text").length){
//  	 pll= htm(":text")[0];
//   }else{
//  	 pll = htm("<input/>")
//  	 htm(t[0]).wrapInner(pll) ;
//  	 pll.offset({left:-1000}) 
//   }
//   t.(function(h){
//	   tt= htm(h.target) ;
//	  htm(pll).focus() ;
//	 at=tt.prev()[pn]() +tt.next()[pn]() ;
//   }) ; 
//   if(p.ty=="|"){
//    contain.mousemove(function(ºÅt){
//	  if (tt=="|") return false ;
//	  if (ºÅt.which==1){
//		contain.css("cursor","col-resize") ;
//		var ºÅtp=ºÅt.pageX+ (tt.prev().offset().left + tt.width()/2+ (tt.offset().left- tt.prev().offset().left- tt.prev().width())) *(-1) ;
//	   ºÅtp=(ºÅtp>= at+ 2*(tt.prev().offset().left - tt.offset().left + tt.prev().width()))?at+ 2*(tt.prev().offset().left - tt.offset().left + tt.prev().width()) : ºÅtp ;
//	   ºÅtp=1>ºÅtp?1:((1> at- ºÅtp)?at- 1:ºÅtp) ;
//	   if(ºÅt.pageX>tt.offset().left + tt.width()/2){
//	    tt.next().css("width",(at- ºÅtp)/contain.width()*100 + "%") ;
//	    tt.prev().css("width",ºÅtp/contain.width()*100 + "%") ;
//	   }else{
//	  	 tt.prev().css("width",ºÅtp/contain.width()*100 + "%") ;
//          tt.next().css("width",(at- ºÅtp)/contain.width()*100 + "%") ;
//        }
//	  }else{
//	      var tpl,pll  ;
//	     htm("tp,t",contain).each(function(pan,pal){
//           tpl=tpl?tpl+pal.offsetWidth : pal.offsetWidth
//           pll= pal
//        });
//         tpl= (contain.width()-(tpl+2))
//        if(tpl>=1) htm(pll).css("width",(htm(pll).width() +tpl)/contain.width()*100 + "%") ;
//	     tt="|" ;
//	     contain.css("cursor","") ;
//     }
//    })}
 }
 
 htmcontain.contain = tp	 

  ap = 0
  if(typeof(p.all)== "object"){
  	for (aa in p.all){
  		   tt=ty(p.all) == "Object" ? aa :  "a" + aa
  	        htmcontain[tt] = tp[ap]
  	        if(ty(p.all[aa]) == "Object"){
  	          if("html" in p.all[aa]) htm(tp[ap]).html(p.all[aa].html)
  	  	     if("contain" in p.all[aa]){
  	  	      if(htm(tp[ap]).contents()[0]){
  	  	                htmcontain[tt].HTM = htm(tp[ap]).contents()[0]
	  	  	           htm.contain(htmcontain[tt].HTM , p.all[aa].contain)
   	  	      }else{
   	  	       	      htm.contain(htmcontain[tt] , p.all[aa].contain)
		   	 }
  	  	     }
  	        }
	  	   ap=ap + 1
   }
  }
  	 
 htmcontain.contain.animate = function(all, pll ,lp){
 	         pal= [ ]
		    a=[ ]
	  	    p.all= all
		    			  			  
		    all= htm.contain(htm.pntotal=htm("<p>").css(pn , p.pntotal) , p)
	       tp.each(function(tpa, pan , np){
			   pan =htm(pan)
			   np= all.contain.pn[tpa]
			   	//console.log(np , tp.pn[tpa]) 
			   if (parseFloat(np) > parseFloat(tp.pn[tpa]) ){
			                pal = pal.concat({tp: pan , np: np })
 			    }else if(pll > 0){
 			    	     a = a.concat(pan.animate(pn== "height" ? {height:np} : {width:np} , pll))
		      }else{
			         pan[pn](np)
			         //if(lp)     if(p.a - 1 in aa ? 0 : tpa+1 == p.a)     lp()		 
		        }
		})
		pal.map(function(pan , tpa){
		         	    if(pll){	 
					            pal[tpa] = pan.tp.animate(pn== "height" ? {height:pan.np} : {width:  pan.np}, pll)
					     }else{
					                pan.tp[pn](pan.np)
					   			//if(lp) if(p.a - 1 in aa ? (pan|0) +1 == p.a : 0)       
					     }
		 })
       if(lp) htm.when.apply("" , pal.concat(a)).then(function(){
		                	                  lp()
	       })	   
  htmcontain.contain.pn=   all.contain.pn
	htmcontain.contain.array =  all
  }  
  htmcontain.contain.array = p.all
 return   htmcontain ;
}