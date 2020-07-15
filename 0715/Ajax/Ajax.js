class Ajax {
    constructor({ url, method = 'GET', async = true }) {
        this.url = url;
        this.method = method;
        this.async = async;
        const res = this.sendXhr();
        return res;
    }
    sendXhr() {
        const req = new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                        let res = xhr.responseText;
                        resolve(res);
                    } else {
                        reject('error');
                    }
                }
            };
            xhr.open(this.method, this.url, this.async);
            xhr.send();
        });
        return req;
    }
}
function demo1() {
    new Ajax({ url: 'https://autumnfish.cn/api/joke' }).then(value => {
        console.log(value);
    });
}

async function demo2() {
    const res = await new Ajax({ url: 'https://autumnfish.cn/api/joke' });
    console.log(res);
}
demo1();
demo2();
