# FizzBuzz

## その1

+ [JavaScfiptでワンライナーFizzBuzz](https://qiita.com/fits-fujiura/items/6bf51edbe976480a5189)
+ [Array](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)
+ [Array() コンストラクター](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)
+ [Object.keys()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
+ [Array.prototype.slice()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
+ [Array.prototype.fill()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)

```
let num = 100; // FizzBuzz数
console.log(Object.keys(Array(num).fill()).map(i=>Number(i)+1).map(i=>i%3==0&&i%5==0?"Fizz Buzz":i%3==0?"Fizz":i%5==0?"Buzz":i).join("\n")) // 140byte
```

> Object.keys() メソッドは、指定されたオブジェクトが持つプロパティの 名前の配列を、通常のループで取得するのと同じ順序で返します。

> Array() コンストラクターは Array オブジェクトを生成します。

> Array コンストラクターに渡された唯一の引数が 0 から 232-1 の間（両端を含む）の整数であった場合は、新しい JavaScript の配列を返し、その length プロパティがその値になります

> ここからさらに、"Fizz" と "Buzz" をつなげてよい、かつ配列スプレッド構文も用いれば

下記の通り

> このコードでは、[...Array(num+1).keys()] の部分で、0から num までの整数からなる配列を生成しています。具体的には、Array(num+1) で num+1 個の要素を持つ配列を作成し、その配列に対して keys() メソッドを呼び出すことで、0から num までの連続した整数が要素として含まれるイテレーターを取得します。そして、スプレッド演算子 ... を使って、イテレーターから配列を生成しています。

> その後、.slice(1, num+1) の部分で、この配列からインデックス1（つまり2番目の要素）から num+1 番目の要素までの部分配列を取得しています。この操作によって、元の配列の先頭の要素（0）が除外され、1から num までの整数が含まれる配列が得られます。

> つまり、[...Array(num+1).keys()].slice(1,num+1) の部分は、1から num までの連続した整数からなる配列を生成しています。

> その後、.map(i => (i%3?'':'Fizz')+(i%5?'':'Buzz')||i) の部分で、各整数に対して FizzBuzz のルールを適用しています。最後に、.join("\n") の部分で、各結果を改行で連結しています。

> [...Array(num+1).keys()] という記法は、0から num までの連続した整数からなる配列を生成するための一般的な方法です。この記法は、JavaScriptの配列を簡潔に生成するための一般的な手法の1つです。

```
let num = 100; // FizzBuzz数
console.log([...Array(num+1).keys()].slice(1,num+1).map(i=>(i%3?'':'Fizz')+(i%5?'':'Buzz')||i).join("\n")) // 107byte
```

> for 文

```
let num = 100; // FizzBuzz数
for(i=0;i++<num;)console.log((i%3?'':'Fizz')+(i%5?'':'Buzz')||i)
```

```for(i=0;i++<num;)```の```i++<num;```はcondition（条件式）という認識で良いか？

もしそうならば、i は加算されることはないのでは？（afterthought=増分式）がないから

この場合は、```i++<num```が、```i++```の部分で加算を行っており、条件式と増分式を兼ねるような役割を果たしているため、iには加算がされる

[for文](https://jsprimer.net/basic/loop/)

```
for (初期化式; 条件式; 増分式) {
    実行する文;
}

for文の実行フローは次のようになります。

1. 初期化式 で変数の宣言
2. 条件式 の評価結果がtrueなら次のステップへ、falseなら終了
3. 実行する文 を実行
4. 増分式 で変数を更新
5. ステップ2へ戻る
```

## その2

[【ES6】FizzBuzz問題のJavaScript最短コードを解説します](https://qiita.com/obake_fe/items/041715068665dc94aac4)

```
for(i=1;i<101;i++){console.log(i%15?i%3?i%5?i:'Buzz':'Fizz':'FizzBuzz')}
```

```
for(i=0;++i<101;console.log(i%5?x||i:x+'Buzz'))x=i%3?'':'Fizz'
```

## その3

[【JavaScript】FizzBuzz問題をワンライナーで書いてみた](https://qiita.com/ken___/items/35f8c4e4499cb70e2eee)

```
Array.from(Array(100)).map((_, i) => [i+1, 'fizz', 'buzz', 'fizzbuzz'][[1,0,0][(i+1)%3]+[2,0,0,0,0][(i+1)%5]]).forEach(item => console.log(item));
```

> 長さが100の新しい空の配列を作成しております。要素は全てundefinedで初期化されとるらしいです。

```
Array(100)
```

> アンダーバーは仮引数。
mapの関数内で使用されないことを示しとります。
i はArray(100)で定義した配列のキーなんで 0 スタートになります。

```
map((_, i)...略)
```

> FizzBuzz用の配列を定義。

```
[i+1, 'fizz', 'buzz', 'fizzbuzz'] 
```