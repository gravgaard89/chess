(this.webpackJsonpchess=this.webpackJsonpchess||[]).push([[0],{19:function(e,s,t){},20:function(e,s,t){},23:function(e,s,t){"use strict";t.r(s);var i,n,r,a,c,o,u,l,w,d,j,b,h,O,p=t(1),P=t.n(p),v=t(12),q=t.n(v),f=(t(19),t(3)),x=t(5),S=t(6),g=t(7),y=t(10),W=t(9),N=t(4),A=(t(11),t.p+"static/media/logo.6ce24c58.svg"),m=(t(20),t(14)),k=t(2),T=function(){function e(s,t){Object(x.a)(this,e),this.row=void 0,this.col=void 0,this.col=s,this.row=t}return Object(S.a)(e,[{key:"equals",value:function(e){return this.row==e.row&&this.col==e.col}},{key:"getBoardCoordinateRepresentation",value:function(){var e=8-this.row,s=8-this.col;return"(".concat(e+","+s,")")}},{key:"toString",value:function(){return"(".concat(this.row,",").concat(this.col,")")}}]),e}(),M=function(){function e(s,t,i,n){Object(x.a)(this,e),this.name=void 0,this.hasMoved=void 0,this.isWhite=void 0,this.type=void 0,this.name=s,this.hasMoved=t,this.isWhite=i,this.type=n}return Object(S.a)(e,[{key:"relativeMoves",value:function(){if(this.type==O.PAWN&&1==this.isWhite)return this.hasMoved?[new T(0,-1)]:(this.hasMoved=!0,[new T(0,-1),new T(0,-2)]);if(this.type==O.PAWN&&0==this.isWhite)return this.hasMoved?[new T(0,1)]:(this.hasMoved=!0,[new T(0,1),new T(0,2)]);if(this.type==O.KNIGHT)return[new T(-1,-2),new T(1,-2),new T(2,-1),new T(2,1),new T(1,2),new T(-1,2),new T(-2,1),new T(-2,-1)];if(this.type==O.BISHOP){for(var e=Array(),s=1;s<7;s++)e.push(new T(s,s)),e.push(new T(-s,-s)),e.push(new T(-s,s)),e.push(new T(s,-s));return e}if(this.type==O.ROOK){for(var t=Array(),i=1;i<7;i++)t.push(new T(0,i)),t.push(new T(0,-i)),t.push(new T(i,0)),t.push(new T(-i,0));return t}if(this.type==O.QUEEN){for(var n=Array(),r=1;r<8;r++)n.push(new T(r,r)),n.push(new T(-r,-r)),n.push(new T(-r,r)),n.push(new T(r,-r)),n.push(new T(0,r)),n.push(new T(0,-r)),n.push(new T(r,0)),n.push(new T(-r,0));return n}return this.type==O.KING?[new T(1,-1),new T(1,0),new T(1,1),new T(0,1),new T(-1,1),new T(-1,0),new T(-1,-1),new T(0,-1)]:[]}}]),e}(),K=(i=function e(s,t,i,o){Object(x.a)(this,e),Object(f.a)(this,"coordinate",n,this),Object(f.a)(this,"isSelected",r,this),Object(f.a)(this,"isSelectable",a,this),Object(f.a)(this,"piece",c,this),this.coordinate=s,this.isSelected=t,this.isSelectable=i,this.piece=o},n=Object(N.a)(i.prototype,"coordinate",[k.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),r=Object(N.a)(i.prototype,"isSelected",[k.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=Object(N.a)(i.prototype,"isSelectable",[k.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=Object(N.a)(i.prototype,"piece",[k.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i);!function(e){e.PAWN="\u265f",e.ROOK="\u265c",e.KNIGHT="\u265e",e.BISHOP="\u265d",e.QUEEN="\u265b",e.KING="\u265a"}(O||(O={}));var I,R,C,E,B,z,H,G=new(o=function(){function e(){var s=this;Object(x.a)(this,e),this.pieces=void 0,Object(f.a)(this,"squares",u,this),Object(f.a)(this,"isPressed",l,this),Object(f.a)(this,"selectedSquare",w,this),Object(f.a)(this,"possibleMoves",d,this),Object(f.a)(this,"isWhiteTurn",j,this),this.squareStartingPositions=function(){return[new K(new T(0,0),!1,!0,new M("Rook",!1,!1,O.ROOK)),new K(new T(1,0),!1,!0,new M("Knight",!1,!1,O.KNIGHT)),new K(new T(2,0),!1,!0,new M("Bishop",!1,!1,O.BISHOP)),new K(new T(3,0),!1,!0,new M("King",!1,!1,O.KING)),new K(new T(4,0),!1,!0,new M("Queen",!1,!1,O.QUEEN)),new K(new T(5,0),!1,!0,new M("Bishop",!1,!1,O.BISHOP)),new K(new T(6,0),!1,!0,new M("Knight",!1,!1,O.KNIGHT)),new K(new T(7,0),!1,!0,new M("Rook",!1,!1,O.ROOK)),new K(new T(0,1),!1,!0,new M("Pawn",!1,!1,O.PAWN)),new K(new T(1,1),!1,!0,new M("Pawn",!1,!1,O.PAWN)),new K(new T(2,1),!1,!0,new M("Pawn",!1,!1,O.PAWN)),new K(new T(3,1),!1,!0,new M("Pawn",!1,!1,O.PAWN)),new K(new T(4,1),!1,!0,new M("Pawn",!1,!1,O.PAWN)),new K(new T(5,1),!1,!0,new M("Pawn",!1,!1,O.PAWN)),new K(new T(6,1),!1,!0,new M("Pawn",!1,!1,O.PAWN)),new K(new T(7,1),!1,!0,new M("Pawn",!1,!1,O.PAWN)),new K(new T(0,2)),new K(new T(1,2)),new K(new T(2,2)),new K(new T(3,2)),new K(new T(4,2)),new K(new T(5,2)),new K(new T(6,2)),new K(new T(7,2)),new K(new T(0,3)),new K(new T(1,3)),new K(new T(2,3)),new K(new T(3,3)),new K(new T(4,3)),new K(new T(5,3)),new K(new T(6,3)),new K(new T(7,3)),new K(new T(0,4)),new K(new T(1,4)),new K(new T(2,4)),new K(new T(3,4)),new K(new T(4,4)),new K(new T(5,4)),new K(new T(6,4)),new K(new T(7,4)),new K(new T(0,5)),new K(new T(1,5)),new K(new T(2,5)),new K(new T(3,5)),new K(new T(4,5)),new K(new T(5,5)),new K(new T(6,5)),new K(new T(7,5)),new K(new T(0,6),!1,!0,new M("Pawn",!1,!0,O.PAWN)),new K(new T(1,6),!1,!0,new M("Pawn",!1,!0,O.PAWN)),new K(new T(2,6),!1,!0,new M("Pawn",!1,!0,O.PAWN)),new K(new T(3,6),!1,!0,new M("Pawn",!1,!0,O.PAWN)),new K(new T(4,6),!1,!0,new M("Pawn",!1,!0,O.PAWN)),new K(new T(5,6),!1,!0,new M("Pawn",!1,!0,O.PAWN)),new K(new T(6,6),!1,!0,new M("Pawn",!1,!0,O.PAWN)),new K(new T(7,6),!1,!0,new M("Pawn",!1,!0,O.PAWN)),new K(new T(0,7),!1,!0,new M("Rook",!1,!0,O.ROOK)),new K(new T(1,7),!1,!0,new M("Knight",!1,!0,O.KNIGHT)),new K(new T(2,7),!1,!0,new M("Bishop",!1,!0,O.BISHOP)),new K(new T(3,7),!1,!0,new M("King",!1,!0,O.KING)),new K(new T(4,7),!1,!0,new M("Queen",!1,!0,O.QUEEN)),new K(new T(5,7),!1,!0,new M("Bishop",!1,!0,O.BISHOP)),new K(new T(6,7),!1,!0,new M("Knight",!1,!0,O.KNIGHT)),new K(new T(7,7),!1,!0,new M("Rook",!1,!0,O.ROOK))]},this.changeTurn=function(){s.isWhiteTurn=!s.isWhiteTurn,s.setOnlySquaresWithPiecesToSelectable()},this.setOnlySquaresWithPiecesToSelectable=function(){s.squares.forEach((function(e){var t;e.piece&&(null===(t=e.piece)||void 0===t?void 0:t.isWhite)&&s.isWhiteTurn||e.piece&&!e.piece.isWhite&&!s.isWhiteTurn?e.isSelectable=!0:e.isSelectable=!1}))},this.reset=function(){s.squares=s.squareStartingPositions(),s.toggleToUpdateView(),s.isWhiteTurn=!0,s.setOnlySquaresWithPiecesToSelectable()},Object(f.a)(this,"toggleToUpdateView",b,this),Object(f.a)(this,"setPossibleMoves",h,this),this.pieceAtPosition=function(e,t){var i=s.squares.find((function(s){return s.coordinate.col==e&&s.coordinate.row==t}));return!!(null===i||void 0===i?void 0:i.piece)},this.getStraightMoves=function(){for(var e=new Array,t=1;t<8;t++){var i;if(e.push(new T(0,-t)),s.pieceAtPosition(s.selectedSquare.coordinate.col,(null===(i=s.selectedSquare)||void 0===i?void 0:i.coordinate.row)-t))break}for(var n=1;n<8;n++){var r;if(e.push(new T(n,0)),s.pieceAtPosition(s.selectedSquare.coordinate.col+n,null===(r=s.selectedSquare)||void 0===r?void 0:r.coordinate.row))break}for(var a=1;a<8;a++){var c;if(e.push(new T(0,a)),s.pieceAtPosition(s.selectedSquare.coordinate.col,(null===(c=s.selectedSquare)||void 0===c?void 0:c.coordinate.row)+a))break}for(var o=1;o<8;o++){var u;if(e.push(new T(-o,0)),s.pieceAtPosition(s.selectedSquare.coordinate.col-o,null===(u=s.selectedSquare)||void 0===u?void 0:u.coordinate.row))break}return e},this.getDiagonalMoves=function(){for(var e=new Array,t=1;t<8;t++){var i;if(e.push(new T(-t,-t)),s.pieceAtPosition(s.selectedSquare.coordinate.col-t,(null===(i=s.selectedSquare)||void 0===i?void 0:i.coordinate.row)-t))break}for(var n=1;n<8;n++){var r;if(e.push(new T(n,-n)),s.pieceAtPosition(s.selectedSquare.coordinate.col+n,(null===(r=s.selectedSquare)||void 0===r?void 0:r.coordinate.row)-n))break}for(var a=1;a<8;a++){var c;if(e.push(new T(a,a)),s.pieceAtPosition(s.selectedSquare.coordinate.col+a,(null===(c=s.selectedSquare)||void 0===c?void 0:c.coordinate.row)+a))break}for(var o=1;o<8;o++){var u;if(e.push(new T(-o,o)),s.pieceAtPosition(s.selectedSquare.coordinate.col-o,(null===(u=s.selectedSquare)||void 0===u?void 0:u.coordinate.row)+o))break}return e},this.hasPawnEnemyAhead=function(){},Object(k.m)(this),this.selectedSquare=new K(new T(-1,-1)),this.possibleMoves=[],this.isPressed=!1,this.pieces=[],this.squares=this.squareStartingPositions(),this.isWhiteTurn=!0,this.setOnlySquaresWithPiecesToSelectable()}return Object(S.a)(e,[{key:"handleClickedSquare",value:function(e){var s=this;if(e.piece&&e.piece.isWhite&&this.isWhiteTurn||e.piece&&!e.piece.isWhite&&!this.isWhiteTurn)e.isSelected=!e.isSelected,this.selectedSquare=e,this.setPossibleMoves();else{e.piece=this.selectedSquare.piece;var t=this.squares.find((function(e){return e.coordinate.toString()==s.selectedSquare.coordinate.toString()}));t&&(t.piece=void 0,t.isSelected=!1),this.changeTurn()}this.toggleToUpdateView()}}]),e}(),u=Object(N.a)(o.prototype,"squares",[k.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=Object(N.a)(o.prototype,"isPressed",[k.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=Object(N.a)(o.prototype,"selectedSquare",[k.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=Object(N.a)(o.prototype,"possibleMoves",[k.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=Object(N.a)(o.prototype,"isWhiteTurn",[k.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=Object(N.a)(o.prototype,"toggleToUpdateView",[k.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.isPressed=!e.isPressed}}}),h=Object(N.a)(o.prototype,"setPossibleMoves",[k.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){if(e.possibleMoves=[],e.squares.forEach((function(e){e.isSelectable=!1})),e.selectedSquare.piece){var s=Array();s=e.selectedSquare.piece.type==O.ROOK?e.getStraightMoves():e.selectedSquare.piece.type==O.BISHOP?e.getDiagonalMoves():e.selectedSquare.piece.type==O.QUEEN?[].concat(Object(m.a)(e.getStraightMoves()),Object(m.a)(e.getDiagonalMoves())):e.selectedSquare.piece.relativeMoves(),e.possibleMoves=s.map((function(s){return new T(e.selectedSquare.coordinate.col+s.col,e.selectedSquare.coordinate.row+s.row)}));var t=e.squares.filter((function(s){return e.possibleMoves.some((function(e){return e.toString()==s.coordinate.toString()}))})).filter((function(s){var t;return s.piece&&s.piece.isWhite==!(null===(t=e.selectedSquare.piece)||void 0===t?void 0:t.isWhite)||!s.piece}));if(e.selectedSquare.piece.type==O.PAWN)e.hasPawnEnemyAhead();t.forEach((function(e){e.isSelectable=!0}))}}}}),o),U=t(8),Q=t(0),F=Object(U.a)((R=function(e){Object(y.a)(t,e);var s=Object(W.a)(t);function t(){var e;Object(x.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return e=s.call.apply(s,[this].concat(n)),Object(f.a)(e,"handleClick",C,Object(g.a)(e)),e}return Object(S.a)(t,[{key:"render",value:function(){var e,s,t=this,i=this.props.square,n=i.isSelected?"green":"grey";i.isSelectable&&(n="blue");var r=(null===(e=i.piece)||void 0===e?void 0:e.isWhite)?"white":"black";return Object(Q.jsxs)("button",{className:"square",onClick:function(){return t.handleClick(i)},disabled:!i.isSelectable,style:{backgroundColor:n,position:"relative"},children:[Object(Q.jsx)("span",{style:{fontSize:6},children:"Col: "+i.coordinate.col+" Row: "+i.coordinate.row}),Object(Q.jsxs)("span",{style:{color:r,position:"absolute",top:7,left:22},children:[" ",(null===(s=i.piece)||void 0===s?void 0:s.type)||""]})]})}}]),t}(p.Component),C=Object(N.a)(R.prototype,"handleClick",[k.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(e){G.handleClickedSquare(e)}}}),I=R))||I,D=Object(U.a)(E=function(e){Object(y.a)(t,e);var s=Object(W.a)(t);function t(){return Object(x.a)(this,t),s.apply(this,arguments)}return Object(S.a)(t,[{key:"renderSquare",value:function(e,s){return Object(Q.jsx)(F,{square:e,isPressed:s})}},{key:"getSquare",value:function(e,s){return G.squares.find((function(t){return t.coordinate===new T(e,s)}))}},{key:"render",value:function(){var e=G.squares,s=G.isPressed;return Object(Q.jsxs)("div",{children:[Object(Q.jsxs)("div",{children:[Object(Q.jsx)(F,{square:e[0],isPressed:s}),Object(Q.jsx)(F,{square:e[1],isPressed:s}),Object(Q.jsx)(F,{square:e[2],isPressed:s}),Object(Q.jsx)(F,{square:e[3],isPressed:s}),Object(Q.jsx)(F,{square:e[4],isPressed:s}),Object(Q.jsx)(F,{square:e[5],isPressed:s}),Object(Q.jsx)(F,{square:e[6],isPressed:s}),Object(Q.jsx)(F,{square:e[7],isPressed:s})]}),Object(Q.jsxs)("div",{children:[Object(Q.jsx)(F,{square:e[8],isPressed:s}),Object(Q.jsx)(F,{square:e[9],isPressed:s}),Object(Q.jsx)(F,{square:e[10],isPressed:s}),Object(Q.jsx)(F,{square:e[11],isPressed:s}),Object(Q.jsx)(F,{square:e[12],isPressed:s}),Object(Q.jsx)(F,{square:e[13],isPressed:s}),Object(Q.jsx)(F,{square:e[14],isPressed:s}),Object(Q.jsx)(F,{square:e[15],isPressed:s})]}),Object(Q.jsxs)("div",{children:[Object(Q.jsx)(F,{square:e[16],isPressed:s}),Object(Q.jsx)(F,{square:e[17],isPressed:s}),Object(Q.jsx)(F,{square:e[18],isPressed:s}),Object(Q.jsx)(F,{square:e[19],isPressed:s}),Object(Q.jsx)(F,{square:e[20],isPressed:s}),Object(Q.jsx)(F,{square:e[21],isPressed:s}),Object(Q.jsx)(F,{square:e[22],isPressed:s}),Object(Q.jsx)(F,{square:e[23],isPressed:s})]}),Object(Q.jsxs)("div",{children:[Object(Q.jsx)(F,{square:e[24],isPressed:s}),Object(Q.jsx)(F,{square:e[25],isPressed:s}),Object(Q.jsx)(F,{square:e[26],isPressed:s}),Object(Q.jsx)(F,{square:e[27],isPressed:s}),Object(Q.jsx)(F,{square:e[28],isPressed:s}),Object(Q.jsx)(F,{square:e[29],isPressed:s}),Object(Q.jsx)(F,{square:e[30],isPressed:s}),Object(Q.jsx)(F,{square:e[31],isPressed:s})]}),Object(Q.jsxs)("div",{children:[Object(Q.jsx)(F,{square:e[32],isPressed:s}),Object(Q.jsx)(F,{square:e[33],isPressed:s}),Object(Q.jsx)(F,{square:e[34],isPressed:s}),Object(Q.jsx)(F,{square:e[35],isPressed:s}),Object(Q.jsx)(F,{square:e[36],isPressed:s}),Object(Q.jsx)(F,{square:e[37],isPressed:s}),Object(Q.jsx)(F,{square:e[38],isPressed:s}),Object(Q.jsx)(F,{square:e[39],isPressed:s})]}),Object(Q.jsxs)("div",{children:[Object(Q.jsx)(F,{square:e[40],isPressed:s}),Object(Q.jsx)(F,{square:e[41],isPressed:s}),Object(Q.jsx)(F,{square:e[42],isPressed:s}),Object(Q.jsx)(F,{square:e[43],isPressed:s}),Object(Q.jsx)(F,{square:e[44],isPressed:s}),Object(Q.jsx)(F,{square:e[45],isPressed:s}),Object(Q.jsx)(F,{square:e[46],isPressed:s}),Object(Q.jsx)(F,{square:e[47],isPressed:s})]}),Object(Q.jsxs)("div",{children:[Object(Q.jsx)(F,{square:e[48],isPressed:s}),Object(Q.jsx)(F,{square:e[49],isPressed:s}),Object(Q.jsx)(F,{square:e[50],isPressed:s}),Object(Q.jsx)(F,{square:e[51],isPressed:s}),Object(Q.jsx)(F,{square:e[52],isPressed:s}),Object(Q.jsx)(F,{square:e[53],isPressed:s}),Object(Q.jsx)(F,{square:e[54],isPressed:s}),Object(Q.jsx)(F,{square:e[55],isPressed:s})]}),Object(Q.jsxs)("div",{children:[Object(Q.jsx)(F,{square:e[56],isPressed:s}),Object(Q.jsx)(F,{square:e[57],isPressed:s}),Object(Q.jsx)(F,{square:e[58],isPressed:s}),Object(Q.jsx)(F,{square:e[59],isPressed:s}),Object(Q.jsx)(F,{square:e[60],isPressed:s}),Object(Q.jsx)(F,{square:e[61],isPressed:s}),Object(Q.jsx)(F,{square:e[62],isPressed:s}),Object(Q.jsx)(F,{square:e[63],isPressed:s})]})]})}}]),t}(p.Component))||E,V=Object(U.a)((z=function(e){Object(y.a)(t,e);var s=Object(W.a)(t);function t(){var e;Object(x.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return e=s.call.apply(s,[this].concat(n)),Object(f.a)(e,"handleReset",H,Object(g.a)(e)),e}return Object(S.a)(t,[{key:"render",value:function(){var e=this,s=G.isWhiteTurn;return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)("button",{onClick:function(){return e.handleReset()},children:"Reset"}),Object(Q.jsxs)("div",{className:"status",children:[s?"White ":"Black "," to move"]}),Object(Q.jsxs)("div",{className:"game",children:[Object(Q.jsx)("div",{className:"game-board",children:Object(Q.jsx)(D,{})}),Object(Q.jsxs)("div",{className:"game-info",children:[Object(Q.jsx)("div",{children:A}),Object(Q.jsx)("ol",{})]})]})]})}}]),t}(p.Component),H=Object(N.a)(z.prototype,"handleReset",[k.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(){G.reset()}}}),B=z))||B,J=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,24)).then((function(s){var t=s.getCLS,i=s.getFID,n=s.getFCP,r=s.getLCP,a=s.getTTFB;t(e),i(e),n(e),r(e),a(e)}))};q.a.render(Object(Q.jsx)(P.a.StrictMode,{children:Object(Q.jsx)(V,{})}),document.getElementById("root")),J()}},[[23,1,2]]]);
//# sourceMappingURL=main.7ca351d0.chunk.js.map