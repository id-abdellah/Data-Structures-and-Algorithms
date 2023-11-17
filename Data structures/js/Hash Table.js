/**
 * Hash Table Data Structure
 * 
 * hash function => (sum of all charCodes of key letter) % size
 * to avoid collisions => i used bucket which contains array of key-value 
 */
class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hashFunction(key) {
        let total = 0;
        if (typeof key === "number") {
            total = key;
        } else {
            for (let i = 0; i < key.length; i++) {
                total += key.charCodeAt(i);
            }
        }
        return total % this.size
    }

    set(key, value) {
        let index = this.hashFunction(key);

        let bucket = this.table[index];

        if (!bucket) {
            this.table[index] = [[key, value]];
        } else {
            let isThereSameKey = bucket.find(item => item[0] === key);

            if (isThereSameKey) {
                sameKeyIndex = bucket.findIndex(item => item[0] === key);
                bucket[sameKeyIndex] = [key, value];
            } else {
                bucket.push([key, value]);
            }
        }
    }

    get(key) {
        let index = this.hashFunction(key);

        let bucket = this.table[index];

        if (bucket) {
            let itemIndex = bucket.findIndex(item => item[0] === key);
            return bucket[itemIndex][1];
        } else {
            return -1
        }
    }

    remove(key) {
        let index = this.hashFunction(key);
        let bucket = this.table[index];
        if (bucket) {
            let itemIndex = bucket.findIndex(item => item[0] === key);
            bucket.splice(itemIndex, 1);
            return true
        }
        return false
    }

    print() {
        let hashTableData = [];
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                hashTableData.push(this.table[i])
            }
        }
        return hashTableData
    }
}
