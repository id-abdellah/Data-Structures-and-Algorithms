# <span style="color: white; font-size: 50px;">Bubble Sort</span>

**Bubble sort** algorithm is an algorithm that sorts an array by comparing two adjacent elements and swapping them if they are not in the intended order. Here order can be anything like increasing or decreasing.

### How Bubble-Sort Works?

We have an unsorted array arr = [ 1, 4, 2, 5, -2, 3 ], and the task is to sort the array using bubble sort in ascending order.

Bubble sort compares the element from index 0 and if the 0th index value is greater than 1st index value, then the values get swapped and if the 0th index value is less than the 1st index value, then nothing happens.

Next, the 1st index value compares to the 2nd index value, and then the 2nd index value compares to the 3rd index value, and so on…

### Implementation

```js
/*
    Code Explanation
    
    اولا لا swap عرفناها. انها فكل دورة كدير مقارنة و علا حسابها كتشوف واش دير loop دبا بالنسبة ل جزئية ال

    بالكامل sort يسالي و المصفوفة مزال مدارتش ليها loop ولكن كاين مشكلة وهي انها يمكن ال
    سالا اذن غتوقف loop كيدار ولكن ال swap between number يعني باقي ال

    swapped variable مع do while loop ولهذا ستعملنا

    false قيمتو swapp كنخليو ال loop قبل ميبدا ال do يعني فال
    swapped into true و كنحولو قيمة ال swap و الا تحقق الشرط كنديرو for loop, فمرحلة ال
    do و كيعاود داكشي لي كاين فال true قيمتو swapped كيلقا while فاش كندوزو لل

    مغيوقفش while loop ال array كيدار بين عناصر ال swap الخلاصة وهي ان ماحد
    swap كاملة و مطرا تا iteration اي ان طرات swap false تاتكون قيمة ال
*/

function bubbleSort(arr) {
    let isSwapped;
    do {
        isSwapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                isSwapped = true;
            }
        }
    } while (isSwapped);

    return arr
}

bubbleSort([-2, -10, -1, 10, 23, 8, 100, 12, 9]),
// [-10, -2, -1, 8, 9, 10, 12, 23, 100] 
bubbleSort([3, 4, 1, 2, 7, 4, 9, 11, 22, 13, 75, -2, -7, 4, -10]),
// [-10, -7, -2, 1, 2, 3, 4, 4, 4, 7, 9, 11, 13, 22, 75]

/*
    يعني دبا ال الفكرة ديال هاد ال الخوارزمية انها كتقار العنصر مع العنصر المجاور اولا الموالي ليه
    المقارنة كتكون اما اكبر او اصغر من وعلاحسابها كنشوفو واش بغينا المصفوفة تكون مرتبة تصاعديا او تنازليا
    نعتابرو حنا بغينها تكون تصاعديا يعني غتقار واش العنصر اكبر من العنصر المجاور
    يعني كنبدلو ليهم البلايص swap فحالة كان اكبر منو كنديرو بناتهم
    وبهذا كنضمو ان  فكل دورة العناصر الكبار كيمشيو للخر ديال المصفوفة 
*/
```

<br>
<br>

# <span style="color: white; font-size: 50px;">Insertion Sort</span>

### Insertion Sort idea

Virtually split the array into a sorted and an unsorted part.

Assume that the first element is already sorted and remaining elements are unsorted.

Select an unsorted element and compare with all elements in the sorted part.

If the element in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part. else shift larger elements in the sorted part towards the right.

Insert the selected element at the right index.

repeat till all the unsorted elements are placed in the right order.

<figure style="display: flex; gap: 20px; align-items: center; margin: 20px;">
<img src="./assets/insertion-sort.png" style="width: 70%" />
<img src="./assets/insertion-sort-gif.gif" style="width: 30%" />
</figure>

### Implementation

```js
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInser = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > numberToInser) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = numberToInser;
    }
    return arr
}
```

<br>
<br>

# <span style="color: white; font-size: 50px;">Quick Sort</span>

Sorting is a common task in computer programming, and there are many sorting algorithms available that can be used in different ways. One of the most popular and efficient sorting algorithms is quick sort.

Quick sort is a divide-and-conquer algorithm that sorts an array by choosing a pivot element and partitioning the array into two subarrays, one containing elements smaller than the pivot, and the other containing elements larger than the pivot. The two subarrays are then recursively sorted until the entire array is sorted.

<img src="./assets/Quick Sort.png" style="width: 50%; margin: 20px auto; display: block" />

### Implementation

```js
function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([8, 2, 4, 7, 1, 3, 6, 9, 5])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(quickSort([8, 20, -2, 4, -6, -10])); // [-10, -6, -2, 4, 8, 20]
```


<br>
<br>

# <span style="color: white; font-size: 50px;">Merge Sort</span>

<figure style="display: block; margin: 20px auto;">
<img src="./assets/merge array 1.png" style="display: block; margin: 20px auto; width: 80%" />
<img src="./assets/merge 2.png" style="display: block; margin: 20px auto; width: 80%" />
</figure>

Divide the array into sub arrays, each containing only one element (an array with one element is considered sorted).

Repeatedly merge the sub arrays to produce new sorted sub arrays until there in only one sub array remaining. that will be the sorted array.

```js
function mergesort(arr) {
  if (arr.length < 2) {
    return arr
  }
  const mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)
  return merge(mergesort(leftArr), mergesort(rightArr))
}

function merge(leftArr, rightArr) {
  const sortedArr = []
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift())
    } else {
      sortedArr.push(rightArr.shift())
    }
  }
  const resultArr = [...sortedArr, ...leftArr, ...rightArr]
  return resultArr
}

const arr = [8, 20, -2, 4, -6]
console.log(mergesort(arr)) // [-6, -2, 4, 8, 20]
```