(window["webpackJsonpreact-translate-app"]=window["webpackJsonpreact-translate-app"]||[]).push([[92],{232:function(e,n){!function(e){e.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d+.*$/m]};var n={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(n).forEach((function(a){var t=n[a],i=[];/^\w+$/.test(a)||i.push(/\w+/.exec(a)[0]),"diff"===a&&i.push("bold"),e.languages.diff[a]={pattern:RegExp("^(?:["+t+"].*(?:\r\n?|\n|(?![\\s\\S])))+","m"),alias:i,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(a)[0]}}}})),Object.defineProperty(e.languages.diff,"PREFIXES",{value:n})}(Prism)}}]);
//# sourceMappingURL=92.41640aba.chunk.js.map