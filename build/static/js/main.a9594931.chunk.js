(this.webpackJsonpchess=this.webpackJsonpchess||[]).push([[0],{18:function(e,s,n){},19:function(e,s,n){},22:function(e,s,n){"use strict";n.r(s);var t,i,r,a,c,o,u,w,l,j,b,d,h,O,P=n(1),p=n.n(P),q=n(12),f=n.n(q),x=(n(18),n(3)),v=n(5),g=n(6),S=n(7),y=n(10),N=n(9),W=n(4),m=(n(11),n.p+"static/media/logo.6ce24c58.svg"),T=(n(19),n(2)),k=function(){function e(s,n){Object(v.a)(this,e),this.row=void 0,this.col=void 0,this.col=s,this.row=n}return Object(g.a)(e,[{key:"equals",value:function(e){return this.row==e.row&&this.col==e.col}},{key:"getBoardCoordinateRepresentation",value:function(){var e=8-this.row,s=8-this.col;return"(".concat(e+","+s,")")}},{key:"toString",value:function(){return"(".concat(this.row,",").concat(this.col,")")}}]),e}(),A=function(){function e(s,n,t,i){Object(v.a)(this,e),this.name=void 0,this.hasMoved=void 0,this.isWhite=void 0,this.type=void 0,this.name=s,this.hasMoved=n,this.isWhite=t,this.type=i}return Object(g.a)(e,[{key:"relativeMoves",value:function(){if(this.type==O.PAWN&&1==this.isWhite)return this.hasMoved?[new k(0,-1)]:(this.hasMoved=!0,[new k(0,-1),new k(0,-2)]);if(this.type==O.PAWN&&0==this.isWhite)return this.hasMoved?[new k(0,1)]:(this.hasMoved=!0,[new k(0,1),new k(0,2)]);if(this.type==O.KNIGHT)return[new k(-1,-2),new k(1,-2),new k(2,-1),new k(2,1),new k(1,2),new k(-1,2),new k(-2,1),new k(-2,-1)];if(this.type==O.BISHOP){for(var e=Array(),s=1;s<7;s++)e.push(new k(s,s)),e.push(new k(-s,-s)),e.push(new k(-s,s)),e.push(new k(s,-s));return e}if(this.type==O.ROOK){for(var n=Array(),t=1;t<7;t++)n.push(new k(0,t)),n.push(new k(0,-t)),n.push(new k(t,0)),n.push(new k(-t,0));return n}if(this.type==O.QUEEN){for(var i=Array(),r=1;r<8;r++)i.push(new k(r,r)),i.push(new k(-r,-r)),i.push(new k(-r,r)),i.push(new k(r,-r)),i.push(new k(0,r)),i.push(new k(0,-r)),i.push(new k(r,0)),i.push(new k(-r,0));return i}return this.type==O.KING?[new k(1,-1),new k(1,0),new k(1,1),new k(0,1),new k(-1,1),new k(-1,0),new k(-1,-1),new k(0,-1)]:[]}}]),e}(),K=(t=function e(s,n,t,o){Object(v.a)(this,e),Object(x.a)(this,"coordinate",i,this),Object(x.a)(this,"isSelected",r,this),Object(x.a)(this,"isSelectable",a,this),Object(x.a)(this,"piece",c,this),this.coordinate=s,this.isSelected=n,this.isSelectable=t,this.piece=o},i=Object(W.a)(t.prototype,"coordinate",[T.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),r=Object(W.a)(t.prototype,"isSelected",[T.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=Object(W.a)(t.prototype,"isSelectable",[T.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=Object(W.a)(t.prototype,"piece",[T.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),t);!function(e){e.PAWN="\u265f",e.ROOK="\u265c",e.KNIGHT="\u265e",e.BISHOP="\u265d",e.QUEEN="\u265b",e.KING="\u265a"}(O||(O={}));var I,M,C,R,z,B,E,H=new(o=function(){function e(){var s=this;Object(v.a)(this,e),this.pieces=void 0,Object(x.a)(this,"squares",u,this),Object(x.a)(this,"isPressed",w,this),Object(x.a)(this,"selectedSquare",l,this),Object(x.a)(this,"possibleMoves",j,this),Object(x.a)(this,"isWhiteTurn",b,this),this.squareStartingPositions=function(){return[new K(new k(0,0),!1,!0,new A("Rook",!1,!1,O.ROOK)),new K(new k(1,0),!1,!0,new A("Knight",!1,!1,O.KNIGHT)),new K(new k(2,0),!1,!0,new A("Bishop",!1,!1,O.BISHOP)),new K(new k(3,0),!1,!0,new A("King",!1,!1,O.KING)),new K(new k(4,0),!1,!0,new A("Queen",!1,!1,O.QUEEN)),new K(new k(5,0),!1,!0,new A("Bishop",!1,!1,O.BISHOP)),new K(new k(6,0),!1,!0,new A("Knight",!1,!1,O.KNIGHT)),new K(new k(7,0),!1,!0,new A("Rook",!1,!1,O.ROOK)),new K(new k(0,1),!1,!0,new A("Pawn",!1,!1,O.PAWN)),new K(new k(1,1),!1,!0,new A("Pawn",!1,!1,O.PAWN)),new K(new k(2,1),!1,!0,new A("Pawn",!1,!1,O.PAWN)),new K(new k(3,1),!1,!0,new A("Pawn",!1,!1,O.PAWN)),new K(new k(4,1),!1,!0,new A("Pawn",!1,!1,O.PAWN)),new K(new k(5,1),!1,!0,new A("Pawn",!1,!1,O.PAWN)),new K(new k(6,1),!1,!0,new A("Pawn",!1,!1,O.PAWN)),new K(new k(7,1),!1,!0,new A("Pawn",!1,!1,O.PAWN)),new K(new k(0,2)),new K(new k(1,2)),new K(new k(2,2)),new K(new k(3,2)),new K(new k(4,2)),new K(new k(5,2)),new K(new k(6,2)),new K(new k(7,2)),new K(new k(0,3)),new K(new k(1,3)),new K(new k(2,3)),new K(new k(3,3)),new K(new k(4,3)),new K(new k(5,3)),new K(new k(6,3)),new K(new k(7,3)),new K(new k(0,4)),new K(new k(1,4)),new K(new k(2,4)),new K(new k(3,4)),new K(new k(4,4)),new K(new k(5,4)),new K(new k(6,4)),new K(new k(7,4)),new K(new k(0,5)),new K(new k(1,5)),new K(new k(2,5)),new K(new k(3,5)),new K(new k(4,5)),new K(new k(5,5)),new K(new k(6,5)),new K(new k(7,5)),new K(new k(0,6),!1,!0,new A("Pawn",!1,!0,O.PAWN)),new K(new k(1,6),!1,!0,new A("Pawn",!1,!0,O.PAWN)),new K(new k(2,6),!1,!0,new A("Pawn",!1,!0,O.PAWN)),new K(new k(3,6),!1,!0,new A("Pawn",!1,!0,O.PAWN)),new K(new k(4,6),!1,!0,new A("Pawn",!1,!0,O.PAWN)),new K(new k(5,6),!1,!0,new A("Pawn",!1,!0,O.PAWN)),new K(new k(6,6),!1,!0,new A("Pawn",!1,!0,O.PAWN)),new K(new k(7,6),!1,!0,new A("Pawn",!1,!0,O.PAWN)),new K(new k(0,7),!1,!0,new A("Rook",!1,!0,O.ROOK)),new K(new k(1,7),!1,!0,new A("Knight",!1,!0,O.KNIGHT)),new K(new k(2,7),!1,!0,new A("Bishop",!1,!0,O.BISHOP)),new K(new k(3,7),!1,!0,new A("King",!1,!0,O.KING)),new K(new k(4,7),!1,!0,new A("Queen",!1,!0,O.QUEEN)),new K(new k(5,7),!1,!0,new A("Bishop",!1,!0,O.BISHOP)),new K(new k(6,7),!1,!0,new A("Knight",!1,!0,O.KNIGHT)),new K(new k(7,7),!1,!0,new A("Rook",!1,!0,O.ROOK))]},this.changeTurn=function(){s.isWhiteTurn=!s.isWhiteTurn,s.setOnlySquaresWithPiecesToSelectable()},this.setOnlySquaresWithPiecesToSelectable=function(){s.squares.forEach((function(e){var n;e.piece&&(null===(n=e.piece)||void 0===n?void 0:n.isWhite)&&s.isWhiteTurn||e.piece&&!e.piece.isWhite&&!s.isWhiteTurn?e.isSelectable=!0:e.isSelectable=!1}))},this.reset=function(){s.squares=s.squareStartingPositions(),s.toggleToUpdateView(),s.isWhiteTurn=!0,s.setOnlySquaresWithPiecesToSelectable()},Object(x.a)(this,"toggleToUpdateView",d,this),Object(x.a)(this,"setPossibleMoves",h,this),this.hasPawnEnemyAhead=function(){},Object(T.m)(this),this.selectedSquare=new K(new k(-1,-1)),this.possibleMoves=[],this.isPressed=!1,this.pieces=[],this.squares=this.squareStartingPositions(),this.isWhiteTurn=!0,this.setOnlySquaresWithPiecesToSelectable()}return Object(g.a)(e,[{key:"handleClickedSquare",value:function(e){var s=this;if(e.piece&&e.piece.isWhite&&this.isWhiteTurn||e.piece&&!e.piece.isWhite&&!this.isWhiteTurn)e.isSelected=!e.isSelected,this.selectedSquare=e,this.setPossibleMoves();else{e.piece=this.selectedSquare.piece;var n=this.squares.find((function(e){return e.coordinate.toString()==s.selectedSquare.coordinate.toString()}));n&&(n.piece=void 0,n.isSelected=!1),this.changeTurn()}this.toggleToUpdateView()}}]),e}(),u=Object(W.a)(o.prototype,"squares",[T.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=Object(W.a)(o.prototype,"isPressed",[T.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=Object(W.a)(o.prototype,"selectedSquare",[T.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=Object(W.a)(o.prototype,"possibleMoves",[T.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=Object(W.a)(o.prototype,"isWhiteTurn",[T.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=Object(W.a)(o.prototype,"toggleToUpdateView",[T.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.isPressed=!e.isPressed}}}),h=Object(W.a)(o.prototype,"setPossibleMoves",[T.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){if(e.possibleMoves=[],e.squares.forEach((function(e){e.isSelectable=!1})),e.selectedSquare.piece){var s=e.selectedSquare.piece.relativeMoves();e.possibleMoves=s.map((function(s){return new k(e.selectedSquare.coordinate.col+s.col,e.selectedSquare.coordinate.row+s.row)}));var n=e.squares.filter((function(s){return e.possibleMoves.some((function(e){return e.toString()==s.coordinate.toString()}))})).filter((function(s){var n;return s.piece&&s.piece.isWhite==!(null===(n=e.selectedSquare.piece)||void 0===n?void 0:n.isWhite)||!s.piece}));if(e.selectedSquare.piece.type==O.PAWN)e.hasPawnEnemyAhead();n.forEach((function(e){e.isSelectable=!0}))}}}}),o),G=n(8),U=n(0),Q=Object(G.a)((M=function(e){Object(y.a)(n,e);var s=Object(N.a)(n);function n(){var e;Object(v.a)(this,n);for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return e=s.call.apply(s,[this].concat(i)),Object(x.a)(e,"handleClick",C,Object(S.a)(e)),e}return Object(g.a)(n,[{key:"render",value:function(){var e,s,n=this,t=this.props.square;t.isSelected;return Object(U.jsxs)("button",{className:"square",onClick:function(){return n.handleClick(t)},disabled:!t.isSelectable,style:t.isSelected?{backgroundColor:"green"}:{backgroundColor:"grey"},children:[Object(U.jsx)("span",{style:{fontSize:6},children:"Col: "+t.coordinate.col+" Row: "+t.coordinate.row}),Object(U.jsx)("span",{style:(null===(e=t.piece)||void 0===e?void 0:e.isWhite)?{color:"white"}:{color:"black"},children:(null===(s=t.piece)||void 0===s?void 0:s.type)||""})]})}}]),n}(P.Component),C=Object(W.a)(M.prototype,"handleClick",[T.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(e){H.handleClickedSquare(e)}}}),I=M))||I,F=Object(G.a)(R=function(e){Object(y.a)(n,e);var s=Object(N.a)(n);function n(){return Object(v.a)(this,n),s.apply(this,arguments)}return Object(g.a)(n,[{key:"renderSquare",value:function(e,s){return Object(U.jsx)(Q,{square:e,isPressed:s})}},{key:"getSquare",value:function(e,s){return H.squares.find((function(n){return n.coordinate===new k(e,s)}))}},{key:"render",value:function(){var e=H.squares,s=H.isPressed;return Object(U.jsxs)("div",{children:[Object(U.jsxs)("div",{className:"board-row",children:[Object(U.jsx)(Q,{square:e[0],isPressed:s}),Object(U.jsx)(Q,{square:e[1],isPressed:s}),Object(U.jsx)(Q,{square:e[2],isPressed:s}),Object(U.jsx)(Q,{square:e[3],isPressed:s}),Object(U.jsx)(Q,{square:e[4],isPressed:s}),Object(U.jsx)(Q,{square:e[5],isPressed:s}),Object(U.jsx)(Q,{square:e[6],isPressed:s}),Object(U.jsx)(Q,{square:e[7],isPressed:s})]}),Object(U.jsxs)("div",{className:"board-row",children:[Object(U.jsx)(Q,{square:e[8],isPressed:s}),Object(U.jsx)(Q,{square:e[9],isPressed:s}),Object(U.jsx)(Q,{square:e[10],isPressed:s}),Object(U.jsx)(Q,{square:e[11],isPressed:s}),Object(U.jsx)(Q,{square:e[12],isPressed:s}),Object(U.jsx)(Q,{square:e[13],isPressed:s}),Object(U.jsx)(Q,{square:e[14],isPressed:s}),Object(U.jsx)(Q,{square:e[15],isPressed:s})]}),Object(U.jsxs)("div",{className:"board-row",children:[Object(U.jsx)(Q,{square:e[16],isPressed:s}),Object(U.jsx)(Q,{square:e[17],isPressed:s}),Object(U.jsx)(Q,{square:e[18],isPressed:s}),Object(U.jsx)(Q,{square:e[19],isPressed:s}),Object(U.jsx)(Q,{square:e[20],isPressed:s}),Object(U.jsx)(Q,{square:e[21],isPressed:s}),Object(U.jsx)(Q,{square:e[22],isPressed:s}),Object(U.jsx)(Q,{square:e[23],isPressed:s})]}),Object(U.jsxs)("div",{className:"board-row",children:[Object(U.jsx)(Q,{square:e[24],isPressed:s}),Object(U.jsx)(Q,{square:e[25],isPressed:s}),Object(U.jsx)(Q,{square:e[26],isPressed:s}),Object(U.jsx)(Q,{square:e[27],isPressed:s}),Object(U.jsx)(Q,{square:e[28],isPressed:s}),Object(U.jsx)(Q,{square:e[29],isPressed:s}),Object(U.jsx)(Q,{square:e[30],isPressed:s}),Object(U.jsx)(Q,{square:e[31],isPressed:s})]}),Object(U.jsxs)("div",{className:"board-row",children:[Object(U.jsx)(Q,{square:e[32],isPressed:s}),Object(U.jsx)(Q,{square:e[33],isPressed:s}),Object(U.jsx)(Q,{square:e[34],isPressed:s}),Object(U.jsx)(Q,{square:e[35],isPressed:s}),Object(U.jsx)(Q,{square:e[36],isPressed:s}),Object(U.jsx)(Q,{square:e[37],isPressed:s}),Object(U.jsx)(Q,{square:e[38],isPressed:s}),Object(U.jsx)(Q,{square:e[39],isPressed:s})]}),Object(U.jsxs)("div",{className:"board-row",children:[Object(U.jsx)(Q,{square:e[40],isPressed:s}),Object(U.jsx)(Q,{square:e[41],isPressed:s}),Object(U.jsx)(Q,{square:e[42],isPressed:s}),Object(U.jsx)(Q,{square:e[43],isPressed:s}),Object(U.jsx)(Q,{square:e[44],isPressed:s}),Object(U.jsx)(Q,{square:e[45],isPressed:s}),Object(U.jsx)(Q,{square:e[46],isPressed:s}),Object(U.jsx)(Q,{square:e[47],isPressed:s})]}),Object(U.jsxs)("div",{className:"board-row",children:[Object(U.jsx)(Q,{square:e[48],isPressed:s}),Object(U.jsx)(Q,{square:e[49],isPressed:s}),Object(U.jsx)(Q,{square:e[50],isPressed:s}),Object(U.jsx)(Q,{square:e[51],isPressed:s}),Object(U.jsx)(Q,{square:e[52],isPressed:s}),Object(U.jsx)(Q,{square:e[53],isPressed:s}),Object(U.jsx)(Q,{square:e[54],isPressed:s}),Object(U.jsx)(Q,{square:e[55],isPressed:s})]}),Object(U.jsxs)("div",{className:"board-row",children:[Object(U.jsx)(Q,{square:e[56],isPressed:s}),Object(U.jsx)(Q,{square:e[57],isPressed:s}),Object(U.jsx)(Q,{square:e[58],isPressed:s}),Object(U.jsx)(Q,{square:e[59],isPressed:s}),Object(U.jsx)(Q,{square:e[60],isPressed:s}),Object(U.jsx)(Q,{square:e[61],isPressed:s}),Object(U.jsx)(Q,{square:e[62],isPressed:s}),Object(U.jsx)(Q,{square:e[63],isPressed:s})]})]})}}]),n}(P.Component))||R,V=Object(G.a)((B=function(e){Object(y.a)(n,e);var s=Object(N.a)(n);function n(){var e;Object(v.a)(this,n);for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return e=s.call.apply(s,[this].concat(i)),Object(x.a)(e,"handleReset",E,Object(S.a)(e)),e}return Object(g.a)(n,[{key:"render",value:function(){var e=this,s=H.isWhiteTurn;return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)("button",{onClick:function(){return e.handleReset()},children:"Reset"}),Object(U.jsxs)("div",{className:"status",children:[s?"White ":"Black "," to move"]}),Object(U.jsxs)("div",{className:"game",children:[Object(U.jsx)("div",{className:"game-board",children:Object(U.jsx)(F,{})}),Object(U.jsxs)("div",{className:"game-info",children:[Object(U.jsx)("div",{children:m}),Object(U.jsx)("ol",{})]})]})]})}}]),n}(P.Component),E=Object(W.a)(B.prototype,"handleReset",[T.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(){H.reset()}}}),z=B))||z,J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(s){var n=s.getCLS,t=s.getFID,i=s.getFCP,r=s.getLCP,a=s.getTTFB;n(e),t(e),i(e),r(e),a(e)}))};f.a.render(Object(U.jsx)(p.a.StrictMode,{children:Object(U.jsx)(V,{})}),document.getElementById("root")),J()}},[[22,1,2]]]);
//# sourceMappingURL=main.a9594931.chunk.js.map