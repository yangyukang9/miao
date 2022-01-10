// var number = Math.round(Math.random() * 100)
// do{
//   var n = Number(prompt())
//   if(n > number){
//     alert('大了');
//   }else if(n < number){
//     alert('小了');
//   }
// }while(n !== number)
// alert('正确')

// var n = Number(prompt())
// var m = 0
// var b = 0
// while(m < n){
//   var a = Number(prompt())
//   b = b + a
//   m = m + 1
// }
// var c = b / n
// console.log(c.toFixed(2));

// var n = 0
// var sum = 0
// while(n < 12){
//   var ins = Number(prompt())
//   n = n + 1
//   sum  = sum + ins
// }
// num = sum / 12
// console.log('$'+ num.toFixed(2));

// var n = Number(prompt())
// var m = 0
// var sum = 0
// while (m < n) {
//   var a = Number(prompt())
//   m = m + 1
//   sum = sum + a
// }
// var b = sum / n
// console.log(b.toFixed(4));

// var n = Number(prompt())
// var m = 0
// var sum = 0
// while (m < n) {
//   var a = Number(prompt())
//   m++
//   sum += a
// }
// var b = sum / n
// console.log(sum);
// console.log(b.toFixed(5));

// for (var i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// var a = prompt()
// var b = ''
// for(c=0;c<a;c++){
//   for(d=c;d<a;d++){
//     b += '*'
//   }
//   b += '\n'
// } 
// console.log(b);

// var n = prompt()
// var s = ''
// for(i=0;i<=n;i++){
//   for(j=0;j<i;j++){
//     s += '*'
//   }
//   s += '\n'
// } 
// console.log(s);

// var a = Number(prompt())
// var n = Number(prompt())
// var result = 1
// for(var i = 0;i<n;i++){
//   result *= a   
// }
// console.log(result);


// var x = Number(prompt())
// var n = Number(prompt())
// for(i = 0;i<n;i++){
//   x = x + x *0.001
// }
// console.log(x.toFixed(4));

// var R = Number(prompt())
// var M = Number(prompt())
// var Y = Number(prompt())
// for(var i = 0;i<Y;i++ ){
//   M +=  M * R * 0.01
// }
// console.log(parseInt(M));

// var N = Number(prompt())
// var K = Number(prompt())
// var money = 0
// var house = 200
// var buy = false
// for(var i = 1;i<=20;i++){
//   money += N
//   if(money >= house){
//     console.log(i);
//     buy = true
//     break
//   }
//   house += house * K * 0.01 
// }
//   if(!buy){
//     console.log('Impossible');
//   }

// var k = Number(prompt())
// var a = 0
// var b = 1
// for(var i = 1;i<=k;i++){
//   var c = a + b
//   a = b 
//   b = c 
// }
// console.log(a);
//鸡尾酒
// var n = Number(prompt())
// var a = Number(prompt())
// var b = Number(prompt())
// for(var i = 1; i<n;i++){
//   var c = Number(prompt())
//   var d = Number(prompt()) 
//   var one = b / a
//   var two = d / c
//   if(two - one > 0.05){
//     console.log('better');
//   }else if(one - two > 0.05){
//     console.log('worse');
//   }else{
//     console.log('same');
//   }
// }
//救援
// var n = Number(prompt())
// var dis = 0 
// var sum= 0
// for(var i = 0;i<n;i++){
//   var x = Number(prompt())
//   var y = Number(prompt())
//   var p = Number(prompt())
//   dis = Math.sqrt(x**2+y**2)
//   sum += 2 * dis / 50 + 1.5 * p
// }
// console.log(Math.ceil(sum))

//弹跳球
// var h = Number(prompt())
// var sum = h
// for(var i = 2;i<=10;i++){
//   h = h / 2 //第i次落地之前的高度
//   sum += h * 2 //落地后距离累加
// }
// console.log((sum,h / 2));

