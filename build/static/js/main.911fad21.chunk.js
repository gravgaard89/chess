(this.webpackJsonpchess=this.webpackJsonpchess||[]).push([[0],{19:function(e,s,t){},20:function(e,s,t){},23:function(e,s,t){"use strict";t.r(s);var i,n,r,a,c,o,u,l,w,d,h,b,j,O,v=t(1),p=t.n(v),P=t(12),q=t.n(P),f=(t(19),t(3)),S=t(5),x=t(6),g=t(7),y=t(10),W=t(9),A=t(4),N=(t(11),t(20),t(14)),k=t(2),m=function(){function e(s,t){Object(S.a)(this,e),this.row=void 0,this.col=void 0,this.col=s,this.row=t}return Object(x.a)(e,[{key:"equals",value:function(e){return this.row==e.row&&this.col==e.col}},{key:"getBoardCoordinateRepresentation",value:function(){var e=8-this.row,s=8-this.col;return"(".concat(e+","+s,")")}},{key:"toString",value:function(){return"(".concat(this.row,",").concat(this.col,")")}}]),e}(),T=function(){function e(s,t,i,n){Object(S.a)(this,e),this.name=void 0,this.hasMoved=void 0,this.isWhite=void 0,this.type=void 0,this.name=s,this.hasMoved=t,this.isWhite=i,this.type=n}return Object(x.a)(e,[{key:"relativeMoves",value:function(){if(this.type==O.PAWN&&1==this.isWhite)return this.hasMoved?[new m(0,-1)]:(this.hasMoved=!0,[new m(0,-1),new m(0,-2)]);if(this.type==O.PAWN&&0==this.isWhite)return this.hasMoved?[new m(0,1)]:(this.hasMoved=!0,[new m(0,1),new m(0,2)]);if(this.type==O.KNIGHT)return[new m(-1,-2),new m(1,-2),new m(2,-1),new m(2,1),new m(1,2),new m(-1,2),new m(-2,1),new m(-2,-1)];if(this.type==O.BISHOP){for(var e=Array(),s=1;s<7;s++)e.push(new m(s,s)),e.push(new m(-s,-s)),e.push(new m(-s,s)),e.push(new m(s,-s));return e}if(this.type==O.ROOK){for(var t=Array(),i=1;i<7;i++)t.push(new m(0,i)),t.push(new m(0,-i)),t.push(new m(i,0)),t.push(new m(-i,0));return t}if(this.type==O.QUEEN){for(var n=Array(),r=1;r<8;r++)n.push(new m(r,r)),n.push(new m(-r,-r)),n.push(new m(-r,r)),n.push(new m(r,-r)),n.push(new m(0,r)),n.push(new m(0,-r)),n.push(new m(r,0)),n.push(new m(-r,0));return n}return this.type==O.KING?[new m(1,-1),new m(1,0),new m(1,1),new m(0,1),new m(-1,1),new m(-1,0),new m(-1,-1),new m(0,-1)]:[]}}]),e}(),M=(i=function e(s,t,i,o){Object(S.a)(this,e),Object(f.a)(this,"coordinate",n,this),Object(f.a)(this,"isSelected",r,this),Object(f.a)(this,"isSelectable",a,this),Object(f.a)(this,"piece",c,this),this.coordinate=s,this.isSelected=t,this.isSelectable=i,this.piece=o},n=Object(A.a)(i.prototype,"coordinate",[k.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),r=Object(A.a)(i.prototype,"isSelected",[k.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=Object(A.a)(i.prototype,"isSelectable",[k.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=Object(A.a)(i.prototype,"piece",[k.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i);!function(e){e.PAWN="\u265f",e.ROOK="\u265c",e.KNIGHT="\u265e",e.BISHOP="\u265d",e.QUEEN="\u265b",e.KING="\u265a"}(O||(O={}));var K,I,C,R,B=new(o=function(){function e(){var s=this;Object(S.a)(this,e),this.pieces=void 0,Object(f.a)(this,"squares",u,this),Object(f.a)(this,"isPressed",l,this),Object(f.a)(this,"selectedSquare",w,this),Object(f.a)(this,"possibleMoves",d,this),Object(f.a)(this,"isWhiteTurn",h,this),this.squareStartingPositions=function(){return[new M(new m(0,0),!1,!0,new T("Rook",!1,!1,O.ROOK)),new M(new m(1,0),!1,!0,new T("Knight",!1,!1,O.KNIGHT)),new M(new m(2,0),!1,!0,new T("Bishop",!1,!1,O.BISHOP)),new M(new m(3,0),!1,!0,new T("King",!1,!1,O.KING)),new M(new m(4,0),!1,!0,new T("Queen",!1,!1,O.QUEEN)),new M(new m(5,0),!1,!0,new T("Bishop",!1,!1,O.BISHOP)),new M(new m(6,0),!1,!0,new T("Knight",!1,!1,O.KNIGHT)),new M(new m(7,0),!1,!0,new T("Rook",!1,!1,O.ROOK)),new M(new m(0,1),!1,!0,new T("Pawn",!1,!1,O.PAWN)),new M(new m(1,1),!1,!0,new T("Pawn",!1,!1,O.PAWN)),new M(new m(2,1),!1,!0,new T("Pawn",!1,!1,O.PAWN)),new M(new m(3,1),!1,!0,new T("Pawn",!1,!1,O.PAWN)),new M(new m(4,1),!1,!0,new T("Pawn",!1,!1,O.PAWN)),new M(new m(5,1),!1,!0,new T("Pawn",!1,!1,O.PAWN)),new M(new m(6,1),!1,!0,new T("Pawn",!1,!1,O.PAWN)),new M(new m(7,1),!1,!0,new T("Pawn",!1,!1,O.PAWN)),new M(new m(0,2)),new M(new m(1,2)),new M(new m(2,2)),new M(new m(3,2)),new M(new m(4,2)),new M(new m(5,2)),new M(new m(6,2)),new M(new m(7,2)),new M(new m(0,3)),new M(new m(1,3)),new M(new m(2,3)),new M(new m(3,3)),new M(new m(4,3)),new M(new m(5,3)),new M(new m(6,3)),new M(new m(7,3)),new M(new m(0,4)),new M(new m(1,4)),new M(new m(2,4)),new M(new m(3,4)),new M(new m(4,4)),new M(new m(5,4)),new M(new m(6,4)),new M(new m(7,4)),new M(new m(0,5)),new M(new m(1,5)),new M(new m(2,5)),new M(new m(3,5)),new M(new m(4,5)),new M(new m(5,5)),new M(new m(6,5)),new M(new m(7,5)),new M(new m(0,6),!1,!0,new T("Pawn",!1,!0,O.PAWN)),new M(new m(1,6),!1,!0,new T("Pawn",!1,!0,O.PAWN)),new M(new m(2,6),!1,!0,new T("Pawn",!1,!0,O.PAWN)),new M(new m(3,6),!1,!0,new T("Pawn",!1,!0,O.PAWN)),new M(new m(4,6),!1,!0,new T("Pawn",!1,!0,O.PAWN)),new M(new m(5,6),!1,!0,new T("Pawn",!1,!0,O.PAWN)),new M(new m(6,6),!1,!0,new T("Pawn",!1,!0,O.PAWN)),new M(new m(7,6),!1,!0,new T("Pawn",!1,!0,O.PAWN)),new M(new m(0,7),!1,!0,new T("Rook",!1,!0,O.ROOK)),new M(new m(1,7),!1,!0,new T("Knight",!1,!0,O.KNIGHT)),new M(new m(2,7),!1,!0,new T("Bishop",!1,!0,O.BISHOP)),new M(new m(3,7),!1,!0,new T("King",!1,!0,O.KING)),new M(new m(4,7),!1,!0,new T("Queen",!1,!0,O.QUEEN)),new M(new m(5,7),!1,!0,new T("Bishop",!1,!0,O.BISHOP)),new M(new m(6,7),!1,!0,new T("Knight",!1,!0,O.KNIGHT)),new M(new m(7,7),!1,!0,new T("Rook",!1,!0,O.ROOK))]},this.changeTurn=function(){s.isWhiteTurn=!s.isWhiteTurn,s.setOnlySquaresWithPiecesToSelectable()},this.setOnlySquaresWithPiecesToSelectable=function(){s.squares.forEach((function(e){var t;e.piece&&(null===(t=e.piece)||void 0===t?void 0:t.isWhite)&&s.isWhiteTurn||e.piece&&!e.piece.isWhite&&!s.isWhiteTurn?e.isSelectable=!0:e.isSelectable=!1}))},this.reset=function(){s.squares=s.squareStartingPositions(),s.toggleToUpdateView(),s.isWhiteTurn=!0,s.setOnlySquaresWithPiecesToSelectable()},Object(f.a)(this,"toggleToUpdateView",b,this),Object(f.a)(this,"setPossibleMoves",j,this),this.pieceAtPosition=function(e,t){var i=s.squares.find((function(s){return s.coordinate.col==e&&s.coordinate.row==t}));return!!(null===i||void 0===i?void 0:i.piece)},this.getStraightMoves=function(){for(var e=new Array,t=1;t<8;t++){var i;if(e.push(new m(0,-t)),s.pieceAtPosition(s.selectedSquare.coordinate.col,(null===(i=s.selectedSquare)||void 0===i?void 0:i.coordinate.row)-t))break}for(var n=1;n<8;n++){var r;if(e.push(new m(n,0)),s.pieceAtPosition(s.selectedSquare.coordinate.col+n,null===(r=s.selectedSquare)||void 0===r?void 0:r.coordinate.row))break}for(var a=1;a<8;a++){var c;if(e.push(new m(0,a)),s.pieceAtPosition(s.selectedSquare.coordinate.col,(null===(c=s.selectedSquare)||void 0===c?void 0:c.coordinate.row)+a))break}for(var o=1;o<8;o++){var u;if(e.push(new m(-o,0)),s.pieceAtPosition(s.selectedSquare.coordinate.col-o,null===(u=s.selectedSquare)||void 0===u?void 0:u.coordinate.row))break}return e},this.getDiagonalMoves=function(){for(var e=new Array,t=1;t<8;t++){var i;if(e.push(new m(-t,-t)),s.pieceAtPosition(s.selectedSquare.coordinate.col-t,(null===(i=s.selectedSquare)||void 0===i?void 0:i.coordinate.row)-t))break}for(var n=1;n<8;n++){var r;if(e.push(new m(n,-n)),s.pieceAtPosition(s.selectedSquare.coordinate.col+n,(null===(r=s.selectedSquare)||void 0===r?void 0:r.coordinate.row)-n))break}for(var a=1;a<8;a++){var c;if(e.push(new m(a,a)),s.pieceAtPosition(s.selectedSquare.coordinate.col+a,(null===(c=s.selectedSquare)||void 0===c?void 0:c.coordinate.row)+a))break}for(var o=1;o<8;o++){var u;if(e.push(new m(-o,o)),s.pieceAtPosition(s.selectedSquare.coordinate.col-o,(null===(u=s.selectedSquare)||void 0===u?void 0:u.coordinate.row)+o))break}return e},this.getPawnMoves=function(){var e,t,i,n=s.selectedSquare.piece,r=new Array,a=(null===n||void 0===n?void 0:n.isWhite)?-1:1;return s.pieceAtPosition(s.selectedSquare.coordinate.col,(null===(e=s.selectedSquare)||void 0===e?void 0:e.coordinate.row)+a)||(1==(null===n||void 0===n?void 0:n.isWhite)&&(n.hasMoved?r.push(new m(0,-1)):(n.hasMoved=!0,r.push(new m(0,-1)),r.push(new m(0,-2)))),0==(null===n||void 0===n?void 0:n.isWhite)&&(n.hasMoved?r.push(new m(0,1)):(n.hasMoved=!0,r.push(new m(0,1)),r.push(new m(0,2))))),s.pieceAtPosition(s.selectedSquare.coordinate.col+1,(null===(t=s.selectedSquare)||void 0===t?void 0:t.coordinate.row)+a)&&r.push(new m(1,a)),s.pieceAtPosition(s.selectedSquare.coordinate.col-1,(null===(i=s.selectedSquare)||void 0===i?void 0:i.coordinate.row)+a)&&r.push(new m(-1,a)),r},Object(k.m)(this),this.selectedSquare=new M(new m(-1,-1)),this.possibleMoves=[],this.isPressed=!1,this.pieces=[],this.squares=this.squareStartingPositions(),this.isWhiteTurn=!0,this.setOnlySquaresWithPiecesToSelectable()}return Object(x.a)(e,[{key:"handleClickedSquare",value:function(e){var s=this;if(this.sameCoordinates(e.coordinate,this.selectedSquare.coordinate))this.selectedSquare.isSelected=!1,this.selectedSquare=new M(new m(-1,-1)),this.setOnlySquaresWithPiecesToSelectable();else{var t,i;if(e.piece&&e.piece.isWhite&&this.isWhiteTurn||e.piece&&!e.piece.isWhite&&!this.isWhiteTurn)e.isSelected=!e.isSelected,this.selectedSquare=e,this.setPossibleMoves();else{e.piece=this.selectedSquare.piece;var n=this.squares.find((function(e){return e.coordinate.toString()==s.selectedSquare.coordinate.toString()}));n&&(n.piece=void 0,n.isSelected=!1),this.changeTurn()}if(this.squares.every((function(e){return!e.isSelectable})))alert("No moves for ".concat((null===(t=e.piece)||void 0===t?void 0:t.isWhite)?"white":"black"," ").concat(null===(i=e.piece)||void 0===i?void 0:i.name.toLocaleLowerCase())),e.isSelected=!e.isSelected,this.selectedSquare=new M(new m(-1,-1)),this.setOnlySquaresWithPiecesToSelectable()}this.toggleToUpdateView()}},{key:"sameCoordinates",value:function(e,s){return e.col==s.col&&e.row==s.row}}]),e}(),u=Object(A.a)(o.prototype,"squares",[k.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=Object(A.a)(o.prototype,"isPressed",[k.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=Object(A.a)(o.prototype,"selectedSquare",[k.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=Object(A.a)(o.prototype,"possibleMoves",[k.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=Object(A.a)(o.prototype,"isWhiteTurn",[k.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=Object(A.a)(o.prototype,"toggleToUpdateView",[k.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.isPressed=!e.isPressed}}}),j=Object(A.a)(o.prototype,"setPossibleMoves",[k.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){if(e.possibleMoves=[],e.squares.forEach((function(e){e.isSelectable=!1})),e.selectedSquare.piece){var s=Array();s=e.selectedSquare.piece.type==O.PAWN?e.getPawnMoves():e.selectedSquare.piece.type==O.ROOK?e.getStraightMoves():e.selectedSquare.piece.type==O.BISHOP?e.getDiagonalMoves():e.selectedSquare.piece.type==O.QUEEN?[].concat(Object(N.a)(e.getStraightMoves()),Object(N.a)(e.getDiagonalMoves())):e.selectedSquare.piece.relativeMoves(),e.possibleMoves=s.map((function(s){return new m(e.selectedSquare.coordinate.col+s.col,e.selectedSquare.coordinate.row+s.row)})),e.squares.filter((function(s){return e.possibleMoves.some((function(e){return e.toString()==s.coordinate.toString()}))})).filter((function(s){var t;return s.piece&&s.piece.isWhite==!(null===(t=e.selectedSquare.piece)||void 0===t?void 0:t.isWhite)||!s.piece})).forEach((function(e){e.isSelectable=!0}))}}}}),o),E=t(8),z=t(0);!function(e){e.Pale="#edecd4",e.Green="#7d945d",e.Yellow="#f7f594"}(R||(R={}));var H,G,U,Q,F=Object(E.a)((I=function(e){Object(y.a)(t,e);var s=Object(W.a)(t);function t(){var e;Object(S.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return e=s.call.apply(s,[this].concat(n)),Object(f.a)(e,"handleClick",C,Object(g.a)(e)),e}return Object(x.a)(t,[{key:"render",value:function(){var e,s,t=this,i=this.props.square,n=i.isSelected,r=i.coordinate,a="";i.isSelectable&&(a=R.Yellow),a=(r.col+r.row)%2==0?R.Pale:R.Green,n&&(a=R.Yellow);var c=(null===(e=i.piece)||void 0===e?void 0:e.isWhite)?"white":"black";return i.isSelectable&&(a="blue"),Object(z.jsx)("button",{className:"square",onClick:function(){return t.handleClick(i)},disabled:!n&&!i.isSelectable,style:{backgroundColor:a,position:"relative",border:0},children:Object(z.jsxs)("span",{style:{color:c,position:"absolute",top:7,left:25},children:[" ",(null===(s=i.piece)||void 0===s?void 0:s.type)||""]})})}}]),t}(v.Component),C=Object(A.a)(I.prototype,"handleClick",[k.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(e){B.handleClickedSquare(e)}}}),K=I))||K,D=Object(E.a)(H=function(e){Object(y.a)(t,e);var s=Object(W.a)(t);function t(){return Object(S.a)(this,t),s.apply(this,arguments)}return Object(x.a)(t,[{key:"renderSquare",value:function(e,s){return Object(z.jsx)(F,{square:e,isPressed:s})}},{key:"getSquare",value:function(e,s){return B.squares.find((function(t){return t.coordinate===new m(e,s)}))}},{key:"render",value:function(){var e=B.squares,s=B.isPressed;return Object(z.jsxs)("div",{children:[Object(z.jsxs)("div",{children:[Object(z.jsx)(F,{square:e[0],isPressed:s}),Object(z.jsx)(F,{square:e[1],isPressed:s}),Object(z.jsx)(F,{square:e[2],isPressed:s}),Object(z.jsx)(F,{square:e[3],isPressed:s}),Object(z.jsx)(F,{square:e[4],isPressed:s}),Object(z.jsx)(F,{square:e[5],isPressed:s}),Object(z.jsx)(F,{square:e[6],isPressed:s}),Object(z.jsx)(F,{square:e[7],isPressed:s})]}),Object(z.jsxs)("div",{children:[Object(z.jsx)(F,{square:e[8],isPressed:s}),Object(z.jsx)(F,{square:e[9],isPressed:s}),Object(z.jsx)(F,{square:e[10],isPressed:s}),Object(z.jsx)(F,{square:e[11],isPressed:s}),Object(z.jsx)(F,{square:e[12],isPressed:s}),Object(z.jsx)(F,{square:e[13],isPressed:s}),Object(z.jsx)(F,{square:e[14],isPressed:s}),Object(z.jsx)(F,{square:e[15],isPressed:s})]}),Object(z.jsxs)("div",{children:[Object(z.jsx)(F,{square:e[16],isPressed:s}),Object(z.jsx)(F,{square:e[17],isPressed:s}),Object(z.jsx)(F,{square:e[18],isPressed:s}),Object(z.jsx)(F,{square:e[19],isPressed:s}),Object(z.jsx)(F,{square:e[20],isPressed:s}),Object(z.jsx)(F,{square:e[21],isPressed:s}),Object(z.jsx)(F,{square:e[22],isPressed:s}),Object(z.jsx)(F,{square:e[23],isPressed:s})]}),Object(z.jsxs)("div",{children:[Object(z.jsx)(F,{square:e[24],isPressed:s}),Object(z.jsx)(F,{square:e[25],isPressed:s}),Object(z.jsx)(F,{square:e[26],isPressed:s}),Object(z.jsx)(F,{square:e[27],isPressed:s}),Object(z.jsx)(F,{square:e[28],isPressed:s}),Object(z.jsx)(F,{square:e[29],isPressed:s}),Object(z.jsx)(F,{square:e[30],isPressed:s}),Object(z.jsx)(F,{square:e[31],isPressed:s})]}),Object(z.jsxs)("div",{children:[Object(z.jsx)(F,{square:e[32],isPressed:s}),Object(z.jsx)(F,{square:e[33],isPressed:s}),Object(z.jsx)(F,{square:e[34],isPressed:s}),Object(z.jsx)(F,{square:e[35],isPressed:s}),Object(z.jsx)(F,{square:e[36],isPressed:s}),Object(z.jsx)(F,{square:e[37],isPressed:s}),Object(z.jsx)(F,{square:e[38],isPressed:s}),Object(z.jsx)(F,{square:e[39],isPressed:s})]}),Object(z.jsxs)("div",{children:[Object(z.jsx)(F,{square:e[40],isPressed:s}),Object(z.jsx)(F,{square:e[41],isPressed:s}),Object(z.jsx)(F,{square:e[42],isPressed:s}),Object(z.jsx)(F,{square:e[43],isPressed:s}),Object(z.jsx)(F,{square:e[44],isPressed:s}),Object(z.jsx)(F,{square:e[45],isPressed:s}),Object(z.jsx)(F,{square:e[46],isPressed:s}),Object(z.jsx)(F,{square:e[47],isPressed:s})]}),Object(z.jsxs)("div",{children:[Object(z.jsx)(F,{square:e[48],isPressed:s}),Object(z.jsx)(F,{square:e[49],isPressed:s}),Object(z.jsx)(F,{square:e[50],isPressed:s}),Object(z.jsx)(F,{square:e[51],isPressed:s}),Object(z.jsx)(F,{square:e[52],isPressed:s}),Object(z.jsx)(F,{square:e[53],isPressed:s}),Object(z.jsx)(F,{square:e[54],isPressed:s}),Object(z.jsx)(F,{square:e[55],isPressed:s})]}),Object(z.jsxs)("div",{children:[Object(z.jsx)(F,{square:e[56],isPressed:s}),Object(z.jsx)(F,{square:e[57],isPressed:s}),Object(z.jsx)(F,{square:e[58],isPressed:s}),Object(z.jsx)(F,{square:e[59],isPressed:s}),Object(z.jsx)(F,{square:e[60],isPressed:s}),Object(z.jsx)(F,{square:e[61],isPressed:s}),Object(z.jsx)(F,{square:e[62],isPressed:s}),Object(z.jsx)(F,{square:e[63],isPressed:s})]})]})}}]),t}(v.Component))||H,L=Object(E.a)((U=function(e){Object(y.a)(t,e);var s=Object(W.a)(t);function t(){var e;Object(S.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return e=s.call.apply(s,[this].concat(n)),Object(f.a)(e,"handleReset",Q,Object(g.a)(e)),e}return Object(x.a)(t,[{key:"render",value:function(){var e=this,s=B.isWhiteTurn;return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("button",{onClick:function(){return e.handleReset()},children:"Reset"}),Object(z.jsxs)("div",{className:"status",children:[s?"White ":"Black "," to move"]}),Object(z.jsx)("div",{className:"game",children:Object(z.jsx)("div",{className:"game-board",children:Object(z.jsx)(D,{})})})]})}}]),t}(v.Component),Q=Object(A.a)(U.prototype,"handleReset",[k.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(){B.reset()}}}),G=U))||G,V=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,24)).then((function(s){var t=s.getCLS,i=s.getFID,n=s.getFCP,r=s.getLCP,a=s.getTTFB;t(e),i(e),n(e),r(e),a(e)}))};q.a.render(Object(z.jsx)(p.a.StrictMode,{children:Object(z.jsx)(L,{})}),document.getElementById("root")),V()}},[[23,1,2]]]);
//# sourceMappingURL=main.911fad21.chunk.js.map