"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[8003],{747:(t,e,a)=>{a.r(e),a.d(e,{default:()=>n});var r=a(7294),l=a(8263);a(1302);const n=t=>{let{size:e,details:a,colors:n=["lightgray","black","black"],data:s,quadrants:i}=t;const o=(0,r.useRef)(null);return(0,r.useEffect)((()=>{if(o.current){const t=l.Ys(o.current),r=e,c=e,h=Math.min(r,c)/2-1-70;console.log("maxRadius "+h+" Width "+r+" Height "+c);const f=["Hold","Assess","Trial","Adopt"],d=50,p=l.Nb1().innerRadius(0).outerRadius(h).startAngle(0).endAngle(0),u=t.append("g").style("stroke",`var(${n[0]})`).attr("fill-opacity",.8).attr("fill",`var(${n[0]})`).attr("stroke-width",2).attr("stroke-opacity",0).attr("transform",`translate(${r/2+d}, ${c/2+d})`).selectAll("path").data(Array(i).fill()).join("path").attr("d",p);u.transition().duration(300).ease(l.oSY).delay(((t,e)=>300*e/i)).attrTween("d",(function(t,e){const a=l.sXR(0,h);return t=>l.Nb1().innerRadius(0).outerRadius(a(t)).startAngle(2*e*Math.PI/i).endAngle(2*(e+1)*Math.PI/i)()})).attrTween("fill-opacity",(function(){return l.sXR(.9,.2)})).attrTween("stroke-opacity",(function(){return l.sXR(.9,1)})).end().then((()=>{if(u.on("mouseover",(function(){l.Ys(this).transition().duration(200).attr("fill-opacity",.6).attr("transform","scale(1.1)")})).on("mouseout",(function(){l.Ys(this).transition().duration(200).attr("fill-opacity",.2).attr("transform","scale(1)")})),a){l.jvg().x((t=>t[0])).y((t=>t[1]));t.append("rect").attr("x",r/2-h+d).attr("y",c/2-20+d).attr("width",r/2+h-d-20).attr("height",40).attr("fill",`var(${n[0]})`).attr("fill-opacity",.5);for(let e=1;e<=2;e++)t.append("circle").attr("cx",r/2+d).attr("cy",c/2+d).attr("r",h/3*e).style("fill",`var(${n[0]})`).style("opacity",.15*e).style("stroke",`var(${n[0]})`);for(let e=1;e<=4;e++)t.append("text").attr("x",4==e?r/2+d:h/3*(e-1)+d+16+(r/2-h)).attr("y",c/2+5+d).style("text-anchor","middle").style("font-size","14").style("font-weight","400").attr("fill","var(--ifm-color-neutral-lightest)").text(f[e-1]),4!=e&&t.append("text").attr("x",r-d-h/3*(e-1)+12).attr("y",c/2+5+d).style("text-anchor","middle").style("font-size","14").style("font-weight","400").attr("fill","var(--ifm-color-neutral-lightest)").text(f[e-1])}t.append("g").attr("transform",`translate(${r/2}, ${c/2})`).selectAll("text").data(s).join("text").attr("dy","-0.5em").attr("fill","var(--ifm-color-neutral-darkest)").style("text-anchor","middle").style("font-size","14").style("font-weight","600").attr("transform",((t,e)=>{const a=(2*e+1)*Math.PI/s.length-Math.PI/2,r=(Math.sin(a),h+55);return`translate(${r*Math.cos(a)+d}, ${r*Math.sin(a)+d})`})).call((t=>{t.each((function(t){if(null==t.label)return;let e=t.label.split(" ");l.Ys(this).text(e[0].replaceAll("~"," "));for(let a=1;a<e.length;a++)l.Ys(this).append("tspan").attr("x",0).attr("dy","1.2em").text(e[a].replaceAll("~"," "))}))})),t.append("g").attr("transform",`translate(${r/2}, ${c/2})`).selectAll("text").data(s).join("g").attr("dy","0.35em").attr("fill","var(--ifm-color-content)").style("text-anchor","middle").style("font-size","14").attr("transform",((t,e)=>{const a=(2*e+1)*Math.PI/s.length-Math.PI/2-.2,r=h/5;return`translate(${r*Math.cos(a)+d}, ${r*Math.sin(a)+d})`})).each((function(t,e){const r=l.Ys(this);if(a&&Array.isArray(t.innerLabel))for(let a=0;a<t.innerLabel.length;a++){let n=Math.PI/12,i=.8;r.append("text").attr("transform",(()=>{let r=t.innerLabel?1-t.innerLabel[a].relevance:1;const l=(2*e+1)*Math.PI/s.length-Math.PI/2+n,o=h*i*r;return`translate(${o*Math.cos(l)}, ${o*Math.sin(l)})`})).attr("fill","var(--ifm-color-content)").style("text-anchor","middle").text((e=>t.innerLabel[a])).call((t=>t.each((function(t){if(console.log(t.innerLabel[a]),null==t.innerLabel)return;let e=t.innerLabel[a].value.split(" ");l.Ys(this).text(e[0].replaceAll("~"," "));for(let a=1;a<e.length;a++)l.Ys(this).append("tspan").attr("x",0).attr("dy","1.2em").text(e[a].replaceAll("~"," "))}))))}else{const t=Math.PI/20,a=.8;r.append("text").attr("transform",(()=>{const r=(2*e+1)*Math.PI/s.length-Math.PI/2+t,l=h/2*a;return`translate(${l*Math.cos(r)}, ${l*Math.sin(r)})`})).attr("fill","var(--ifm-color-content)").style("text-anchor","middle").text((t=>t.innerLabel)).call((t=>t.each((function(t){if(null!=t.innerLabel)if(Array.isArray(t.innerLabel)){let e=t.innerLabel.map((t=>t.value));l.Ys(this).text(e[0].replaceAll("~"," "));for(let t=1;t<e.length;t++)l.Ys(this).append("tspan").attr("x",0).attr("dy","1.2em").text(e[t].replaceAll("~"," "))}else{let e=t.innerLabel.split(" ");l.Ys(this).text(e[0].replaceAll("~"," "));for(let t=1;t<e.length;t++)l.Ys(this).append("tspan").attr("x",0).attr("dy","1.2em").text(e[t].replaceAll("~"," "))}}))))}}))}))}}),[]),r.createElement("svg",{width:e+100,height:e+100,ref:o})}},1302:(t,e,a)=>{a.d(e,{Z:()=>r});const r={container:"container_hMeu",pagecontainer:"pagecontainer_imHc",fixed:"fixed_DM1u",radarCheckbox:"radarCheckbox_r0ne",staticText:"staticText_QoX_"}}}]);