//角谷猜想
// var n = Number(prompt())
// while (n != 1) {
//   if(n % 2 == 1){
//     var t = n * 3 + 1
//     console.log(n + '*3+1='+ t);
//     n = t
//   }else if(n % 2 == 0){
//     var t = n / 2
//     console.log(n + '/2='+ t);
//     n = t
//   }
// }
// console.log('End');

//储蓄计划 
// var money = 0 //手里的钱
// var ins = 0 //存进去的钱
// var flag = false
// for(var i = 1;i<=12;i++){
//   money += 300
//   var n = Number(prompt())
//   if(money < n){
//     console.log(-i);
//     flag = true
//     break
//   }
//   money -= n
//   if(money >= 100){
//    var live = money % 100
//    ins += money - live
//     money = live
//   }
// }
// if(!flag){
//   console.log(ins * 1.2 + money);
// }


//药房管理  
// var m = Number(prompt())
// var n = Number(prompt())
// var sum =0
// for(var i= 0;i<n;i++){
//   var y = Number(prompt())
//   if(y <= m){
//     m -= y
//   }else if(m < y){
//     sum++
//   }
// }
// console.log(sum)

//血压
// function isNormal(n){
//   var sum = 0 //正常血压小时
//   var max = 0 //最大正常时间
//   for(var i = 0;i<n;i++){
//     var high = Number(prompt())
//     var low = Number(prompt())
//     Normal = high >=90 && high <= 140 &&low>=60 &&low <=90
//     if(Normal){
//       sum++
//       if(sum > max){
//         max = sum
//       }
//     }else{
//       sum = 0
//     }
//   }
//   return max
// }

//特殊自然数
// for(var i = 1;i<= 999;i++){
//   var a7 = i % 7
//   var b7 = (i - a7) / 7 % 7
//   var c7 = (i - a7 - b7 * 7) / 7 / 7 % 7

//   var a9 = i % 9
//   var b9 = (i - a9) / 9 % 9
//   var c9 = (i - a9 - b9 * 9) / 9 / 9 % 9

//   if(a7 == c9 && b7 == b9 && c7 ==a9){
//     console.log(i,''+c7 + b7 + a7,''+ c9 + b9 +a9)
//     break
//   }
// }

//满足条件的4位数
// var n = Number(prompt())
// var sum = 0
// for(var i =0;i< n;i++){
//   var c = Number(prompt())
//   var ge = c % 10
//   var shi = (c - ge) / 10 % 10 
//   var bai = (c - ge - shi * 10) /100 % 10
//   var qian =(c - ge - shi * 10 - bai * 100) / 1000
//   if(ge - qian - bai - shi > 0){
//     sum++
//   }
// }
// console.log(sum);


//级数求和
// var k = Number(prompt())
// var s = 0
// for(var i = 1;;i++){
//   s += 1 / i
//   if(s >  k){
//     console.log(i)
//     break
//   }
// }

//分离整数的各个位数
// var n = Number(prompt())
// while (n > 0) {
//   var digit  = n % 10
//   console.log(digit);
//   n = (n - digit) / 10
// }

//数字反转
// var  n = Number(prompt())
// var  num = 0
// isNag = false
// if(n < 0){
//   n = -n
//   isNag = true
// }
// do{
//   var digit = n % 10
//   num = num * 10 + digit
//   n = (n - digit) / 10
// }while (n > 0)
// if(isNag){
//   console.log('-'+ num);
// }else{
//   console.log(num);
// }

//开关灯
//  var n = Number(prompt())  //灯的数
//  var m = Number(prompt()) //人的数
//  var lights = ''
//  var isFirst = true
// for(var i = 1; i <= n;i++){
//   var light = true   //true为开 false为关
//   for(var j = 1;j <= m ;j++){
//     if(i % j == 0){
//       light = !light
//     }
//   }
//   if(!light){
//     if(isFirst){
//       lights += i
//     }else{
//       lights += ',' + i
//     }
//     isFirst = false
//   }
// }
// console.log(lights);













