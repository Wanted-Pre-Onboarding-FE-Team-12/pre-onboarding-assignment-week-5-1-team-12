export class CacheStorage {
  constructor(cacheNmae) {
    this.cacheNmae = cacheNmae;
    this.url = `${process.env.REACT_APP_BASE_URL}/sick?sickNm_like=${cacheNmae}`;
  }

  async initialize() {
    this.cacheStorage = await caches.open(this.cacheNmae);
  }

  async get() {
    await this.initialize();
    const cachedResponse = await this.cacheStorage.match(this.url);

    if (!cachedResponse || !cachedResponse.ok) {
      return false;
    }

    const date = new Date(cachedResponse.headers.get('Date'));
    if (Date.now() > date.getTime() + 1000 * 60) {
      return false;
    }

    return await cachedResponse.json();
  }

  async add() {
    await this.initialize();
    await this.cacheStorage.add(this.url);
  }
}
