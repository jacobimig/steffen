(this.webpackJsonpsteffen=this.webpackJsonpsteffen||[]).push([[0],{27:function(e,t,i){},34:function(e,t,i){"use strict";i.r(t);var a=i(1),s=i.n(a),r=i(19),c=i.n(r),n=(i(27),i(7)),o=i(2),l=i(0),u=function(){return Object(l.jsx)("main",{class:"homeBody"})},d=i(22),m=i(8),j=[{id:1,title:"flees",category:"landscape",price:255.99,img:"../src/images/landscape1.jpg",desc:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed "},{id:2,title:"fields",category:"landscape",price:223.99,img:"../src/images/homeBkg.jpg",desc:"vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats "},{id:3,title:"feeding time",category:"animals",price:196.99,img:"../src/images/homeBkg.jpg",desc:"ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."},{id:4,title:"cow",category:"animals",price:200.99,img:"./images/animals2.jpg",desc:"Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, "},{id:5,title:"river",category:"landscape",price:202.99,img:"./images/landscape4.jpg",desc:"franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up "},{id:6,title:"waterlily",category:"flowers",price:180.99,img:"./images/flower1.jpg",desc:"Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"},{id:7,title:"plant",category:"flowers",price:230.99,img:"./images/flower2.jpg",desc:"carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird "},{id:8,title:"color overflow",category:"flowers",price:120.99,img:"./images/flower3.jpg",desc:"on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  "},{id:9,title:"country delight",category:"landscape",price:196.99,img:"./images/landscape5.jpg",desc:"skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."}],b=function(e){var t=e.categories,i=e.filterArtwork;return Object(l.jsx)("div",{className:"artworkButtons",children:t.map((function(e,t){return Object(l.jsx)("section",{children:Object(l.jsx)("button",{type:"button",onClick:function(){return i(e)},children:e},t)})}))})},p=function(){var e=Object(a.useState)(j),t=Object(m.a)(e,2),i=t[0],s=t[1],r=["all"].concat(Object(d.a)(new Set(i.map((function(e){return e.category}))))),c=Object(a.useState)(r),o=Object(m.a)(c,2),u=o[0];o[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{categories:u,filterArtwork:function(e){if("all"!==e){var t=j.filter((function(t){return e===t.category}));s(t),console.log(t)}else s(j)}}),Object(l.jsx)("div",{className:"artworkContainer",children:i.map((function(e){var t=e.id,i=e.title,a=e.img,s=e.desc,r=e.price;return Object(l.jsx)("section",{className:"artworkSection",children:Object(l.jsxs)("div",{className:"artworkGrid",children:[Object(l.jsx)("img",{src:a,alt:i}),Object(l.jsxs)("div",{className:"artworkInfo",children:[Object(l.jsx)("h2",{children:a}),Object(l.jsx)("h4",{children:i}),Object(l.jsxs)("p",{children:["$",r]}),Object(l.jsx)("hr",{}),Object(l.jsx)("p",{children:"".concat(s.slice(0,1).toUpperCase()).concat(s.slice(1))}),Object(l.jsx)(n.b,{to:"/singleartwork/".concat(t),children:"Learn more"})]})]})},t)}))})]})},h=function(){var e=Object(a.useState)("default name"),t=Object(m.a)(e,2),i=t[0],s=t[1],r=Object(a.useState)("default price"),c=Object(m.a)(r,2),u=c[0],d=c[1],b=Object(a.useState)("default img"),p=Object(m.a)(b,2),h=p[0],g=p[1],f=Object(a.useState)("default desc"),O=Object(m.a)(f,2),x=O[0],v=O[1],w=Object(o.f)().id,k={};return Object(a.useEffect)((function(){k=j.find((function(e){return e.id===parseInt(w)})),g(k.img),s(k.title),d(k.price),v(k.desc),console.log(k.img)}),[]),Object(l.jsxs)("section",{className:"singleArtwork-section",children:[Object(l.jsx)("h2",{children:i}),Object(l.jsxs)("p",{children:["$",u]}),Object(l.jsx)("img",{src:".".concat(h),alt:i}),Object(l.jsx)("p",{children:"".concat(x.slice(0,1).toUpperCase()).concat(x.slice(1))}),Object(l.jsx)(n.b,{to:"/artwork",children:"back to artwork"})]})},g=i(10),f=function(){var e=Object(a.useState)(!0),t=Object(m.a)(e,2),i=t[0],s=t[1],r=Object(a.useRef)(null),c=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=c.current.getBoundingClientRect().height;console.log(e),r.current.style.height=i?"".concat(e+10,"px"):"0px"}),[i]),Object(l.jsxs)("header",{children:[Object(l.jsxs)("div",{className:"navMain",children:[Object(l.jsx)("h1",{children:"poleen steffen"}),Object(l.jsx)("button",{onClick:function(){return s(!i)},children:Object(l.jsx)(g.a,{})})]}),Object(l.jsx)("nav",{children:Object(l.jsx)("div",{className:"linksContainer",ref:r,children:Object(l.jsxs)("div",{ref:c,children:[Object(l.jsx)(n.b,{to:"/",children:"Home"}),Object(l.jsx)(n.b,{to:"/artwork",children:"Artwork"}),Object(l.jsx)(n.b,{to:"/about",children:"About"})]})})})]})},O={id:1,name:"joleene steffen",occupation:"owner",img:"../src/images/homeBkg.jpg",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, facilis repellat. Nemo tempora aut animi! Adipisci, commodi quam ipsum sed, dolores accusamus maiores soluta distinctio illo laudantium asperiores enim a. Molestiae error deserunt nesciunt veniam esse iste magni sed pariatur, natus repudiandae placeat nisi asperiores, aperiam facere ratione culpa! Corrupti dolor voluptates, nam quae velit deserunt? Temporibus tenetur doloremque maiores magni eum rem deleniti recusandae asperiores, adipisci iusto corporis dolor odit provident aperiam natus possimus harum facere, enim minus facilis optio? Ad provident maiores id adipisci quos minus, delectus quod sit officia ullam deserunt dolores accusamus voluptates ducimus nulla earum commodi facilis sed fuga necessitatibus. Aperiam, quam reiciendis? Fuga molestiae perspiciatis iste error atque rerum nostrum quae ab recusandae in, minima voluptas reprehenderit laborum quidem, enim quaerat odio nisi veniam? Assumenda non, magni similique itaque maiores, quo soluta suscipit obcaecati, expedita architecto cupiditate dolorem ipsa doloribus beatae modi saepe inventore quasi qui minus blanditiis dolor quas neque! Consequuntur quas sequi quod ullam, animi laboriosam, quia maiores officia eius, earum iure sapiente! Iure enim quibusdam vel error tempora facere assumenda! Eum ipsa minus placeat minima, sunt velit. Debitis, iste error officia suscipit fuga a. Provident cumque voluptas quam at ut, mollitia error doloribus laboriosam ipsum nisi quae reprehenderit quasi repellendus aut facilis itaque iure, vitae vel nemo odio aspernatur? Expedita deleniti repellendus dignissimos sunt, temporibus quasi soluta dicta autem voluptas nobis fugit fugiat enim odit praesentium, ullam harum nulla veritatis? Itaque minima eligendi tempora labore et harum tenetur vitae, eveniet a, aperiam voluptates fugit odio ea, laboriosam aliquid culpa! Iusto temporibus vel magni distinctio non, nulla atque asperiores praesentium reiciendis quos sequi. Nulla numquam sunt minus sit iure consectetur! Nam, qui accusamus, assumenda nihil et impedit, deserunt temporibus ipsum sint repellendus sit! A, possimus unde. Sapiente exercitationem totam adipisci tempore itaque!"},x=function(){return Object(l.jsxs)("main",{class:"aboutBody",children:[Object(l.jsx)("div",{class:"aboutImg",children:Object(l.jsx)("img",{src:"".concat(O.img),alt:O.name})}),Object(l.jsxs)("div",{class:"aboutText",children:[Object(l.jsx)("h2",{children:O.name}),Object(l.jsx)("h4",{children:O.occupation}),Object(l.jsx)("p",{children:O.text})]})]})},v=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Error Page"})})},w=function(){return Object(l.jsxs)("footer",{children:[Object(l.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",children:Object(l.jsx)(g.b,{})}),Object(l.jsx)("a",{href:"https://www.twitter.com/",target:"_blank",children:Object(l.jsx)(g.d,{})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/",target:"_blank",children:Object(l.jsx)(g.c,{})})]})};var k=function(){return Object(l.jsxs)(n.a,{children:[Object(l.jsx)(f,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",children:Object(l.jsx)(u,{})}),Object(l.jsxs)(o.a,{path:"/artwork",children:[Object(l.jsx)(p,{}),Object(l.jsx)(w,{})]}),Object(l.jsxs)(o.a,{path:"/about",children:[Object(l.jsx)(x,{}),Object(l.jsx)(w,{})]}),Object(l.jsx)(o.a,{path:"/singleartwork/:id",children:Object(l.jsx)(h,{})}),Object(l.jsxs)(o.a,{path:"*",children:[Object(l.jsx)(v,{}),Object(l.jsx)(w,{})]})]})]})},q=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,35)).then((function(t){var i=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;i(e),a(e),s(e),r(e),c(e)}))};c.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),q()}},[[34,1,2]]]);
//# sourceMappingURL=main.d2aa79cd.chunk.js.map