//sqrt



//有效的完全平方数



//丑数
// var isUgly = function(n){
//   if(n < 1){
//     return false
//   }
//   while (n % 2 == 0) {
//     n = n / 2
//   }
//   while (n % 3 == 0) {
//     n = n / 3
//   } 
//   while (n % 5 == 0) {
//     n = n / 5
//   }
//   return n == 1
// }

// 各位相加
// var addDigits = function(num){
//   var sum = 0
//   while (num > 0) {
//     var digit = num % 10
//     sum += digit
//     num = (num - digit) / 10
//   }
//   if(sum < 10){
//     return sum
//   }else{
//     return addDigits(sum)
//   }
// }
//各位相加2
// var addDigits = function(num){
//   if(num == 0 ){
//     return 0
//   }
//   if(num % 9 == 0){
//     return 9
//   }
//   return num % 9
// }



//fizzBuzz
// var fizzBuzz = function(n){
//   var result = []
//   for (var i = 1; i <= n; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     result.push("FizzBuzz");
//   } else if (i % 3 == 0) {
//     result.push("Fizz");
//   } else if (i % 5 == 0) {
//     result.push("Buzz");
//   } else {
//     result.push(''+i);
//   }
// }
//   return result
// }

//最大连续1的个数
// var findMax = function(nums){
//   var max = 0
//   var c = 0
//   for(var i = 0; i< nums.length;i++){
//     if(nums[i] == 1){
//       c++
//       if(c > max){
//         max = c
//       }
//     }else{
//         c = 0
//       }
//   }
//   return max
// }

//power of three
// var isPowerOfThree = function(n){
//   if(n < 1){
//     return false
//   }
//   while (n % 3 == 0) {
//     n = n / 3
//   }
//   return n == 1
// }

//power of three2
// var isPowerOfThree = function(n){
//   if(n < 1){
//     return false
//   }
//   if(1162261467 % n == 0){//3的19次方
//     return true
//   }else{
//     return false
//   }
// }

//power of two
// var isPowerOftwo = function(n){

//整数反转
// var reverse= function(x){

// }

//删除有序数组中的重复项
// var removeDuplicates = function(nums) {
//   var nextPlace = 0
//   for(var i=1;i<nums.length;i++){
//     if(nums[i] !== nums[i-1]){
//       nums[++nextPlace] = nums[i]
//     }
//   }
//   return nextPlace
// }

// var twoSum = function(nums,target){
  
// }

// // 两数之和 II - 输入有序数组
// var twoSum = function(numbers, target) {

// }

// function min(a,b){
//   if(a > b ){
//     return b
//   }else{
//     return a
//   }
// }

// function isEven(n){
//   if(n == 0){
//     return true
//   }else if(n == 1){
//     return false
//   }else{
//     return isEven(n - 2)
//   }
// }


//阶乘
//  function factorial(n){
//    var result = 1 
//    for(var i = 1;i<=n;i++){
//      result *= i
//     }
//     return result
//  }

//素数
// function isPrime(n ){
//   for(var i = 2; i * i <= n;i++){
//     if(n % i ==0){
//       return false
//     } 
//   }
//   return true
// }

// 输出100内的素数
// for(var j = 1;j <100;j++){
//   if(isPrime(j)){
//     console.log(j);
//   }
// }

//与7有关
// function qiao7(n){
//   if(n % 7 == 0 ){
//     return true
//   }
//   while (n > 0) {
//     var digit = n % 10
//     if(digit == 7){
//       return true
//     }
//     n = (n - digit) / 10
//   }
//   return false
// }


//斐波那契数列
// function fibb(n){
//   var a = 0
//   var b = 1
//   for(var i = 0; i< n;i++){
//     b = a + b
//     a = b - a
//   }
//   return a 
// }

