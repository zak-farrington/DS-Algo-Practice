/**
 * @param {number} capacity
 */
class LRUCache {
    constructor(capacity)  {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if(!this.cache.has(key)) {
            return -1;
        }
        const keyValue = this.cache.get(key);

        this.cache.delete(key);
        this.cache.set(key, keyValue);
        return keyValue;
    } 

    put(key, value) {
        if(this.cache.has(key)) {
            // Must delete before updating to ensure key order complies with LRU cache requirement
            this.cache.delete(key);
        }
        this.cache.set(key, value);
     
        if(this.cache.size > this.capacity) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
    }
}