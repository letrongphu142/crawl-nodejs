const cheerio = require('cheerio'); // khai báo module cheerio
const fs = require('fs'); // require thêm module filesystem
const request = require('request-promise'); // khai báo module request-promise
const logger = require('morgan'); //khai báo dependence morgan
const express = require('express'); //khai báo dependence express

//Hàm gọi các page để get data
const crawlDataAllPage = async (url) => {
    return await request(url).then(response => new Promise(resolve => { // gửi request đến trang
        console.log('log', typeof response)
        if (response) {
            const $ = cheerio.load(response);
            let data = []
            $('.job__list-item').each((index, el) => {
                const job = $(el).find('.job__list-item-title a').text();
                const company = $(el).find('.job__list-item-company span').text();
                const address = $(el).find('.job__list-item-info').find('.address').text();
                const salary = $(el).find('.job__list-item-info').find('.salary').text();

                data.push({
                    job, company, address, salary
                }); // đẩy dữ liệu vào biến data
            });
            resolve({ error: null, data });
        }
        else {
            resolve({ error, data: null });
        }
    }));
}
let fullData = [];
const handelCall = async (index = 1) => {
    if (index == 8) {
        fs.writeFileSync('data.json', JSON.stringify(fullData)); // lưu dữ liệu vào file data.json
    } else {
        const crawlData = await crawlDataAllPage(`https://123job.vn/tuyen-dung?sort=new&page=${index}`);
        if (crawlData && crawlData.data) {
            fullData = fullData.concat(crawlData.data);
            handelCall(index + 1);
        } else if (crawlData && crawlData.error) {
            console.log('Error', crawlData.error);
            handelCall(index + 1);
        } else {
            handelCall(index + 1);
        }
    }
};
handelCall();