//判断水仙花数
// function isNarcissistic(n){
//   var digitWidth = 0
//   var m = n
//   while (m >0) {
//     var g = m % 10 
//     digitWidth++
//     m = (m - g) / 10
//   }
//   var sum = 0
//   m = n
//   while (m > 0) {
//     var g = m % 10
//     sum += g ** digitWidth
//     m = (m - g) / 10
//   }
//    return sum == n
// }
//    var n = Number(prompt())
//    console.log(isNarcissistic(n)  ? 'YES' : 'NO')


//计算一个数的宽度 /即几位数
// function digitWidth(n){
//   var m = n
//   if(m ==0){
//    return 1
//   }
//   var width = 0
//   while (n > 0) {
//     var g = n % 10 
//     width++
//     n = (n - g) / 10
//   }
//   return width
// }


//次方
// function power(x,n){
//   var result = 1
//   for(var i=0;i<n;i++){
//     result *= x
//   }
//   return result
// }



//输出10000内的水仙花数
// for(var i = 1;i<= 10000;i++){
//   if(isNarcissistic(i)){
//     console.log(i);
//   }
// }

// function isPalindrom(n){
//   var m = n
//   var reverse = 0
//   while (m >0) {
//     var digit = m % 10
//     reverse = reverse * 10 + digit
//     m = (m - digit) / 10
//   }
//   return reverse == n
// }
//   function digitWidth(n){
//   var m = n 
//   if(m ==0){
//    return 1
//   }
//   var width = 0
//   while (n > 0) {
//     var g = n % 10 
//     width++
//     n = (n - g) / 10
//   }
//   return width
// }
// function isPalindrom2(n){
//   var width = digitWidth(n)
//   for(var i = 1;i<= width /2;i++){
//     //右数第i位
//     var a = Math.trunc(n / Math.pow(10,i-1)) % 10
//     //左数第i位
//     var j = width - i + 1
//     var b = Math.trunc(n / Math.pow(10,j-1)) % 10
//     if(a != b){
//       return false 
//     }
//   }
//   return true
// }

//完全数
// function isCompleteNumber(n){
//   var sum = 1
//   var stop = Math.sqrt(n)
//   for(var i = 2;i<stop ;i++){
//     if(n % i == 0){ //如果i是n的因子 则累加到sum
//       var j = n / i
//       sum += i + j
//     }
//     if(stop == Math.trunc(stop)){
//       sum += stop
//     }
//   }
//   return sum == n
// }

// //输出10000以内的完全数
// for(var i = 0; i< 10000;i++){
//   if(isCompleteNumber(i)){
//    console.log(i);
//   }
// }


//itoa
//   function digitToChar(n) {
//     if(n == 0){
//       return '0'
//     }
//     if(n == 1){
//       return '1'
//     }
//     if(n == 2){
//       return '2'
//     }
//     if(n == 3){
//       return '3'
//     }
//     if(n == 4){
//       return '4'
//     }
//     if(n == 5){
//       return '5'
//     }
//     if(n == 6){
//       return '6'
//     }
//     if(n == 7){
//       return '7'
//     }
//     if(n == 8){
//       return '8'
//     }
//     if(n == 9){
//       return '9'
//     }
//   }


// function itoa(n){
//   var result = ''
//   while (n>0) {
//     var d = n % 10
//     result += digitToChar(d) 
//     n = (n - d) / 10
//   }
//   return result
// }



//lcf&lcm
// function lcflcm (n){

// }




//sqrt 二分法
function sqrt(n) {
  var mid = (0 + n ) / 2
  
}








//leeCode题目

//367
var isPerfectSquare = function (num) {
  var 
}


//69



//range
// function range(start,end,step= 1) {
//   var argCount = arguments.length
//   if(argCount == 1){
//     end = start
//     start = 1
//   }
//   var result = []
//   for(var i = start;step > 0 ? i<= end : i >= end;i+= step){
//     result.push(i)
//   }
//   return result
// }

