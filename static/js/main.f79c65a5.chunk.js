(this.webpackJsonphulu=this.webpackJsonphulu||[]).push([[0],{31:function(e,t,n){e.exports=n(66)},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),i=n.n(r),o=(n(36),n(7)),l=(n(37),n(38),n(18)),s=n.n(l),m=n(20),u=n.n(m),h=n(21),d=n.n(h),f=n(22),v=n.n(f),p=n(23),E=n.n(p),_=n(24),g=n.n(_);var k=function(){return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header__icons"},c.a.createElement("div",{className:"header__icon header__icon--active"},c.a.createElement(s.a,null),c.a.createElement("p",null,"Home")),c.a.createElement("div",{className:"header__icon"},c.a.createElement(u.a,null),c.a.createElement("p",null,"Trending")),c.a.createElement("div",{className:"header__icon"},c.a.createElement(d.a,null),c.a.createElement("p",null,"Verified")),c.a.createElement("div",{className:"header__icon"},c.a.createElement(v.a,null),c.a.createElement("p",null,"Collections")),c.a.createElement("div",{className:"header__icon"},c.a.createElement(E.a,null),c.a.createElement("p",null,"Search")),c.a.createElement("div",{className:"header__icon"},c.a.createElement(g.a,null),c.a.createElement("p",null,"Account"))),c.a.createElement("img",{alt:"hulu-logo",src:"https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"}))},y=(n(44),"19f84e11932abbc79e6d83f82d6d1045"),w={fetchTrending:"/trending/all/week?api_key=".concat(y,"&language=en-US"),fetchTopRated:"/movie/top_rated?api_key=".concat(y,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(y,"&with-genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(y,"&with-genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(y,"&with-genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(y,"&with-genres=10749"),fetchMystery:"/discover/movie?api_key=".concat(y,"&with-genres=9648"),fetchSciFi:"/discover/movie?api_key=".concat(y,"&with-genres=878"),fetchWestern:"/discover/movie?api_key=".concat(y,"&with-genres=37"),fetchAnimation:"/discover/movie?api_key=".concat(y,"&with-genres=16"),fetchTV:"/discover/movie?api_key=".concat(y,"&with-genres=10770")};var C=function(e){var t=e.setSelectedOption;return c.a.createElement("div",{className:"nav"},c.a.createElement("h2",{onClick:function(){return t(w.fetchTrending)}},"Trending"),c.a.createElement("h2",{onClick:function(){return t(w.fetchTrending)}},"Top Rated"),c.a.createElement("h2",{onClick:function(){return t(w.fetchActionMovies)}},"Action"),c.a.createElement("h2",{onClick:function(){return t(w.fetchComedyMovies)}},"Comedy"),c.a.createElement("h2",{onClick:function(){return t(w.fetchHorrorMovies)}},"Horror"),c.a.createElement("h2",{onClick:function(){return t(w.fetchRomanceMovies)}},"Romance"),c.a.createElement("h2",{onClick:function(){return t(w.fetchMystery)}},"Mystery"),c.a.createElement("h2",{onClick:function(){return t(w.fetchSciFi)}},"Sci-Fi"),c.a.createElement("h2",{onClick:function(){return t(w.fetchWestern)}},"Western"),c.a.createElement("h2",{onClick:function(){return t(w.fetchAnimation)}},"Animation"),c.a.createElement("h2",{onClick:function(){return t(w.fetchTV)}},"TV Movie"))},b=n(8),M=n.n(b),N=n(25),T=(n(46),n(47),n(26)),O=n.n(T),S=n(27),j=n.n(S),A=Object(a.forwardRef)((function(e,t){var n=e.movie;return c.a.createElement("div",{ref:t,className:"videoCard"},c.a.createElement("img",{alt:"movie poster",src:"".concat("https://image.tmdb.org/t/p/original/").concat(n.backdrop_path||n.poster_path)}),c.a.createElement(O.a,{line:1,element:"p",truncateText:"...",text:n.overview}),c.a.createElement("h2",null,n.title||n.original_name," "),c.a.createElement("p",{className:"videoCard__stats"},n.media_type&&"".concat(n.media_type," \u2022 "),n.release_date||n.first_air_date," \u2022",c.a.createElement(j.a,null),n.vote_count," "))})),R=n(28),x=n.n(R).a.create({baseURL:"https://api.themoviedb.org/3"}),H=n(29);var V=function(e){var t=e.selectedOption,n=Object(a.useState)([]),r=Object(o.a)(n,2),i=r[0],l=r[1];return Object(a.useEffect)((function(){function e(){return(e=Object(N.a)(M.a.mark((function e(){var n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get(t);case 2:return n=e.sent,l(n.data.results),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),c.a.createElement("div",{className:"results"},c.a.createElement(H.a,null,i.map((function(e){return c.a.createElement(A,{key:e.id,movie:e})}))))};var F=function(){var e=Object(a.useState)(w.fetchTrending),t=Object(o.a)(e,2),n=t[0],r=t[1];return c.a.createElement("div",{className:"app"},c.a.createElement(k,null),c.a.createElement(C,{setSelectedOption:r}),c.a.createElement(V,{selectedOption:n}))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(F,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.f79c65a5.chunk.js.map