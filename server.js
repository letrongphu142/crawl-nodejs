const cheerio = require('cheerio'); // khai báo module cheerio
const fs = require('fs'); // require thêm module filesystem
const request = require('request-promise'); // khai báo module request-promise
const axios = require("axios");

//Hàm gọi các page để get data
const crawlDataAllPage = async (url) => {
    return await request(url).then(response => new Promise(resolve => { // gửi request đến trang
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
const handelCall = async (index = 1, maxPage = 7) => {
    if (index == maxPage) {
        fs.writeFileSync('data.json', JSON.stringify(fullData)); // lưu dữ liệu vào file data.json
    } else {
        //khai bao url page
        const url = `https://123job.vn/tuyen-dung?sort=new&page=${index}`;
        const crawlData = await crawlDataAllPage(url);
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
//=============================================================================
//Crawl data website Pokemon
const crawlDataPokemon = async (maxPages = 50) => {
    // khai bao url page
    const paginationURLsToVisit = ["https://scrapeme.live/shop"];
    const visitedURLs = [];

    const productURLs = new Set();

    while (
        paginationURLsToVisit.length !== 0 &&
        visitedURLs.length <= maxPages
    ) {
        // trang dang crawl
        const paginationURL = paginationURLsToVisit.pop();

        // Duyet HTML
        const pageHTML = await axios.get(paginationURL);

        //xac nhan da crwal
        visitedURLs.push(paginationURL);

        // Crawl data vs cheerio
        const $ = cheerio.load(pageHTML.data);

        // Duyet
        $(".page-numbers a").each((index, element) => {
            const paginationURL = $(element).attr("href");
            if (
                !visitedURLs.includes(paginationURL) &&
                !paginationURLsToVisit.includes(paginationURL)
            ) {
                paginationURLsToVisit.push(paginationURL);
            }
        });

        $("li.product a.woocommerce-LoopProduct-link").each((index, element) => {
            const productURL = $(element).attr("href");
            productURLs.add(productURL);
        });
    }

    // Luu du lieu vao pokemon.json
    fs.writeFileSync('pokemon.json', JSON.stringify([...productURLs]));
}
//================================================================================
handelCall();

crawlDataPokemon();