//创建一个新的倒序数组并返回
// function reverseArray(array) {
//   var len = array.length
//   var result = Array(len)
//   for(var i = len-1;i>=0;i--){
//     result[len - i -1] = array[i]
//   } 
//   return result
// }

//就地倒序数组
// function reverseArrayInPlace(array) {
//   var len = array.length
//   var halfLen = Math.floor(len / 2)
//   for(var i = 0; i< halfLen;i++){
//     var t = len - i -1
//     var temp = array[i]
//     array[i] = array[t]
//     array[t] = temp
//   }
//   return array
// }   


//就地倒序数组2
 
// function reverseArrayInPlace2(array){
//   var i = 0
//   var j = array.length - 1
//   while (i < j) {
//     var temp = array[i]
//     array[i] = array[j]
//     array[j] = temp
//     i++
//     j--
//   }
//   return array
// }




// function deepEqual(a,b){
//   if(a === b){
//     return true
//   }
//   if(a !==a && b !== b){
//     return true
//   }
//   if(Array.isArray(a) && Array.isArray(b)){

//   }
//   if(!Array.isArray(a) && Array.isArray(b) && typeof a === 'object' && typeof b === 'object'){
//     for(var key in a){
//       if(!deepEqual(a[key],b[key])){
//         return false
//       }
//     }
//     for(var key in b){
//       if(!deepEqual(a[key],b[key])){
//         return false
//       }
//     }
//     return true
//   }
// }



//判断一个数组是否升序
function isSorted(ary) {
  for (var i = 1; i < ary.length; i++){
    if(ary[i] < ary[i - 1]){
      return false
    }
  }  
  return true
}

//交换数组第i项和第j项的值
function swap(ary,i,j) {
  var t = ary[i]
  ary[i] = ary[j]
  ary[j] = t
}

//冒泡排序
function bubbleSort(ary) {
  for (var i = ary.length-2; i >= 0; i--){
    var 换过 = false
    for(var j = 0; j <= i; j++ ){
      if(ary[j] > ary[j+1]){
        var 换过 = true
        swap(ary,j,j+1)
      }
    }
    if(!换过){
      break
    }
  }
  return ary
}

//选择排序
function selectSort(ary) {
  for(var i = 0;i<=ary.length-1;i++){
    //找出剩下的元素中最小的放入i
    var minIndex = i //假设查找范围第一项即为最小的
    for(var j = i + 1;i<ary.length -1;j++){
      if(ary[j] < ary[minIndex]){
        minIndex = j
      }
    }
    swap(ary,i,minIndex) //将最小的元素
  }
  return ary
}

// function mergeSort(ary) {
//   var mid = Math.floor(ary.length / 2)
//   var left = ary.slice(0,mid)
//   var right = ary.slice(mid)

//   mergeSort(left)
//   mergeSort(right)

//   var i = 0
//   var j = 0
//   var k = 0

//   n
// }


function arrayToList(array) {
  if(array.length == 0){
    return null
  }
  var nodes = []
  for (var i = 0; i < array.length; i++) {
    // 对于数组中的每个值创建一个链表节点
    var node = {
      val: array[i],
      next: null,
    } 
    nodes.push(node)
  }
  for (var i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1]
  }
  return nodes[0]
} 


function arrayToList2(array) {
  if(array.length ==0){
    return null
  }
  var head = {
    val : 0,
    next : null
  }
  var prev = head
  for (let i = 0; i < array.length; i++) {
    var node = {
      val : array[i],
      next : null
    }
    prev.next = node
    prev = node
  }
  return head
}


function listToArray(array) {
  
}



































var dik = [
  { name:['josh','maya'],
    'OnBase' :true,
  },
  { name:['jill','isabella'],
    'OnBase' :false,
  }
]































































































