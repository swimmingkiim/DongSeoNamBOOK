(this["webpackJsonpdong-seo-nam-book"]=this["webpackJsonpdong-seo-nam-book"]||[]).push([[0],{107:function(e,a,t){},109:function(e,a,t){e.exports=t.p+"static/media/Don_Quixote.6dd9cf10.pdf"},110:function(e,a,t){},111:function(e,a,t){},112:function(e,a,t){},113:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkBAUPHyvp5RUlAAABvElEQVRIx+3UPUwUYRDG8d+eejE5cgd+BG38QDCiaGFCbeFHYmNv4lUmJjYm2kCsrBSaM7FSSmloKbTAmFirHaIGJXo0ihhgiRpjzK3FLrDsHZB4FsY4W+y77zMzO/Ofd5f/1rQFyf2yYkb57JHpZL3XKTsyeuhuOkFkMOOw3Tn39WNQ2ai5jN4Xx64kCGSt3YjnAsedN1OnpiKmEDVssN2sT9obahEmyaEj2SqLlq+aqiF5o0blDamqpdQLSURX3EIkqGshsEfZpAibdBo2nakyiUonOOZsymHWY9XlKZy0M6U9NL4UtXlV1rbU+pAB/Vrw1S0PGmBcPgeNWoAWeVdwxw9fGk4hEuRSW1mIFQVQUFkDoo0hHsbr9SCmGWQhDqu6gZGGEBPbCCJc/Eshvm0WYlLF70OccqA5iB1/COJKBX0p8bt3nvmQPM1ht177bV17jFdX/TYKuvSadE8nplxy0FNvfEv5zLi98jnHvdaEQosWvLJgizOuOYEnKsb81Kpbq6KSknj8A3GCpbfnlJQUbdMtNGHcR9dx0y5H9Sh6ad6iUKi2VEU9utj2OaJHmzGB0+a9MOG9f9N+AZzSxtnQ4eJ7AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA0LTA1VDE1OjMxOjQzKzAwOjAw3A/9OwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wNC0wNVQxNTozMTo0MyswMDowMK1SRYcAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"},116:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),c=t(49),r=t.n(c),m=t(35),l=(t(57),t(19)),s=(t(58),t(59),t(60),function(e){var a=e.title;return o.a.createElement("h1",{className:"BookTitle"},a)}),i=(t(61),function(){return o.a.createElement("section",{className:"BookListItemWrapper"},o.a.createElement("ul",null,["\ud574\ub9ac\ud3ec\ud130\uc640 \ub9c8\ubc95\uc0ac\uc758 \ub3cc","\ud574\ub9ac\ud3ec\ud130\uc640 \ube44\ubc00\uc758 \ubc29","\ud574\ub9ac\ud3ec\ud130\uc640 \uc544\uc988\uce74\ubc18\uc758 \uc8c4\uc218","\ud574\ub9ac\ud3ec\ud130\uc640 \ubd88\uc758 \uc794","\ud574\ub9ac\ud3ec\ud130\uc640 \ubd88\uc0ac\uc870 \uae30\uc0ac\ub2e8","\ud574\ub9ac\ud3ec\ud130\uc640 \uc8fd\uc74c\uc758 \uc131\ubb3c"].map((function(e){var a="".concat("/DongSeoNamBOOK","/book-name/").concat(e);return o.a.createElement("a",{href:a},o.a.createElement("li",null,e))}))))}),u=function(){return o.a.createElement("section",{className:"BookListWrapper container"},o.a.createElement(s,{title:"BOOK LIST"}),o.a.createElement(i,null))},A=t(30),d=t(25);t(107),t(108);d.pdfjs.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(d.pdfjs.version,"/pdf.worker.js");var E=function(e){e.match;var a=Object(n.useState)(0),c=Object(A.a)(a,2),r=c[0],m=c[1],l=Object(n.useState)(1),s=Object(A.a)(l,2),i=s[0],u=s[1],E=Object(n.useState)(.5*window.innerWidth),p=Object(A.a)(E,2),f=p[0],N=p[1],b=t(109);console.log(window.innerWidth);return Object(n.useEffect)((function(){window.addEventListener("resize",(function(e){console.log(.8*window.innerHeight),N(.5*window.innerWidth)}))}),[]),o.a.createElement("section",{className:"PDFviewerWrapper container"},o.a.createElement("menu",null,o.a.createElement("button",{id:"goToPrevPage",className:"changePageButton",onClick:function(){console.log(i),u(i-1)}},"Prev"),o.a.createElement("span",null,i," of ",r),o.a.createElement("button",{id:"goToNextPage",className:"changePageButton",onClick:function(){console.log(i),u(i+1)}},"Next")),o.a.createElement(d.Document,{file:b,onLoadSuccess:function(e){var a=e.numPages;console.log("onLoad completed"),m(a)}},o.a.createElement(d.Page,{className:"PDFPage",pageNumber:i,width:f})))},p=(t(110),t(111),function(e){var a={width:e.ratio+"%"};return o.a.createElement("div",{className:"ProgressBarWrapper"},o.a.createElement("span",null,"Progress"),o.a.createElement("div",{className:"fullBar"},o.a.createElement("div",{className:"readBar",style:a})))}),f=(t(112),function(e){var a=e.memoInfo;return o.a.createElement("article",{className:"BookMemoWrapper"},o.a.createElement("section",{className:"innerMemoWrapper"},o.a.createElement("p",null,a.memo)),o.a.createElement("section",{className:"labelsAndButtons"},o.a.createElement("label",null,a.bookName),o.a.createElement("label",null,a.pageNum+"\ucabd"),o.a.createElement("label",null,a.rowNum+"\ubc88\uc9f8 \uc904"),o.a.createElement("button",{className:"modifyButton"},"\uc218\uc815"),o.a.createElement("button",{className:"deleteButton"},"\uc0ad\uc81c"),o.a.createElement("button",{className:"saveButton"},"\uc800\uc7a5")))}),N=function(e){var a=e.match,t=a.params.bookName?a.params.bookName:"ALL MEMO";return Object(n.useEffect)((function(){"/DongSeoNamBOOK"===window.location.pathname||"/DongSeoNamBOOK/"===window.location.pathname?document.getElementsByClassName("AllMemoWrapper")[0].classList.remove("bookMode"):document.getElementsByClassName("AllMemoWrapper")[0].classList.add("bookMode")}),[]),o.a.createElement("section",{className:"AllMemoWrapper container"},o.a.createElement(s,{title:t}),o.a.createElement(p,{ratio:80}),o.a.createElement("div",{className:"memoWrapper"},[{bookId:1,memoId:1,bookName:"\ud574\ub9ac\ud3ec\ud130\uc640 \ub9c8\ubc95\uc0ac\uc758 \ub3cc",pageNum:123,rowNum:15,quote:"\ud574\uadf8\ub9ac\ub4dc\uac00 \ub354\ub4e4\ub9ac\uc758 \uc5c9\ub369\uc774\uc5d0\uc11c \ub3fc\uc9c0\uaf2c\ub9ac\uac00 \uc790\ub77c\ub0ac\ub2e4.",memo:"\ud558\uc9c0\ub9cc \uc9c0\uae08\uae4c\uc9c0 \ucd9c\uac04\ub41c \ucc45\ub4e4\uc740 J.K. \ub864\ub9c1\uc774 \ud3bc\uccd0 \ub098\uac00\ub294 \ud310\ud0c0\uc9c0 \uc138\uacc4\uc758 \uaddc\ubaa8\uac00 \uc5b4\ub290 \uc815\ub3c4\uc774\uba70 \uadf8 \uc18d\uc5d0 \uc5b4\ub5a0\ud55c \uc18c\uc124\uc801 \uc7a5\uce58\ub97c \uc2ec\uc5b4 \ub193\uc558\ub294\uc9c0 \uc54c \uc218 \uc5c6\ub294 \uc0c1\ud0dc\uc5d0\uc11c \ubc88\uc5ed \uc791\uc5c5\uc774 \uc774\ub8e8\uc5b4\uc84c\ub2e4. \ub610\ud55c 1~7\ud3b8 \ubaa8\ub450 \uc644\uacb0\uc131\uc744 \uac16\ucd94\uc5c8\uc9c0\ub9cc, \uc2dc\ub9ac\uc988\uc758 \ud2b9\uc131\uc0c1 \ud3b8\uacfc \ud3b8\uc744 \uc774\uc5b4 \uc8fc\uba70 \uc791\ud488 \uc804\uccb4\ub97c \uad00\ud1b5\ud558\ub294 \uc11c\uc0ac\uc758 \uac1c\uc5f0\uc131\uacfc \uc644\uacb0\uc131\uc740 \ub9c8\uc9c0\ub9c9 \ud3b8\uc774 \ucd9c\uac04\ub41c \uc774\ud6c4\uc5d0\ub098 \ud30c\uc545\ud560 \uc218\ubc16\uc5d0 \uc5c6\uc5c8\ub2e4. \uadf8\ub7ec\ub2e4 \ubcf4\ub2c8 \uc791\uac00\uac00 \uc5b4\ub290 \uc7a5\uba74\uc5d0 \ubcf5\uc120\uc744 \uae54\uc544 \ub450\uc5c8\uace0, \uc5b4\ub290 \uc7a5\uba74\uc774 \uc791\uac00\uac00 \ucc3d\uc870\ud55c \uc138\uacc4\uad00\uc744 \uc774\ud574\ud558\ub294 \uc911\uc694\ud55c \uc5ed\ud560\uc744 \ud558\ub294\uc9c0 \uc758\ubbf8\ub97c \ud30c\uc545\ud558\uba70 \ubc88\uc5ed\ud558\uae30\uc5d0\ub294 \ud55c\uacc4\uac00 \uc788\uc5c8\ub2e4."},{bookId:1,memoId:2,bookName:"\ud574\ub9ac\ud3ec\ud130\uc640 \ub9c8\ubc95\uc0ac\uc758 \ub3cc",pageNum:123,rowNum:15,quote:"\ud574\uadf8\ub9ac\ub4dc\uac00 \ub354\ub4e4\ub9ac\uc758 \uc5c9\ub369\uc774\uc5d0\uc11c \ub3fc\uc9c0\uaf2c\ub9ac\uac00 \uc790\ub77c\ub0ac\ub2e4.",memo:"20\uc8fc\ub144\uc744 \ub9de\uc544 \uc0c8\ub86d\uac8c \ucd9c\uac04\ud55c <\ud574\ub9ac \ud3ec\ud130> \uc2dc\ub9ac\uc988\ub294 \u201821\uc138\uae30 \uace0\uc804\u2019\uc774\ub77c \ubd88\ub9b4 \ub9cc\ud55c \ud488\uaca9\uc5d0 \ub9de\ucdb0 \uc791\ud488\uc758 \uc644\uc131\ub3c4\ub97c \ub192\uc600\ub2e4. 7\uad8c <\ud574\ub9ac \ud3ec\ud130\uc640 \uc8fd\uc74c\uc758 \uc131\ubb3c>\ub85c \uc644\uac04\ub41c \uae30\uc874\uc758 <\ud574\ub9ac \ud3ec\ud130> \uc2dc\ub9ac\uc988\ub294 \ube48\ud2c8\uc5c6\ub294 \uc18c\uc124\uc801 \uad6c\uc131\uacfc \uc0dd\uc0dd\ud55c \uce90\ub9ad\ud130 \uadf8\ub9ac\uace0 \ub9c8\ubc95 \uc138\uacc4\ub97c \uc815\uad50\ud558\uac8c \ubb18\uc0ac\ud558\uba70 \ud48d\ubd80\ud55c \uc0c1\uc0c1\ub825\uc774 \ub3cb\ubcf4\uc774\uba74\uc11c\ub3c4 \uc815\ubc00\ud55c \uc138\uacc4\uad00\uc744 \uad6c\ucd95\ud574 \ub098\uac14\ub2e4."},{bookId:1,memoId:3,bookName:"\ud574\ub9ac\ud3ec\ud130\uc640 \ub9c8\ubc95\uc0ac\uc758 \ub3cc",pageNum:123,rowNum:15,quote:"\ud574\uadf8\ub9ac\ub4dc\uac00 \ub354\ub4e4\ub9ac\uc758 \uc5c9\ub369\uc774\uc5d0\uc11c \ub3fc\uc9c0\uaf2c\ub9ac\uac00 \uc790\ub77c\ub0ac\ub2e4.",memo:"\uc774\ubc88\uc5d0 \uc120\ubcf4\uc774\ub294 <\ud574\ub9ac \ud3ec\ud130> \uc2dc\ub9ac\uc988\uc5d0\ub294 J.K. \ub864\ub9c1\uc774 \uc791\ud488 \uc18d\uc5d0 \uc774\ub8e9\ud574\ub193\uc740 \ubb38\ud559\uc801 \uc131\ucde8\uac00 \uc644\ubcbd\ud558\uac8c \uad6c\ud604\ub418\uc5b4 \uc788\ub2e4. \ubcf5\uc120\uacfc \ubc18\uc804\uc744 \uc120\uc0ac\ud558\ub294 \ubb38\ud559\uc801 \uc7a5\uce58\ub4e4\uc744 \ubcf4\ub2e4 \uc815\uad50\ud558\uace0 \uc138\ub828\ub418\uac8c \ub2e4\ub4ec\uc5c8\uc73c\uba70, \uc778\ubb3c\ub4e4 \uc0ac\uc774\uc758 \uad00\uacc4\ub098 \uadf8\ub4e4\uc758 \uc228\uaca8\uc9c4 \ube44\ubc00 \uadf8\ub9ac\uace0 \uc131\uaca9\uc774 \ub3c4\ub4dc\ub77c\uc9c0\ub294 \ub9d0\ud22c\uc758 \ubbf8\uc138\ud55c \ub258\uc559\uc2a4\uae4c\uc9c0 \uc810\uac80\ud588\ub2e4. <\ud574\ub9ac \ud3ec\ud130>\uc758 \uc138\uacc4\uc5d0 \ucc98\uc74c \ubc1c\uc744 \ub4e4\uc5ec\ub193\ub294 \ub3c5\uc790\ub294 \ubb3c\ub860, \uadf8\ub3d9\uc548 <\ud574\ub9ac \ud3ec\ud130>\uc758 \uc138\uacc4\ub97c \uc990\uaca8 \ucc3e\uc544\uc654\ub358 \ub3c5\uc790 \ubaa8\ub450\uc5d0\uac8c \uc644\uc131\ub3c4 \ub192\uc740 \ub9cc\uc871\uacfc \uac10\ub3d9\uc744 \uc120\uc0ac\ud560 \uac83\uc774\ub2e4."}].map((function(e){return o.a.createElement(f,{memoInfo:e})})),o.a.createElement("button",{className:"addMemo"},"+")))},b=function(){var e=t(113);return o.a.createElement("div",{id:"bigWrapper"},o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:"true",path:"/DongSeoNamBOOK/",component:u}),o.a.createElement(l.a,{path:"/DongSeoNamBOOK/book-name/*",component:E})),o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:"true",path:"/DongSeoNamBOOK/",component:N}),o.a.createElement(l.a,{path:"/DongSeoNamBOOK/book-name/*",component:N})),o.a.createElement("a",{className:"goToHome",href:"/DongSeoNamBOOK"},o.a.createElement("img",{src:e,alt:"HOME"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(m.a,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},27:function(e,a){function t(e){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=27},52:function(e,a,t){e.exports=t(116)},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},65:function(e,a){},67:function(e,a){},68:function(e,a){},69:function(e,a){},70:function(e,a){}},[[52,1,2]]]);
//# sourceMappingURL=main.4dfe61a8.chunk.js.map