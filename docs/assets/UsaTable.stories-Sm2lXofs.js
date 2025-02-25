import{l as ee,s as H,x as N,u as aa,N as ne,f as Q,g as W,o as g,a as O,c as T,t as I,m as ta,r as x,d as R,v as C,b as m,H as $,I as X,h as ra,Q as na,M as se}from"./vue.esm-bundler-DsKf3Hbt.js";import{k as oe,o as Y}from"./common-cfad2wKl.js";import{_ as Qe}from"./UsaTableHeaderCell-CcucBQX1.js";import{_ as sa}from"./UsaTableSortButton-8oeF4ytP.js";var We=function(e){return function(a,t,r){return e(a,t,r)*r}},ae=function(e,a){if(e)throw Error("Invalid sort config: "+a)},Xe=function(e){var a=e||{},t=a.asc,r=a.desc,n=t?1:-1,i=t||r;ae(!i,"Expected `asc` or `desc` property"),ae(t&&r,"Ambiguous object with `asc` and `desc` config properties");var p=e.comparer&&We(e.comparer);return{order:n,sortBy:i,comparer:p}},oa=function(e){return function a(t,r,n,i,p,f,k){var v,S;if(typeof t=="string")v=f[t],S=k[t];else if(typeof t=="function")v=t(f),S=t(k);else{var A=Xe(t);return a(A.sortBy,r,n,A.order,A.comparer||e,f,k)}var U=p(v,S,i);return(U===0||v==null&&S==null)&&r.length>n?a(r[n],r,n+1,i,p,f,k):U}};function Ye(e,a,t){if(e===void 0||e===!0)return function(i,p){return a(i,p,t)};if(typeof e=="string")return ae(e.includes("."),"String syntax not allowed for nested properties."),function(i,p){return a(i[e],p[e],t)};if(typeof e=="function")return function(i,p){return a(e(i),e(p),t)};if(Array.isArray(e)){var r=oa(a);return function(i,p){return r(e[0],e,1,t,a,i,p)}}var n=Xe(e);return Ye(n.sortBy,n.comparer||a,n.order)}var Z=function(e,a,t,r){var n;return Array.isArray(a)?(Array.isArray(t)&&t.length<2&&(n=t,t=n[0]),a.sort(Ye(t,r,e))):a};function te(e){var a=We(e.comparer);return function(t){var r=Array.isArray(t)&&!e.inPlaceSorting?t.slice():t;return{asc:function(n){return Z(1,r,n,a)},desc:function(n){return Z(-1,r,n,a)},by:function(n){return Z(1,r,n,a)}}}}var Ze=function(e,a,t){return e==null?t:a==null?-t:typeof e!=typeof a?typeof e<typeof a?-1:1:e<a?-1:e>a?1:0};te({comparer:Ze});te({comparer:Ze,inPlaceSorting:!0});function la(){return te({comparer:new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}).compare,inPlaceSorting:!1})}function ea(e=[],a=[],t="",r=""){const n=ee(t),i=ee(r),p=la(),f=H(()=>e.value.map(s=>{if(typeof s=="string")return{id:oe(s),label:s,sortable:!1,headerRow:!1};const y={...s};return s!=null&&s.id||(y.id=oe(s.label)),Y(s,"sortable")?y.sortable=s.sortable:y.sortable=!1,Y(s,"headerRow")?y.headerRow=s.headerRow:y.headerRow=!1,y})),k=H(()=>{if(!n.value)return null;const[s]=f.value.filter(y=>y.id===n.value);return s.label}),v=H(()=>f.value.some(s=>s.sortable)),S=H(()=>a.value.map(y=>Object.entries(y).reduce((c,[w,u])=>typeof u!="object"?(c[w]={displayValue:u,sortValue:u},c):(c[w]={...y[w]},Y(u,"sortValue")||(c[w].sortValue=u.displayValue),c),{}))),A=H(()=>i.value==="ascending"?p(S.value).asc(s=>s[n.value].sortValue):i.value==="descending"?p(S.value).desc(s=>s[n.value].sortValue):S.value),U=()=>{!i.value||i.value==="unsorted"?i.value="ascending":i.value=i.value==="ascending"?"descending":"ascending"},V=s=>n.value=s;return{headers:f,rows:A,hasSortableHeaders:N(v),currentSortedHeader:N(n),currentSortedHeaderLabel:N(k),currentSortDirection:N(i),toggleSortDirection:U,updateCurrentSortedHeader:V}}ea.__docgenInfo={exportName:"useTableSort",displayName:"useTableSort",type:2,props:[{name:"length",global:!1,description:"Gets or sets the length of the array. This is a number one higher than the highest index in the array.",tags:[],required:!0,type:"number",declarations:[],schema:"number"},{name:"toString",global:!1,description:"Returns a string representation of an array.",tags:[],required:!0,type:"() => string",declarations:[],schema:{kind:"event",type:"(): string"}},{name:"toLocaleString",global:!1,description:"Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.",tags:[],required:!0,type:"{ (): string; (locales: string | string[], options?: NumberFormatOptions & DateTimeFormatOptions): string; }",declarations:[],schema:"{ (): string; (locales: string | string[], options?: NumberFormatOptions & DateTimeFormatOptions): string; }"},{name:"pop",global:!1,description:`Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.`,tags:[],required:!0,type:"() => any",declarations:[],schema:{kind:"event",type:"(): any"}},{name:"push",global:!1,description:"Appends new elements to the end of an array, and returns the new length of the array.",tags:[{name:"param",text:"items New elements to add to the array."}],required:!0,type:"(...items: any[]) => number",declarations:[],schema:{kind:"event",type:"(...items: any[]): number"}},{name:"concat",global:!1,description:`Combines two or more arrays.
This method returns a new array without modifying any existing arrays.`,tags:[{name:"param",text:"items Additional arrays and/or items to add to the end of the array."},{name:"param",text:"items Additional arrays and/or items to add to the end of the array."}],required:!0,type:"{ (...items: ConcatArray<any>[]): any[]; (...items: any[]): any[]; }",declarations:[],schema:"{ (...items: ConcatArray<any>[]): any[]; (...items: any[]): any[]; }"},{name:"join",global:!1,description:"Adds all the elements of an array into a string, separated by the specified separator string.",tags:[{name:"param",text:"separator A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma."}],required:!0,type:"(separator?: string) => string",declarations:[],schema:{kind:"event",type:"(separator?: string): string"}},{name:"reverse",global:!1,description:`Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.`,tags:[],required:!0,type:"() => any[]",declarations:[],schema:{kind:"event",type:"(): any[]"}},{name:"shift",global:!1,description:`Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.`,tags:[],required:!0,type:"() => any",declarations:[],schema:{kind:"event",type:"(): any"}},{name:"slice",global:!1,description:`Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.`,tags:[{name:"param",text:`start The beginning index of the specified portion of the array.
If start is undefined, then the slice begins at index 0.`},{name:"param",text:`end The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
If end is undefined, then the slice extends to the end of the array.`}],required:!0,type:"(start?: number, end?: number) => any[]",declarations:[],schema:{kind:"event",type:"(start?: number, end?: number): any[]"}},{name:"sort",global:!1,description:`Sorts an array in place.
This method mutates the array and returns a reference to the same array.`,tags:[{name:"param",text:"compareFn Function used to determine the order of the elements. It is expected to return\na negative value if the first argument is less than the second argument, zero if they're equal, and a positive\nvalue otherwise. If omitted, the elements are sorted in ascending, ASCII character order.\n```ts\n[11,2,22,1].sort((a, b) => a - b)\n```"}],required:!0,type:"(compareFn?: (a: any, b: any) => number) => any[]",declarations:[],schema:{kind:"event",type:"(compareFn?: (a: any, b: any) => number): any[]"}},{name:"splice",global:!1,description:"Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.",tags:[{name:"param",text:"start The zero-based location in the array from which to start removing elements."},{name:"param",text:"deleteCount The number of elements to remove."},{name:"returns",text:"An array containing the elements that were deleted."},{name:"param",text:"start The zero-based location in the array from which to start removing elements."},{name:"param",text:"deleteCount The number of elements to remove."},{name:"param",text:"items Elements to insert into the array in place of the deleted elements."},{name:"returns",text:"An array containing the elements that were deleted."}],required:!0,type:"{ (start: number, deleteCount?: number): any[]; (start: number, deleteCount: number, ...items: any[]): any[]; }",declarations:[],schema:"{ (start: number, deleteCount?: number): any[]; (start: number, deleteCount: number, ...items: any[]): any[]; }"},{name:"unshift",global:!1,description:"Inserts new elements at the start of an array, and returns the new length of the array.",tags:[{name:"param",text:"items Elements to insert at the start of the array."}],required:!0,type:"(...items: any[]) => number",declarations:[],schema:{kind:"event",type:"(...items: any[]): number"}},{name:"indexOf",global:!1,description:"Returns the index of the first occurrence of a value in an array, or -1 if it is not present.",tags:[{name:"param",text:"searchElement The value to locate in the array."},{name:"param",text:"fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0."}],required:!0,type:"(searchElement: any, fromIndex?: number) => number",declarations:[],schema:{kind:"event",type:"(searchElement: any, fromIndex?: number): number"}},{name:"lastIndexOf",global:!1,description:"Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.",tags:[{name:"param",text:"searchElement The value to locate in the array."},{name:"param",text:"fromIndex The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array."}],required:!0,type:"(searchElement: any, fromIndex?: number) => number",declarations:[],schema:{kind:"event",type:"(searchElement: any, fromIndex?: number): number"}},{name:"every",global:!1,description:"Determines whether all the members of an array satisfy the specified test.",tags:[{name:"param",text:`predicate A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.`},{name:"param",text:`thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.`},{name:"param",text:`predicate A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.`},{name:"param",text:`thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.`}],required:!0,type:"{ <S extends any>(predicate: (value: any, index: number, array: any[]) => value is S, thisArg?: any): this is S[]; (predicate: (value: any, index: number, array: any[]) => unknown, thisArg?: any): boolean; }",declarations:[],schema:"{ <S extends any>(predicate: (value: any, index: number, array: any[]) => value is S, thisArg?: any): this is S[]; (predicate: (value: any, index: number, array: any[]) => unknown, thisArg?: any): boolean; }"},{name:"some",global:!1,description:"Determines whether the specified callback function returns true for any element of an array.",tags:[{name:"param",text:`predicate A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.`},{name:"param",text:`thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.`}],required:!0,type:"(predicate: (value: any, index: number, array: any[]) => unknown, thisArg?: any) => boolean",declarations:[],schema:{kind:"event",type:"(predicate: (value: any, index: number, array: any[]) => unknown, thisArg?: any): boolean"}},{name:"forEach",global:!1,description:"Performs the specified action for each element in an array.",tags:[{name:"param",text:"callbackfn A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array."},{name:"param",text:"thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value."}],required:!0,type:"(callbackfn: (value: any, index: number, array: any[]) => void, thisArg?: any) => void",declarations:[],schema:{kind:"event",type:"(callbackfn: (value: any, index: number, array: any[]) => void, thisArg?: any): void"}},{name:"map",global:!1,description:"Calls a defined callback function on each element of an array, and returns an array that contains the results.",tags:[{name:"param",text:"callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array."},{name:"param",text:"thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value."}],required:!0,type:"<U>(callbackfn: (value: any, index: number, array: any[]) => U, thisArg?: any) => U[]",declarations:[],schema:{kind:"event",type:"<U>(callbackfn: (value: any, index: number, array: any[]) => U, thisArg?: any): U[]"}},{name:"filter",global:!1,description:"Returns the elements of an array that meet the condition specified in a callback function.",tags:[{name:"param",text:"predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array."},{name:"param",text:"thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value."},{name:"param",text:"predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array."},{name:"param",text:"thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value."}],required:!0,type:"{ <S extends any>(predicate: (value: any, index: number, array: any[]) => value is S, thisArg?: any): S[]; (predicate: (value: any, index: number, array: any[]) => unknown, thisArg?: any): any[]; }",declarations:[],schema:"{ <S extends any>(predicate: (value: any, index: number, array: any[]) => value is S, thisArg?: any): S[]; (predicate: (value: any, index: number, array: any[]) => unknown, thisArg?: any): any[]; }"},{name:"reduce",global:!1,description:"Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.",tags:[{name:"param",text:"callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array."},{name:"param",text:"initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value."},{name:"param",text:"callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array."},{name:"param",text:"initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value."}],required:!0,type:"{ (callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any): any; (callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any, initialValue: any): any; <U>(callbackfn: (previousValue: U, currentValue: any, currentIndex: number, array: any[]) ...",declarations:[],schema:"{ (callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any): any; (callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any, initialValue: any): any; <U>(callbackfn: (previousValue: U, currentValue: any, currentIndex: number, array: any[]) ..."},{name:"reduceRight",global:!1,description:"Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.",tags:[{name:"param",text:"callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array."},{name:"param",text:"initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value."},{name:"param",text:"callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array."},{name:"param",text:"initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value."}],required:!0,type:"{ (callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any): any; (callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any, initialValue: any): any; <U>(callbackfn: (previousValue: U, currentValue: any, currentIndex: number, array: any[]) ...",declarations:[],schema:"{ (callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any): any; (callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any, initialValue: any): any; <U>(callbackfn: (previousValue: U, currentValue: any, currentIndex: number, array: any[]) ..."},{name:"find",global:!1,description:`Returns the value of the first element in the array where predicate is true, and undefined
otherwise.`,tags:[{name:"param",text:`predicate find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.`},{name:"param",text:`thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.`}],required:!0,type:"{ <S extends any>(predicate: (value: any, index: number, obj: any[]) => value is S, thisArg?: any): S; (predicate: (value: any, index: number, obj: any[]) => unknown, thisArg?: any): any; }",declarations:[],schema:"{ <S extends any>(predicate: (value: any, index: number, obj: any[]) => value is S, thisArg?: any): S; (predicate: (value: any, index: number, obj: any[]) => unknown, thisArg?: any): any; }"},{name:"findIndex",global:!1,description:`Returns the index of the first element in the array where predicate is true, and -1
otherwise.`,tags:[{name:"param",text:`predicate find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.`},{name:"param",text:`thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.`}],required:!0,type:"(predicate: (value: any, index: number, obj: any[]) => unknown, thisArg?: any) => number",declarations:[],schema:{kind:"event",type:"(predicate: (value: any, index: number, obj: any[]) => unknown, thisArg?: any): number"}},{name:"fill",global:!1,description:"Changes all array elements from `start` to `end` index to a static `value` and returns the modified array",tags:[{name:"param",text:"value value to fill array section with"},{name:"param",text:`start index to start filling the array at. If start is negative, it is treated as
length+start where length is the length of the array.`},{name:"param",text:`end index to stop filling the array at. If end is negative, it is treated as
length+end.`}],required:!0,type:"(value: any, start?: number, end?: number) => any[]",declarations:[],schema:{kind:"event",type:"(value: any, start?: number, end?: number): any[]"}},{name:"copyWithin",global:!1,description:`Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target`,tags:[{name:"param",text:`target If target is negative, it is treated as length+target where length is the
length of the array.`},{name:"param",text:`start If start is negative, it is treated as length+start. If end is negative, it
is treated as length+end.`},{name:"param",text:"end If not specified, length of the this object is used as its default value."}],required:!0,type:"(target: number, start: number, end?: number) => any[]",declarations:[],schema:{kind:"event",type:"(target: number, start: number, end?: number): any[]"}},{name:"entries",global:!1,description:"Returns an iterable of key, value pairs for every entry in the array",tags:[],required:!0,type:"() => ArrayIterator<[number, any]>",declarations:[],schema:{kind:"event",type:"(): ArrayIterator<[number, any]>"}},{name:"keys",global:!1,description:"Returns an iterable of keys in the array",tags:[],required:!0,type:"() => ArrayIterator<number>",declarations:[],schema:{kind:"event",type:"(): ArrayIterator<number>"}},{name:"values",global:!1,description:"Returns an iterable of values in the array",tags:[],required:!0,type:"() => ArrayIterator<any>",declarations:[],schema:{kind:"event",type:"(): ArrayIterator<any>"}},{name:"includes",global:!1,description:"Determines whether an array includes a certain element, returning true or false as appropriate.",tags:[{name:"param",text:"searchElement The element to search for."},{name:"param",text:"fromIndex The position in this array at which to begin searching for searchElement."}],required:!0,type:"(searchElement: any, fromIndex?: number) => boolean",declarations:[],schema:{kind:"event",type:"(searchElement: any, fromIndex?: number): boolean"}},{name:"flatMap",global:!1,description:`Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.`,tags:[{name:"param",text:`callback A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.`},{name:"param",text:`thisArg An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.`}],required:!0,type:"<U, This = undefined>(callback: (this: This, value: any, index: number, array: any[]) => U | readonly U[], thisArg?: This) => U[]",declarations:[],schema:{kind:"event",type:"<U, This = undefined>(callback: (this: This, value: any, index: number, array: any[]) => U | readonly U[], thisArg?: This): U[]"}},{name:"flat",global:!1,description:`Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.`,tags:[{name:"param",text:"depth The maximum recursion depth"}],required:!0,type:"<A, D extends number = 1>(this: A, depth?: D) => FlatArray<A, D>[]",declarations:[],schema:{kind:"event",type:"<A, D extends number = 1>(this: A, depth?: D): FlatArray<A, D>[]"}},{name:"__@iterator@844",global:!1,description:"Iterator",tags:[],required:!0,type:"() => ArrayIterator<any>",declarations:[],schema:{kind:"event",type:"(): ArrayIterator<any>"}},{name:"__@unscopables@846",global:!1,description:`Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.`,tags:[],required:!0,type:"{ [x: number]: boolean; length?: boolean; toString?: boolean; toLocaleString?: boolean; pop?: boolean; push?: boolean; concat?: boolean; join?: boolean; reverse?: boolean; shift?: boolean; slice?: boolean; sort?: boolean; ... 23 more ...; at?: boolean; }",declarations:[],schema:"{ [x: number]: boolean; length?: boolean; toString?: boolean; toLocaleString?: boolean; pop?: boolean; push?: boolean; concat?: boolean; join?: boolean; reverse?: boolean; shift?: boolean; slice?: boolean; sort?: boolean; ... 23 more ...; at?: boolean; }"},{name:"at",global:!1,description:`Takes an integer value and returns the item at that index,
allowing for positive and negative integers.
Negative integers count back from the last item in the array.`,tags:[],required:!0,type:"(index: number) => any",declarations:[],schema:{kind:"event",type:"(index: number): any"}}],events:[],slots:[],exposed:[],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/composables/useTableSort.js"};const ia={key:0,class:"usa-sr-only usa-table__announcement-region","aria-live":"polite"},da={name:"UsaTable",inheritAttrs:!1},h=Object.assign(da,{props:{caption:{type:String,default:""},borderless:{type:Boolean,default:!1},striped:{type:Boolean,default:!1},compact:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},stacked:{type:Boolean,default:!1},stackedHeader:{type:Boolean,default:!1},headers:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},defaultSortDirection:{type:String,default:""},defaultSortHeader:{type:String,default:""}},setup(e){const a=aa(),t=ee(null),r=e,{headers:n,rows:i,hasSortableHeaders:p,currentSortedHeader:f,currentSortedHeaderLabel:k,currentSortDirection:v,toggleSortDirection:S,updateCurrentSortedHeader:A}=ea(ne(r,"headers"),ne(r,"rows"),r.defaultSortHeader,r.defaultSortDirection),U=H(()=>[{"usa-table--borderless":r.borderless,"usa-table--striped":r.striped,"usa-table--compact":r.compact,"usa-table--stacked":r.stacked,"usa-table--stacked-header":r.stackedHeader}]),V=H(()=>p.value&&!(a!=null&&a.default)&&!(a!=null&&a.headers)),s=H(()=>r.caption?r.caption:t.value?t.value.textContent:null),y={name:"UsaTableContainer",props:{isScrollable:{type:Boolean,default:!1}},setup({isScrollable:c},{slots:w}){return()=>c?na("div",{class:"usa-table-container--scrollable",tabindex:0},w.default()):w.default()}};return se("toggleSortDirection",S),se("updateCurrentSortedHeader",A),(c,w)=>(g(),Q(y,{"is-scrollable":e.scrollable},{default:W(()=>[O("table",ta(c.$attrs,{class:["usa-table",U.value]}),[e.caption||c.$slots.caption?(g(),T("caption",{key:0,ref_key:"captionRef",ref:t},[x(c.$slots,"caption",{},()=>[R(C(e.caption),1)])],512)):I("",!0),O("thead",null,[c.$slots.headers?x(c.$slots,"headers",{key:0}):m(n).length?x(c.$slots,"headers",{key:1,headers:m(n)},()=>[O("tr",null,[(g(!0),T($,null,X(m(n),u=>(g(),Q(m(Qe),{id:u.id,key:u.id,label:u.label,sortable:V.value&&u.sortable,"current-sorted-header":m(f),"current-sort-direction":m(f)===u.id?m(v):""},{default:W(()=>[x(c.$slots,`header-${u.id}`,{header:u},()=>[R(C(u.label),1)])]),_:2},1032,["id","label","sortable","current-sorted-header","current-sort-direction"]))),128))])]):I("",!0)]),O("tbody",null,[c.$slots.default?x(c.$slots,"default",{key:0}):m(i).length?x(c.$slots,"default",{key:1,rows:m(i)},()=>[(g(!0),T($,null,X(m(i),(u,re)=>(g(),T("tr",{key:re},[(g(!0),T($,null,X(m(n),b=>(g(),Q(ra(b.headerRow?"th":"td"),{key:`${b.id}-${re}`,scope:b.headerRow?"row":null,role:b.headerRow?"rowheader":null,"data-label":b.label,"data-sort-active":m(f)===b.id?!0:null,"data-sort-value":u[b.id].sortValue},{default:W(()=>[x(c.$slots,`cell-${b.id}`,{header:b,row:u,cell:u[b.id]},()=>[R(C(u[b.id].displayValue),1)])]),_:2},1032,["scope","role","data-label","data-sort-active","data-sort-value"]))),128))]))),128))]):I("",!0)])],16),V.value?(g(),T("div",ia,[x(c.$slots,"table-announcement",{currentSortedHeader:m(f),currentSortDirection:m(v),currentSortedHeaderLabel:m(k),tableCaption:s.value},()=>[m(f)?(g(),T($,{key:0},[w[0]||(w[0]=R("The table ")),s.value?(g(),T($,{key:0},[R('named "'+C(s.value)+'"',1)],64)):I("",!0),R(' is now sorted by "'+C(m(k))+'" in '+C(m(v))+" order.",1)],64)):I("",!0)])])):I("",!0)]),_:3},8,["is-scrollable"]))}});h.__docgenInfo={exportName:"default",displayName:"UsaTable",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"caption",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"borderless",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"striped",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"compact",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"scrollable",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"stacked",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"stackedHeader",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"headers",global:!1,description:"",tags:[],required:!1,type:"unknown[]",declarations:[],schema:{kind:"array",type:"unknown[]"},default:"[]"},{name:"rows",global:!1,description:"",tags:[],required:!1,type:"unknown[]",declarations:[],schema:{kind:"array",type:"unknown[]"},default:"[]"},{name:"defaultSortDirection",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"defaultSortHeader",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'}],events:[],slots:[{name:"caption",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"headers",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"table-announcement",type:"{ currentSortedHeader: any; currentSortDirection: any; currentSortedHeaderLabel: any; tableCaption: any; }",description:"",declarations:[],schema:{kind:"object",type:"{ currentSortedHeader: any; currentSortDirection: any; currentSortedHeaderLabel: any; tableCaption: any; }"}}],exposed:[{name:"$slots",type:"Readonly<InternalSlots> & Partial<Record<`header-${any}`, (_: { header: any; }) => any>> & Partial<Record<`cell-${any}`, (_: { header: any; row: any; cell: any; }) => any>> & { ...; }",description:"",declarations:[],schema:{kind:"object",type:"Readonly<InternalSlots> & Partial<Record<`header-${any}`, (_: { header: any; }) => any>> & Partial<Record<`cell-${any}`, (_: { header: any; row: any; cell: any; }) => any>> & { ...; }"}},{name:"caption",type:"string",description:"",declarations:[],schema:"string"},{name:"borderless",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"striped",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"compact",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"scrollable",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"stacked",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"stackedHeader",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"headers",type:"unknown[]",description:"",declarations:[],schema:{kind:"array",type:"unknown[]"}},{name:"rows",type:"unknown[]",description:"",declarations:[],schema:{kind:"array",type:"unknown[]"}},{name:"defaultSortDirection",type:"string",description:"",declarations:[],schema:"string"},{name:"defaultSortHeader",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaTable/UsaTable.vue"};const o=[{id:"alphabetical",label:"Alphabetical",sortable:!0,headerRow:!0},{id:"month",label:"Month",sortable:!0},{id:"percent",label:"Percent",sortable:!0},{id:"count",label:"Count",sortable:!0}],l=[{alphabetical:"Tango",month:{sortValue:3,displayValue:"March"},percent:{sortValue:.206,displayValue:"20.6%"},count:{sortValue:23612,displayValue:"23,612"}},{alphabetical:"Foxtrot",month:{sortValue:4,displayValue:"April"},percent:{sortValue:.026,displayValue:"2.6%"},count:-32},{alphabetical:"Hilo",month:{sortValue:1,displayValue:"January"},percent:{sortValue:-3.006,displayValue:"-3.6%"},count:{sortValue:.002,displayValue:"0.002"}},{alphabetical:"Bravo",month:{sortValue:12,displayValue:"December"},percent:{sortValue:-.036,displayValue:"-300.6%"},count:0}],d={caption:h.props.caption.default,borderless:h.props.borderless.default,striped:h.props.striped.default,compact:h.props.compact.default,scrollable:h.props.scrollable.default,stacked:h.props.stacked.default,stackedHeader:h.props.stackedHeader.default,headers:h.props.headers.default(),rows:h.props.rows.default(),defaultSortDirection:h.props.defaultSortDirection.default,defaultSortHeader:h.props.defaultSortHeader.default},ha={component:h,subcomponents:{UsaTableHeaderCell:Qe,UsaTableSortButton:sa},title:"Components/UsaTable",argTypes:{caption:{control:{type:"text"},table:{category:"props"}},borderless:{control:{type:"boolean"}},striped:{control:{type:"boolean"}},compact:{control:{type:"boolean"}},scrollable:{control:{type:"boolean"}},stacked:{control:{type:"boolean"}},stackedHeader:{control:{type:"boolean"}},headers:{control:{type:"object"},table:{category:"props"}},rows:{control:{type:"object"}},defaultSortDirection:{control:{type:"text"}},defaultSortHeader:{control:{type:"text"}},"slot:caption":{control:{type:"text"},name:"caption",table:{category:"slots"}},"slot:headers":{control:{type:"text"},name:"headers",table:{category:"slots"}},default:{control:{type:"text"}},"table-announcement":{control:{type:"text"}}},args:{caption:d.caption,borderless:d.borderless,striped:d.striped,compact:d.compact,scrollable:d.scrollable,stacked:d.stacked,stackedHeader:d.stackedHeader,headers:d.headers,rows:d.rows,defaultSortDirection:d.defaultSortDirection,defaultSortHeader:d.defaultSortHeader,"slot:caption":"","slot:headers":"",default:"","table-announcement":""},render:e=>({components:{UsaTable:h},props:Object.keys(h.props),setup(){return{args:e}},template:`<UsaTable
      :caption="args.caption"
      :borderless="args.borderless"
      :striped="args.striped"
      :compact="args.compact"
      :scrollable="args.scrollable"
      :stacked="args.stacked"
      :stackedHeader="args.stackedHeader"
      :headers="args.headers"
      :rows="args.rows"
      :defaultSortDirection="args.defaultSortDirection"
      :defaultSortHeader="args.defaultSortHeader"
    >
      <template v-if="!!args['slot:caption']" #caption>${e["slot:caption"]}</template>
      <template v-if="!!args['slot:headers']" #headers="{ headers }">${e["slot:headers"]}</template>
      <template v-if="!!args.default" #default>${e.default}</template>
      <template v-if="!!args['table-announcement']" #table-announcement="{ currentSortedHeader, currentSortDirection, currentSortedHeaderLabel, tableCaption }">${e["table-announcement"]}</template>
    </UsaTable>`})},D={args:{...d,headers:o.map(({...e})=>(e.sortable=!1,e)),rows:l},name:"Default",parameters:{docs:{source:{code:`<UsaTable :headers="${JSON.stringify(o.map(({...e})=>(e.sortable=!1,e)),null,"	")}" 
:rows="${JSON.stringify(l,null,"	")}"></UsaTable>`}}}},q={args:{...d,headers:o.map(({...e})=>(e.sortable=!1,e)),rows:l,caption:"A table caption"},name:"Caption",parameters:{docs:{source:{code:`<UsaTable :headers="${JSON.stringify(o.map(({...e})=>(e.sortable=!1,e)),null,"	")}" 
:rows="${JSON.stringify(l,null,"	")}" caption="A table caption"></UsaTable>`}}}},J={args:{...d,headers:o.map(({...e})=>(e.sortable=!1,e)),rows:l,borderless:!0},name:"Borderless",parameters:{docs:{source:{code:`<UsaTable :headers="${JSON.stringify(o.map(({...e})=>(e.sortable=!1,e)),null,"	")}" 
:rows="${JSON.stringify(l,null,"	")}" :borderless="true"></UsaTable>`}}}},j={args:{...d,headers:o.map(({...e})=>(e.sortable=!1,{...e})),rows:l,striped:!0},name:"Striped",parameters:{docs:{source:{code:`<UsaTable :headers="${JSON.stringify(o.map(({...e})=>(e.sortable=!1,e)),null,"	")}" 
:rows="${JSON.stringify(l,null,"	")}" :striped="true"></UsaTable>`}}}},P={args:{...d,headers:o.map(({...e})=>(e.sortable=!1,e)),rows:l,compact:!0},name:"Compact",parameters:{docs:{source:{code:`<UsaTable :headers="${JSON.stringify(o.map(({...e})=>(e.sortable=!1,e)),null,"	")}" 
:rows="${JSON.stringify(l,null,"	")}" :compact="true"></UsaTable>`}}}},_={args:{...d,headers:o.map(({...e})=>(e.sortable=!1,e)),rows:l,scrollable:!0,caption:"Resize to small screen..."},name:"Scrollable",parameters:{docs:{source:{code:`<UsaTable :headers="${JSON.stringify(o.map(({...e})=>(e.sortable=!1,e)),null,"	")}" 
:rows="${JSON.stringify(l,null,"	")}" :scrollable="true" caption="Resize to small screen..."></UsaTable>`}}}},E={args:{...d,headers:o.map(({...e})=>(e.sortable=!1,e)),rows:l,stacked:!0,caption:"Resize to small screen..."},name:"Stacked",parameters:{docs:{source:{code:`<UsaTable :headers="${JSON.stringify(o.map(({...e})=>(e.sortable=!1,e)),null,"	")}" 
:rows="${JSON.stringify(l,null,"	")}" :stacked="true" caption="Resize to small screen..."></UsaTable>`}}}},L={args:{...d,headers:o.map(({...e})=>(e.sortable=!1,e)),rows:l,stackedHeader:!0,caption:"Resize to small screen..."},name:"Stacked Header",parameters:{docs:{source:{code:`<UsaTable :headers="${JSON.stringify(o.map(({...e})=>(e.sortable=!1,e)),null,"	")}" 
:rows="${JSON.stringify(l,null,"	")}" :stacked-header="true" caption="Resize to small screen..."></UsaTable>`}}}},z={args:{...d,headers:o,rows:l},name:"Sortable",parameters:{docs:{source:{code:`<UsaTable :headers="${JSON.stringify(o,null,"	")}" 
:rows="${JSON.stringify(l,null,"	")}"></UsaTable>`}}}},F={args:{...d,headers:o,rows:l,defaultSortHeader:"percent",defaultSortDirection:"descending"},name:"Sortable w/ Defaults",parameters:{docs:{source:{code:`<UsaTable :headers="${JSON.stringify(o,null,"	")}" 
:rows="${JSON.stringify(l,null,"	")}" default-sort-header="percent" default-sort-direction="descending"></UsaTable>`}}}},M={args:{...d,headers:o.map(({...e})=>(e.sortable=!1,e)),rows:l,"slot:caption":"<em>A table caption slot</em>"},name:"Caption Slot",parameters:{docs:{source:{code:`<UsaTable :headers="${JSON.stringify(o.map(({...e})=>(e.sortable=!1,e)),null,"	")}" 
:rows="${JSON.stringify(l,null,"	")}"><template #caption><em>A table caption slot</em></template></UsaTable>`}}}},B={args:{...d,headers:o.map(({...e})=>(e.sortable=!1,e)),rows:l,"slot:headers":"<th>Header 1</th><th>Header 2</th><th>Header 3</th><th>Header 4</th>"},name:"Headers Slot",parameters:{docs:{source:{code:`<UsaTable :rows="${JSON.stringify(l,null,"	")}"><template #headers><tr><th>Header 1</th><th>Header 2</th><th>Header 3</th><th>Header 4</th></tr></template></UsaTable>`}}}},K={args:{...d,headers:o.map(({...e})=>(e.sortable=!1,e)),rows:l,default:"<td>Cell 1</td><td>Cell 2</td><td>Cell 3</td><td>Cell 4</td>"},name:"Default (Rows) Slot",parameters:{docs:{source:{code:`<UsaTable :headers="${JSON.stringify(o.map(({...e})=>(e.sortable=!1,e)),null,"	")}"><tr><td>Cell 1</td><td>Cell 2</td><td>Cell 3</td><td>Cell 4</td></tr></UsaTable>`}}}},G={args:{...d,headers:o,rows:l,caption:"Inspect aria-live region...","table-announcement":"Sorted By: {{ currentSortedHeaderLabel }} ({{ currentSortedHeader }}), Direction: {{ currentSortDirection }}, Table Caption: {{ tableCaption }}"},name:"Table Announcement Slot",parameters:{docs:{source:{code:`<UsaTable :headers="${JSON.stringify(o,null,"	")}" 
:rows="${JSON.stringify(l,null,"	")}" caption="Inspect aria-live region..."><template #table-announcement="{currentSortedHeaderLabel, currentSortedHeader, currentSortDirection, tableCaption}">'Sorted By: {{ currentSortedHeaderLabel }} ({{ currentSortedHeader }}), Direction: {{ currentSortDirection }}, Table Caption: {{ tableCaption }}'></template></UsaTable>`}}}};var le,ie,de;D.parameters={...D.parameters,docs:{...(le=D.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    headers: testHeaders.map(({
      ...header
    }) => {
      header.sortable = false;
      return header;
    }),
    rows: testRows
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTable :headers="\${JSON.stringify(testHeaders.map(({
          ...header
        }) => {
          header.sortable = false;
          return header;
        }), null, '\\t')}" \\n:rows="\${JSON.stringify(testRows, null, '\\t')}"></UsaTable>\`
      }
    }
  }
}`,...(de=(ie=D.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ce,ue,me;q.parameters={...q.parameters,docs:{...(ce=q.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    headers: testHeaders.map(({
      ...header
    }) => {
      header.sortable = false;
      return header;
    }),
    rows: testRows,
    caption: 'A table caption'
  },
  name: 'Caption',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTable :headers="\${JSON.stringify(testHeaders.map(({
          ...header
        }) => {
          header.sortable = false;
          return header;
        }), null, '\\t')}" \\n:rows="\${JSON.stringify(testRows, null, '\\t')}" caption="A table caption"></UsaTable>\`
      }
    }
  }
}`,...(me=(ue=q.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,he,fe;J.parameters={...J.parameters,docs:{...(pe=J.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    headers: testHeaders.map(({
      ...header
    }) => {
      header.sortable = false;
      return header;
    }),
    rows: testRows,
    borderless: true
  },
  name: 'Borderless',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTable :headers="\${JSON.stringify(testHeaders.map(({
          ...header
        }) => {
          header.sortable = false;
          return header;
        }), null, '\\t')}" \\n:rows="\${JSON.stringify(testRows, null, '\\t')}" :borderless="true"></UsaTable>\`
      }
    }
  }
}`,...(fe=(he=J.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var ye,be,ge;j.parameters={...j.parameters,docs:{...(ye=j.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    headers: testHeaders.map(({
      ...header
    }) => {
      header.sortable = false;
      return {
        ...header
      };
    }),
    rows: testRows,
    striped: true
  },
  name: 'Striped',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTable :headers="\${JSON.stringify(testHeaders.map(({
          ...header
        }) => {
          header.sortable = false;
          return header;
        }), null, '\\t')}" \\n:rows="\${JSON.stringify(testRows, null, '\\t')}" :striped="true"></UsaTable>\`
      }
    }
  }
}`,...(ge=(be=j.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var ve,Se,we;P.parameters={...P.parameters,docs:{...(ve=P.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    headers: testHeaders.map(({
      ...header
    }) => {
      header.sortable = false;
      return header;
    }),
    rows: testRows,
    compact: true
  },
  name: 'Compact',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTable :headers="\${JSON.stringify(testHeaders.map(({
          ...header
        }) => {
          header.sortable = false;
          return header;
        }), null, '\\t')}" \\n:rows="\${JSON.stringify(testRows, null, '\\t')}" :compact="true"></UsaTable>\`
      }
    }
  }
}`,...(we=(Se=P.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};var ke,Te,xe;_.parameters={..._.parameters,docs:{...(ke=_.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    headers: testHeaders.map(({
      ...header
    }) => {
      header.sortable = false;
      return header;
    }),
    rows: testRows,
    scrollable: true,
    caption: 'Resize to small screen...'
  },
  name: 'Scrollable',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTable :headers="\${JSON.stringify(testHeaders.map(({
          ...header
        }) => {
          header.sortable = false;
          return header;
        }), null, '\\t')}" \\n:rows="\${JSON.stringify(testRows, null, '\\t')}" :scrollable="true" caption="Resize to small screen..."></UsaTable>\`
      }
    }
  }
}`,...(xe=(Te=_.parameters)==null?void 0:Te.docs)==null?void 0:xe.source}}};var He,Ae,Ue;E.parameters={...E.parameters,docs:{...(He=E.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    headers: testHeaders.map(({
      ...header
    }) => {
      header.sortable = false;
      return header;
    }),
    rows: testRows,
    stacked: true,
    caption: 'Resize to small screen...'
  },
  name: 'Stacked',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTable :headers="\${JSON.stringify(testHeaders.map(({
          ...header
        }) => {
          header.sortable = false;
          return header;
        }), null, '\\t')}" \\n:rows="\${JSON.stringify(testRows, null, '\\t')}" :stacked="true" caption="Resize to small screen..."></UsaTable>\`
      }
    }
  }
}`,...(Ue=(Ae=E.parameters)==null?void 0:Ae.docs)==null?void 0:Ue.source}}};var Ie,Re,Ce;L.parameters={...L.parameters,docs:{...(Ie=L.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    headers: testHeaders.map(({
      ...header
    }) => {
      header.sortable = false;
      return header;
    }),
    rows: testRows,
    stackedHeader: true,
    caption: 'Resize to small screen...'
  },
  name: 'Stacked Header',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTable :headers="\${JSON.stringify(testHeaders.map(({
          ...header
        }) => {
          header.sortable = false;
          return header;
        }), null, '\\t')}" \\n:rows="\${JSON.stringify(testRows, null, '\\t')}" :stacked-header="true" caption="Resize to small screen..."></UsaTable>\`
      }
    }
  }
}`,...(Ce=(Re=L.parameters)==null?void 0:Re.docs)==null?void 0:Ce.source}}};var $e,Ve,Ne;z.parameters={...z.parameters,docs:{...($e=z.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    headers: testHeaders,
    rows: testRows
  },
  name: 'Sortable',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTable :headers="\${JSON.stringify(testHeaders, null, '\\t')}" \\n:rows="\${JSON.stringify(testRows, null, '\\t')}"></UsaTable>\`
      }
    }
  }
}`,...(Ne=(Ve=z.parameters)==null?void 0:Ve.docs)==null?void 0:Ne.source}}};var Oe,De,qe;F.parameters={...F.parameters,docs:{...(Oe=F.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    headers: testHeaders,
    rows: testRows,
    defaultSortHeader: 'percent',
    defaultSortDirection: 'descending'
  },
  name: 'Sortable w/ Defaults',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTable :headers="\${JSON.stringify(testHeaders, null, '\\t')}" \\n:rows="\${JSON.stringify(testRows, null, '\\t')}" default-sort-header="percent" default-sort-direction="descending"></UsaTable>\`
      }
    }
  }
}`,...(qe=(De=F.parameters)==null?void 0:De.docs)==null?void 0:qe.source}}};var Je,je,Pe;M.parameters={...M.parameters,docs:{...(Je=M.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    headers: testHeaders.map(({
      ...header
    }) => {
      header.sortable = false;
      return header;
    }),
    rows: testRows,
    'slot:caption': '<em>A table caption slot</em>'
  },
  name: 'Caption Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTable :headers="\${JSON.stringify(testHeaders.map(({
          ...header
        }) => {
          header.sortable = false;
          return header;
        }), null, '\\t')}" \\n:rows="\${JSON.stringify(testRows, null, '\\t')}"><template #caption><em>A table caption slot</em></template></UsaTable>\`
      }
    }
  }
}`,...(Pe=(je=M.parameters)==null?void 0:je.docs)==null?void 0:Pe.source}}};var _e,Ee,Le;B.parameters={...B.parameters,docs:{...(_e=B.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    headers: testHeaders.map(({
      ...header
    }) => {
      header.sortable = false;
      return header;
    }),
    rows: testRows,
    'slot:headers': '<th>Header 1</th><th>Header 2</th><th>Header 3</th><th>Header 4</th>'
  },
  name: 'Headers Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTable :rows="\${JSON.stringify(testRows, null, '\\t')}"><template #headers><tr><th>Header 1</th><th>Header 2</th><th>Header 3</th><th>Header 4</th></tr></template></UsaTable>\`
      }
    }
  }
}`,...(Le=(Ee=B.parameters)==null?void 0:Ee.docs)==null?void 0:Le.source}}};var ze,Fe,Me;K.parameters={...K.parameters,docs:{...(ze=K.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    headers: testHeaders.map(({
      ...header
    }) => {
      header.sortable = false;
      return header;
    }),
    rows: testRows,
    default: '<td>Cell 1</td><td>Cell 2</td><td>Cell 3</td><td>Cell 4</td>'
  },
  name: 'Default (Rows) Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTable :headers="\${JSON.stringify(testHeaders.map(({
          ...header
        }) => {
          header.sortable = false;
          return header;
        }), null, '\\t')}"><tr><td>Cell 1</td><td>Cell 2</td><td>Cell 3</td><td>Cell 4</td></tr></UsaTable>\`
      }
    }
  }
}`,...(Me=(Fe=K.parameters)==null?void 0:Fe.docs)==null?void 0:Me.source}}};var Be,Ke,Ge;G.parameters={...G.parameters,docs:{...(Be=G.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    headers: testHeaders,
    rows: testRows,
    caption: 'Inspect aria-live region...',
    'table-announcement': 'Sorted By: {{ currentSortedHeaderLabel }} ({{ currentSortedHeader }}), Direction: {{ currentSortDirection }}, Table Caption: {{ tableCaption }}'
  },
  name: 'Table Announcement Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTable :headers="\${JSON.stringify(testHeaders, null, '\\t')}" \\n:rows="\${JSON.stringify(testRows, null, '\\t')}" caption="Inspect aria-live region..."><template #table-announcement="{currentSortedHeaderLabel, currentSortedHeader, currentSortDirection, tableCaption}">'Sorted By: {{ currentSortedHeaderLabel }} ({{ currentSortedHeader }}), Direction: {{ currentSortDirection }}, Table Caption: {{ tableCaption }}'></template></UsaTable>\`
      }
    }
  }
}`,...(Ge=(Ke=G.parameters)==null?void 0:Ke.docs)==null?void 0:Ge.source}}};const fa=["DefaultTable","CaptionTable","BorderlessTable","StripedTable","CompactTable","ScrollableTable","StackedTable","StackedHeaderTable","SortableTable","DefaultSortTable","CaptionSlotTable","HeadersSlotTable","DefaultRowsSlotTable","TableAnnouncementSlotTable"];export{J as BorderlessTable,M as CaptionSlotTable,q as CaptionTable,P as CompactTable,K as DefaultRowsSlotTable,F as DefaultSortTable,D as DefaultTable,B as HeadersSlotTable,_ as ScrollableTable,z as SortableTable,L as StackedHeaderTable,E as StackedTable,j as StripedTable,G as TableAnnouncementSlotTable,fa as __namedExportsOrder,ha as default};
