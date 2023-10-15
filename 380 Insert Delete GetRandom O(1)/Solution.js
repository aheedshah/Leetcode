var RandomizedSet = function() {
    this.hashMap = new Map();
    this.arrayList = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.hashMap.has(val)) {
        return false;
    }

    this.hashMap.set(val, this.arrayList.length);
    this.arrayList.push(val);
    return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.hashMap.has(val)) {
        const index = this.hashMap.get(val);
        const lastEl = this.arrayList[this.arrayList.length - 1];

        this.arrayList[index] = lastEl;
        this.hashMap.set(lastEl, index);

        this.arrayList.pop();
        this.hashMap.delete(val);
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * this.arrayList.length);
    return this.arrayList[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */